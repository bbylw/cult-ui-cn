import { Suspense } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import { componentCatalog } from "@/lib/component-catalog"
import { componentDocs } from "@/lib/docs-data"

const QUICK_LINKS = [
  { to: "/docs", label: "介绍", end: true },
  { to: "/docs/installation", label: "安装(Vite + bun)" },
  { to: "/docs/installation/manual", label: "手动安装" },
  { to: "/docs/theming", label: "主题定制" },
  { to: "/docs/mcp-server", label: "MCP 服务器" },
  { to: "/docs/llms", label: "LLMs 与 Agent" },
] as const

export function DocsLayout() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-6xl gap-10 px-4 py-8 sm:px-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)]">
      {/* 侧边栏 */}
      <aside className="hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] space-y-6 overflow-y-auto pb-8">
          <div>
            <h3 className="mb-2 px-2 text-sm font-semibold">快速开始</h3>
            <ul className="space-y-0.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={"end" in link ? link.end : false}
                    className={({ isActive }) =>
                      `block rounded-md px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-sm font-semibold">组件</h3>
            <ul className="space-y-0.5">
              <li>
                <NavLink
                  to="/docs/components"
                  end
                  className={({ isActive }) =>
                    `flex items-baseline justify-between gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <span>全部组件</span>
                  <span className="font-mono text-[10px] opacity-60">
                    {componentCatalog.length}
                  </span>
                </NavLink>
              </li>
              {componentDocs.map((doc) => (
                <li key={doc.slug}>
                  <NavLink
                    to={`/docs/components/${doc.slug}`}
                    className={({ isActive }) =>
                      `flex items-baseline justify-between gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    <span>{doc.zhName}</span>
                    <span className="font-mono text-[10px] opacity-60">
                      {doc.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-sm font-semibold">更多资源</h3>
            <ul className="space-y-0.5">
              {[
                { href: "https://www.cult-ui.com/docs", label: "官方文档(英文)" },
                { href: "https://www.cult-ui.com/llms.txt", label: "llms.txt" },
                {
                  href: "https://github.com/nolly-studio/cult-ui",
                  label: "GitHub 仓库",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground block rounded-md px-2 py-1.5 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* 移动端下拉导航 */}
      <div className="mb-6 lg:hidden">
        <select
          aria-label="跳转到文档页面"
          className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) navigate(e.target.value)
          }}
        >
          <option value="" disabled>
            跳转到文档页面…
          </option>
          <optgroup label="快速开始">
            <option value="/docs">介绍</option>
            <option value="/docs/installation">安装(Vite + bun)</option>
            <option value="/docs/installation/manual">手动安装</option>
            <option value="/docs/theming">主题定制</option>
            <option value="/docs/mcp-server">MCP 服务器</option>
            <option value="/docs/llms">LLMs 与 Agent</option>
          </optgroup>
          <optgroup label="组件">
            <option value="/docs/components">全部组件</option>
            {componentDocs.map((doc) => (
              <option key={doc.slug} value={`/docs/components/${doc.slug}`}>
                {doc.zhName} {doc.name}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* 文档内容 */}
      <main className="min-w-0 pb-16">
        <Suspense
          fallback={<p className="text-muted-foreground py-16 text-sm">正在加载…</p>}
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
