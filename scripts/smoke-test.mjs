/**
 * 构建产物的冒烟测试:起一个静态预览服务,检查关键页面、主题、Agent 资源与
 * SEO 文件。用系统 Chrome(channel: "chrome"),CI 无需额外下载浏览器。
 *
 * 运行:bun run test:smoke(需要先 bun run build)
 */
import fs from "fs"
import path from "path"
import { spawn } from "child_process"
import { fileURLToPath } from "url"
import { chromium } from "playwright"
import { componentCatalog } from "../src/lib/component-catalog.ts"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const PORT = 4175
const BASE = `http://localhost:${PORT}`

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html 不存在,请先运行 bun run build")
  process.exit(1)
}

const server = spawn(
  process.platform === "win32" ? "bun.exe" : "bun",
  ["run", "preview", "--", "--port", String(PORT), "--strictPort"],
  { cwd: root, stdio: "ignore" }
)

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(BASE + "/")
      if (res.ok) return
    } catch {
      // 服务还没起来
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error("预览服务启动超时")
}

const failures = []
function check(name, condition, detail = "") {
  if (condition) {
    console.log(`ok   ${name}`)
  } else {
    failures.push(name + (detail ? `: ${detail}` : ""))
    console.log(`FAIL ${name}${detail ? `: ${detail}` : ""}`)
  }
}

let browser
try {
  await waitForServer()
  browser = await chromium.launch({ channel: "chrome", headless: true })

  const page = await browser.newPage()
  const pageErrors = []
  page.on("pageerror", (error) => pageErrors.push(error.message))

  await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 30000 })
  await page.waitForTimeout(1500)
  check("首页标题非空", (await page.locator("h1").count()) > 0)
  check("首页 title", (await page.title()).includes("Cult UI"))
  check("首页无未捕获异常", pageErrors.length === 0, pageErrors[0])

  await page.goto(BASE + "/docs/components/globe/", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  })
  await page.waitForTimeout(1500)
  check("组件页 h1", (await page.locator("h1").first().textContent())?.includes("3D 地球"))
  check("组件页 title", (await page.title()).includes("3D 地球"))

  await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 30000 })
  await page.waitForTimeout(1000)
  await page.getByRole("button", { name: /切换到浅色模式/ }).click()
  await page.waitForTimeout(300)
  const lightAfterClick = await page.evaluate(
    () => !document.documentElement.classList.contains("dark")
  )
  await page.reload({ waitUntil: "domcontentloaded" })
  await page.waitForTimeout(800)
  const lightAfterReload = await page.evaluate(
    () => !document.documentElement.classList.contains("dark")
  )
  check("主题切换生效", lightAfterClick)
  check("主题刷新保持", lightAfterReload)

  const llms = await fetch(BASE + "/llms.txt")
  const llmsText = await llms.text()
  check("llms.txt 200", llms.status === 200)
  check("llms.txt 内容", llmsText.includes("# Cult UI 中文站"))

  const md = await fetch(BASE + "/docs/components/globe.md")
  check("组件 md 200", md.status === 200)
  check("组件 md 内容", (await md.text()).includes("# 3D 地球"))

  const sitemap = await fetch(BASE + "/sitemap.xml")
  check("sitemap 200", sitemap.status === 200)
  check("sitemap 内容", (await sitemap.text()).includes("<urlset"))

  const robots = await fetch(BASE + "/robots.txt")
  check("robots 200", robots.status === 200)
  check("robots 内容", (await robots.text()).includes("Sitemap:"))

  const notFound = fs.readFileSync(path.join(dist, "404.html"), "utf8")
  check("404.html 标题", notFound.includes("页面不存在"))

  const api = await fetch(BASE + "/docs/component-api.json")
  check("component-api 200", api.status === 200)

  // 构建产物回归:dither 插件、双主题 color-scheme、无 JS 兜底与规范化 URL
  const globeHtml = fs.readFileSync(
    path.join(dist, "docs/components/globe/index.html"),
    "utf8"
  )
  const css = fs
    .readdirSync(path.join(dist, "assets"))
    .filter((name) => name.endsWith(".css"))
    .map((name) => fs.readFileSync(path.join(dist, "assets", name), "utf8"))
    .join("\n")
  check("dither 工具类已生成", css.includes(".dither-xs"))
  check(
    "双主题 color-scheme 已声明",
    /color-scheme:\s*light/.test(css) && /color-scheme:\s*dark/.test(css)
  )
  check(
    "无 JS 兜底正文写入 noscript",
    /<noscript><main><h1>/.test(globeHtml)
  )
  check(
    "canonical 使用带尾斜杠的最终地址",
    globeHtml.includes('href="https://cult-ui.ndjp.net/docs/components/globe/"')
  )
  const homeHtml = fs.readFileSync(path.join(dist, "index.html"), "utf8")
  check(
    "首页 meta 数量由数据派生",
    homeHtml.includes(`:${componentCatalog.length} 个免费开源`)
  )
  const fallbackRendered = await page.evaluate(() => {
    const el = document.querySelector("noscript")
    return (
      (el?.getClientRects().length ?? 0) > 0 ||
      document.body.innerText.includes("启用 JavaScript 可查看实时演示")
    )
  })
  check("启用 JS 时首屏不显示无 JS 兜底文字", !fallbackRendered)

  // 全量巡检:每个组件页的静态 head、演示 chunk 与运行时异常
  await page.evaluate(() => localStorage.setItem("cult-ui-cn-theme", "dark"))
  const pageFailures = []
  for (const entry of componentCatalog) {
    const before = pageErrors.length
    await page.goto(`${BASE}/docs/components/${entry.slug}/`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    })
    await page.waitForTimeout(120)
    const heading =
      (await page.locator("h1").first().textContent())?.trim() ?? ""
    if (!heading) pageFailures.push(`${entry.slug}: 缺少 h1`)
    if (await page.getByText("演示加载失败").count()) {
      pageFailures.push(`${entry.slug}: 演示加载失败`)
    }
    if (pageErrors.length > before) {
      pageFailures.push(`${entry.slug}: ${pageErrors[before]}`)
    }
  }
  check(
    `全部 ${componentCatalog.length} 个组件页可渲染`,
    pageFailures.length === 0,
    pageFailures.slice(0, 3).join(" | ")
  )
} finally {
  if (browser) await browser.close()
  server.kill()
}

if (failures.length > 0) {
  console.error(`\n${failures.length} 项失败`)
  process.exit(1)
}
console.log("\nall smoke checks passed")
