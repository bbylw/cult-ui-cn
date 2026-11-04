import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { componentCatalog } from "@/lib/component-catalog"
import { useTheme } from "@/lib/theme"
import { Menu, Moon, Sun, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type NavItem =
  | { kind: "link"; to: string; label: string; end?: boolean }
  | { kind: "external"; href: string; label: string }

const NAV_ITEMS: NavItem[] = [
  { kind: "link", to: "/", label: "首页", end: true },
  { kind: "link", to: "/docs", label: "文档", end: true },
  { kind: "link", to: "/docs/components", label: "组件" },
  {
    kind: "external",
    href: "https://www.cult-ui.com/docs/changelog",
    label: "更新日志",
  },
]

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const dark = (resolvedTheme ?? "dark") === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={dark ? "切换到浅色模式" : "切换到深色模式"}
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-background/70 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src="/favicon.svg" alt="" className="size-6 rounded-md" />
          <span className="tracking-tight">Cult UI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            item.kind === "external" ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-sm transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end ?? false}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/nolly-studio/cult-ui"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub 仓库"
            >
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <Button asChild className="ml-1 hidden sm:inline-flex">
            <Link to="/docs/installation">开始使用</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-background absolute inset-x-0 top-full border-b shadow-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) =>
              item.kind === "external" ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground rounded-md px-2 py-2 text-sm transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end ?? false}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/docs/installation"
              onClick={() => setMenuOpen(false)}
              className="bg-primary text-primary-foreground mt-2 rounded-md px-3 py-2 text-center text-sm font-medium"
            >
              开始使用
            </Link>
            <div className="mt-5">
              <p className="text-muted-foreground px-2 text-xs font-medium">
                热门组件
              </p>
              <div className="mt-1.5 grid grid-cols-2 gap-1">
                {[
                  ["3D 地球", "/docs/components/globe"],
                  ["灵动岛", "/docs/components/dynamic-island"],
                  ["看板", "/docs/components/kanban-board"],
                  ["竖纹玻璃", "/docs/components/fluted-glass"],
                ].map(([label, to]) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-2 py-2 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-muted-foreground mt-6 border-t px-2 pt-4 pb-2 text-xs leading-relaxed">
              <p>Cult UI 中文站 · 收录 {componentCatalog.length} 个动画组件</p>
              <a
                href="https://github.com/nolly-studio/cult-ui"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-foreground mt-1 inline-block underline underline-offset-4"
              >
                GitHub 仓库
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
