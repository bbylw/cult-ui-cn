/**
 * 全文预渲染:用无头 Chrome 打开每个路由,把渲染后的 DOM 写回对应的
 * dist/<route>/index.html,让不执行 JS 的爬虫也能读到正文。
 *
 * 失败时降级:保留 prerender-meta.mjs 生成的 head-only 版本,不阻塞构建。
 * 运行:bun scripts/prerender-content.mjs(由 build 脚本在 prerender-meta 之后调用)
 */
import fs from "fs"
import path from "path"
import { spawn } from "child_process"
import { fileURLToPath } from "url"
import { chromium } from "playwright"
import { componentCatalog } from "../src/lib/component-catalog.ts"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const PORT = 4176
const BASE = `http://localhost:${PORT}`
const CONCURRENCY = 3

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html 不存在,请先运行 vite build")
  process.exit(1)
}

const routes = [
  "/",
  "/docs",
  "/docs/installation",
  "/docs/installation/manual",
  "/docs/theming",
  "/docs/mcp-server",
  "/docs/llms",
  "/docs/components",
  ...componentCatalog.map((entry) => `/docs/components/${entry.slug}`),
]

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

let browser
const failures = []
const queue = [...routes]
let done = 0

try {
  await waitForServer()
  browser = await chromium.launch({ channel: "chrome", headless: true })

  const worker = async () => {
    while (queue.length > 0) {
      const route = queue.shift()
      const page = await browser.newPage()
      try {
        await page.goto(BASE + route, {
          waitUntil: "domcontentloaded",
          timeout: 25000,
        })
        await page.waitForSelector("h1", { timeout: 6000 }).catch(() => {})
        await page.waitForTimeout(500)
        const html = await page.evaluate(
          () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML
        )
        const outFile =
          route === "/"
            ? path.join(dist, "index.html")
            : path.join(dist, route.slice(1), "index.html")
        fs.mkdirSync(path.dirname(outFile), { recursive: true })
        fs.writeFileSync(outFile, html)
      } catch (error) {
        failures.push(`${route}: ${error.message}`)
      } finally {
        await page.close()
        done++
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
} catch (error) {
  failures.push("fatal: " + error.message)
} finally {
  if (browser) await browser.close()
  server.kill()
}

console.log(
  `prerendered content for ${routes.length - failures.length}/${routes.length} routes`
)
if (failures.length > 0) {
  console.warn("fallback to head-only for:\n" + failures.slice(0, 8).join("\n"))
}
