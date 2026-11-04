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
} finally {
  if (browser) await browser.close()
  server.kill()
}

if (failures.length > 0) {
  console.error(`\n${failures.length} 项失败`)
  process.exit(1)
}
console.log("\nall smoke checks passed")
