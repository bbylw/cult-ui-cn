/**
 * 构建后为每个路由生成静态 HTML,把 title / description / OG / canonical 写进
 * 真正的 HTML head,解决 SPA 所有路由共用一份 head 的问题。
 *
 * 正文仍由客户端渲染;这里只做经济可靠的静态 head 预渲染。
 * 运行:bun scripts/prerender-meta.mjs(由 build 脚本在 vite build 之后调用)
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { componentCatalog } from "../src/lib/component-catalog.ts"
import { resolveMeta, SITE_URL } from "../src/lib/site-meta.ts"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const templatePath = path.join(dist, "index.html")

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html 不存在,请先运行 vite build")
  process.exit(1)
}

const template = fs.readFileSync(templatePath, "utf8")

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function replaceMetaContent(html, attr, key, value) {
  const pattern = new RegExp(
    `(<meta\\s+${attr}="${key}"[\\s\\S]*?content=")[^"]*(")`
  )
  return html.replace(pattern, `$1${escapeHtml(value)}$2`)
}

function renderFor(route) {
  const meta = resolveMeta(route)
  const url = `${SITE_URL}${route}`
  let html = template

  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`
  )
  html = replaceMetaContent(html, "name", "description", meta.description)
  html = replaceMetaContent(html, "property", "og:title", meta.title)
  html = replaceMetaContent(html, "property", "og:description", meta.description)
  html = replaceMetaContent(html, "property", "og:url", url)
  html = replaceMetaContent(html, "name", "twitter:title", meta.title)
  html = replaceMetaContent(html, "name", "twitter:description", meta.description)
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${url}$2`
  )

  return html
}

const routes = [
  "/docs",
  "/docs/installation",
  "/docs/installation/manual",
  "/docs/theming",
  "/docs/mcp-server",
  "/docs/llms",
  "/docs/components",
  ...componentCatalog.map((entry) => `/docs/components/${entry.slug}`),
]

for (const route of routes) {
  const outFile = path.join(dist, route.slice(1), "index.html")
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, renderFor(route))
}

// 独立 404 页:保留静态 head 与客户端入口,GitHub Pages 会以 404 状态返回。
const notFoundHtml = renderFor("/404").replace(
  /<link rel="canonical"[^>]*>\s*/,
  ""
)
fs.writeFileSync(path.join(dist, "404.html"), notFoundHtml)

// robots.txt 与 sitemap.xml
const sitemapUrls = ["/", ...routes]
const priorityFor = (route) =>
  route === "/" ? "1.0" : route.startsWith("/docs/components/") ? "0.6" : "0.8"
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls.map(
    (route) =>
      `  <url><loc>${SITE_URL}${route}</loc><priority>${priorityFor(route)}</priority></url>`
  ),
  "</urlset>",
  "",
].join("\n")
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap)

fs.writeFileSync(
  path.join(dist, "robots.txt"),
  ["User-agent: *", "Allow: /", `Sitemap: ${SITE_URL}/sitemap.xml`, ""].join("\n")
)

console.log(
  `prerendered meta for ${routes.length} routes, plus 404.html, sitemap.xml, robots.txt`
)
