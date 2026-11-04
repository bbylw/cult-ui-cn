import { Link } from "react-router-dom"

const FOOTER_SECTIONS = [
  {
    title: "文档",
    links: [
      { label: "介绍", to: "/docs" },
      { label: "安装(Vite + bun)", to: "/docs/installation" },
      { label: "主题定制", to: "/docs/theming" },
    ],
  },
  {
    title: "热门组件",
    links: [
      { label: "3D 地球 Globe", to: "/docs/components/globe" },
      { label: "灵动岛 Dynamic Island", to: "/docs/components/dynamic-island" },
      { label: "看板 Kanban Board", to: "/docs/components/kanban-board" },
      { label: "分析图表 Analytics Chart", to: "/docs/components/analytics-chart" },
    ],
  },
  {
    title: "相关站点",
    links: [
      {
        label: "Cult UI 官网",
        href: "https://www.cult-ui.com",
      },
      {
        label: "GitHub 仓库",
        href: "https://github.com/nolly-studio/cult-ui",
      },
      {
        label: "AI SDK Agents",
        href: "https://aisdkagents.com",
      },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <img src="/favicon.svg" alt="" className="size-6 rounded-md" />
              <span className="tracking-tight">
                Cult UI <span className="text-muted-foreground font-normal">中文站</span>
              </span>
            </div>
            <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
              150+ 个免费开源的 shadcn/ui 动画组件。CLI 把源码复制进你的项目,代码完全归你所有。
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => {
                  if ("to" in link) {
                    return (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  }
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            中文站为非官方翻译演示,组件版权归 Nolly Studio 所有,遵循 MIT 许可证发布。
          </p>
          <p>
            Made by{" "}
            <a
              href="https://x.com/nolansym"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground underline underline-offset-2"
            >
              @nolansym
            </a>{" "}
            · Nolly Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
