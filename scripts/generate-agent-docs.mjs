/**
 * 生成面向 Agent 的文档产物:
 *   public/llms.txt
 *   public/llms-full.txt
 *   public/docs/components/<slug>.md
 *   public/docs/component-api.json
 *
 * 数据源:component-catalog.ts(137 个组件)、docs-data.ts(12 篇精修文档)、
 * src/components/ui/<slug>.tsx(自动提取 Props 类型定义)。
 *
 * 运行:bun scripts/generate-agent-docs.mjs(由 build 脚本自动调用)
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { componentCatalog } from "../src/lib/component-catalog.ts"
import { componentDocs } from "../src/lib/docs-data.ts"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = path.join(root, "public")
const docsOutDir = path.join(publicDir, "docs", "components")
const SITE = "https://cult-ui.ndjp.net"
const OFFICIAL = "https://www.cult-ui.com"

const docBySlug = new Map(componentDocs.map((doc) => [doc.slug, doc]))

/** 提取源码中形如 XxxProps / XxxOptions 的类型定义原文。 */
function extractTypeDefs(source) {
  if (!source) return []
  const defs = []
  const pattern =
    /(?:export\s+)?(?:interface|type)\s+([A-Za-z0-9_]*(?:Props|Options|Config)[A-Za-z0-9_]*)\s*(?:<[^>]*>)?\s*(?:=\s*)?\{/g
  let match
  while ((match = pattern.exec(source)) && defs.length < 2) {
    const name = match[1]
    const start = match.index
    let depth = 0
    let end = -1
    for (let i = source.indexOf("{", start); i < source.length; i++) {
      if (source[i] === "{") depth++
      else if (source[i] === "}") {
        depth--
        if (depth === 0) {
          end = i + 1
          break
        }
      }
    }
    if (end === -1) continue
    const block = source.slice(start, end).trim()
    const lines = block.split("\n")
    if (lines.length < 3) continue
    defs.push({
      name,
      code: lines.slice(0, 28).join("\n") + (lines.length > 28 ? "\n  // …" : ""),
    })
  }
  return defs
}

/** 无精修文档时,按导出部件生成最小可运行示例。 */
function buildUsage(entry, doc) {
  if (doc?.usage) return doc.usage
  const parts = entry.parts.length > 0 ? entry.parts : []
  if (parts.length === 0) {
    return `import { ${entry.name.replace(/\s+/g, "")} } from "@/components/ui/${entry.slug}"`
  }
  const named = parts.slice(0, 3).join(", ")
  const [primary, secondary] = parts
  const body = secondary
    ? `<${primary}>\n      <${secondary} />\n    </${primary}>`
    : `<${primary}>内容</${primary}>`
  return `import { ${named} } from "@/components/ui/${entry.slug}"

export function Example() {
  return (
    ${body}
  )
}`
}

const api = {}
for (const entry of componentCatalog) {
  const doc = docBySlug.get(entry.slug)
  const file = path.join(root, "src", "components", "ui", `${entry.slug}.tsx`)
  const source = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : ""
  api[entry.slug] = {
    usage: buildUsage(entry, doc),
    typeDefs: extractTypeDefs(source),
    parts: entry.parts,
  }
}

fs.mkdirSync(path.join(publicDir, "docs"), { recursive: true })
fs.writeFileSync(
  path.join(publicDir, "docs", "component-api.json"),
  JSON.stringify(api, null, 2)
)

fs.mkdirSync(docsOutDir, { recursive: true })

function buildMarkdown(entry) {
  const doc = docBySlug.get(entry.slug)
  const detail = api[entry.slug]
  const lines = [
    `# ${doc?.zhName ?? entry.zhName} (${entry.name})`,
    "",
    `> ${doc?.description ?? entry.description}`,
    "",
    `- 分类:${entry.category}`,
    `- 本站页面:${SITE}/docs/components/${entry.slug}`,
    `- 官方文档:${OFFICIAL}/docs/components/${entry.slug}`,
    `- 源码位置:\`src/components/ui/${entry.slug}.tsx\``,
    "",
    "## 安装",
    "",
    "~~~bash",
    entry.install,
    "~~~",
    "",
    "## 用法",
    "",
    "~~~tsx",
    detail.usage,
    "~~~",
    "",
    "## 导出部件",
    "",
    ...entry.parts.map((part) => `- \`${part}\``),
    "",
    "## 依赖",
    "",
    ...(entry.dependencies.length > 0
      ? entry.dependencies.map((dep) => `- \`${dep}\``)
      : ["- 无额外依赖"]),
  ]

  if (detail.typeDefs.length > 0) {
    lines.push("", "## 源码属性定义", "")
    for (const def of detail.typeDefs) {
      lines.push(`### ${def.name}`, "", "~~~ts", def.code, "~~~", "")
    }
  }

  if (doc?.notes) {
    lines.push("## 备注", "", doc.notes, "")
  }

  if (doc?.props?.length) {
    lines.push("## 属性(Props)", "")
    lines.push("| 属性 | 类型 | 默认值 | 说明 |")
    lines.push("| --- | --- | --- | --- |")
    for (const prop of doc.props) {
      lines.push(
        `| \`${prop.name}\` | \`${prop.type.replace(/\|/g, "\\|")}\` | ${
          prop.default ? `\`${prop.default.replace(/\|/g, "\\|")}\`` : "—"
        } | ${prop.desc} |`
      )
    }
    lines.push("")
  }

  lines.push("---", "", `由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。`)
  return lines.join("\n")
}

for (const entry of componentCatalog) {
  fs.writeFileSync(
    path.join(docsOutDir, `${entry.slug}.md`),
    buildMarkdown(entry)
  )
}

const byCategory = new Map()
for (const entry of componentCatalog) {
  if (!byCategory.has(entry.category)) byCategory.set(entry.category, [])
  byCategory.get(entry.category).push(entry)
}

const indexLines = [
  "# Cult UI 中文站",
  "",
  "> Cult UI 是 150+ 个免费开源的 shadcn/ui 动画组件。本站收录 137 个组件的源码、中文简介、在线演示与安装命令,并为其中 12 个组件提供逐项 Props 文档。",
  "",
  "每个组件都是 shadcn/ui registry 项,CLI 会把源码复制进你的项目。",
  "",
  "## 文档",
  "",
  `- [介绍](${SITE}/docs):组件库定位、安装方式与本站说明`,
  `- [安装(Vite + bun)](${SITE}/docs/installation):从零搭建 Vite + React + Tailwind CSS v4 项目`,
  `- [手动安装](${SITE}/docs/installation/manual):逐项配置 components.json 与工具函数`,
  `- [主题定制](${SITE}/docs/theming):shadcn 主题令牌与暗色模式`,
  `- [MCP 服务器](${SITE}/docs/mcp-server):让 Agent 通过 shadcn MCP 搜索并安装组件`,
  `- [LLMs 与 Agent](${SITE}/docs/llms):机器可读文档与 Agent 规则`,
  "",
  "## 机器可读资源",
  "",
  `- [llms.txt](${SITE}/llms.txt):本索引`,
  `- [llms-full.txt](${SITE}/llms-full.txt):全部文档合并版`,
  `- 任意组件页后加 \`.md\`:例如 ${SITE}/docs/components/globe.md`,
  `- [component-api.json](${SITE}/docs/component-api.json):用法与源码属性定义`,
  "",
  "## 组件",
  "",
]

for (const [category, entries] of byCategory) {
  indexLines.push(`### ${category}`, "")
  for (const entry of entries) {
    const doc = docBySlug.get(entry.slug)
    indexLines.push(
      `- [${doc?.zhName ?? entry.zhName}](${SITE}/docs/components/${entry.slug}.md):${
        doc?.description ?? entry.description
      } 安装:\`${entry.install}\``
    )
  }
  indexLines.push("")
}

indexLines.push(
  "## 使用约定",
  "",
  "- 组件是 shadcn/ui registry 项,用 `npx shadcn@latest add @cult-ui/<name>` 安装,不要手工重写。",
  "- 已安装的源码在 `components/ui/`,可以直接修改,它是你的代码而不是依赖。",
  "- 组件使用 Tailwind CSS v4 与 shadcn 主题令牌(`bg-background`、`text-foreground`、`ring-ring`),不要硬编码颜色。",
  "- 动画组件基于 `motion`,需尊重 `prefers-reduced-motion`。",
  ""
)

fs.writeFileSync(path.join(publicDir, "llms.txt"), indexLines.join("\n"))

const full = [
  "# Cult UI 中文站 · 完整文档",
  "",
  `> 共 ${componentCatalog.length} 个组件。由 scripts/generate-agent-docs.mjs 生成,请勿手工编辑。`,
  "",
  ...componentCatalog.map((entry) => buildMarkdown(entry)),
]
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), full.join("\n\n---\n\n"))

console.log(
  `generated: ${componentCatalog.length} markdown files, component-api.json, llms.txt, llms-full.txt`
)
