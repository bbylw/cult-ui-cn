import { Link } from "react-router-dom"

import { CodeBlock } from "@/components/ui/code-block"

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight">
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground mt-4 leading-relaxed">{children}</p>
  )
}

const RESOURCES: Array<[string, string, string]> = [
  ["llms.txt", "/llms.txt", "本站全部组件的索引,附带中文简介与安装命令"],
  ["llms-full.txt", "/llms-full.txt", "全部组件文档合并成单个文件,适合一次性喂给 Agent"],
  [
    "Markdown 页面",
    "/docs/components/<name>.md",
    "单个组件的文档、用法、导出部件与源码属性定义",
  ],
  [
    "Registry",
    "https://www.cult-ui.com/r/{name}.json",
    "官方 registry,用 shadcn CLI 安装组件",
  ],
]

export function LlmsPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">LLMs 与 Agent</h1>
      <P>
        Cult UI 的文档同时以 AI 编程 Agent 可直接读取的格式发布。把 Agent
        指向下面任一来源,它就会安装真实的组件,而不是猜测 API。
      </P>

      <H2>机器可读的文档</H2>
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b text-left">
              <th className="px-4 py-3 font-medium">资源</th>
              <th className="px-4 py-3 font-medium">地址</th>
              <th className="px-4 py-3 font-medium">用途</th>
            </tr>
          </thead>
          <tbody>
            {RESOURCES.map(([name, url, use]) => (
              <tr key={name} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{name}</td>
                <td className="text-muted-foreground px-4 py-3 font-mono text-xs break-words">
                  {url}
                </td>
                <td className="text-muted-foreground px-4 py-3">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        每个组件页都有一个「复制 Markdown」按钮,可一键复制该页的机器可读版本;
        文件由构建脚本生成,与页面内容保持同步。
      </P>

      <H2>让 Agent 安装组件</H2>
      <P>
        任何能执行终端命令的 Agent 都可以按名称安装组件。{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@cult-ui</code>{" "}
        命名空间已内置于 shadcn CLI,无需任何配置:
      </P>
      <CodeBlock
        code="npx shadcn@latest add @cult-ui/halo-button"
        language="bash"
        className="mt-4"
      />
      <P>
        想让 Agent 用自然语言浏览和搜索 registry,请配置{" "}
        <Link to="/docs/mcp-server" className="underline underline-offset-4">
          MCP 服务器
        </Link>
        。
      </P>

      <H2>Agent 规则</H2>
      <P>
        把下面这段贴进{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">AGENTS.md</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">CLAUDE.md</code>{" "}
        或{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          .cursor/rules
        </code>{" "}
        文件,Agent 就知道该如何使用 Cult UI:
      </P>
      <CodeBlock
        code={`## Cult UI
- Cult UI components are shadcn/ui registry items. Install them with
  \`npx shadcn@latest add @cult-ui/<name>\`; never recreate them by hand.
- Find component names and docs in https://www.cult-ui.com/llms.txt. Read a
  component's docs at https://www.cult-ui.com/docs/components/<name>.md before using it.
- Installed source lives in \`components/ui/\`. Edit it there; it is owned code,
  not a dependency.
- Components use Tailwind CSS v4 and shadcn theme tokens (\`bg-background\`,
  \`text-foreground\`, \`ring-ring\`). Style with tokens, not hardcoded colors.
- Animated components use \`motion\`. Respect \`prefers-reduced-motion\`.`}
        language="md"
        className="mt-4"
      />

      <p className="text-muted-foreground mt-8 text-sm">
        完整英文文档见{" "}
        <a
          href="https://www.cult-ui.com/docs/llms"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          cult-ui.com/docs/llms
        </a>
        。
      </p>
    </article>
  )
}
