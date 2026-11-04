import { Link } from "react-router-dom"

import { componentCatalog } from "@/lib/component-catalog"
import { componentDocs } from "@/lib/docs-data"

export function DocsOverviewPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">介绍</h1>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        <strong className="text-foreground">Cult UI</strong> 是一套 150+
        个免费开源的 shadcn/ui 动画组件。每个组件都是一个 shadcn/ui registry
        项:CLI 会把源码复制到你的项目中,代码完全归你所有。组件使用 Tailwind CSS
        v4 与 shadcn 主题令牌,大多数组件借助{" "}
        <a
          href="https://motion.dev"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          Motion
        </a>{" "}
        实现动画。
      </p>
      <p className="text-muted-foreground mt-3 leading-relaxed">
        本站收录了官方全部 {componentCatalog.length} 个组件的源码与在线演示,
        并附中文简介与安装命令;其中 {componentDocs.length} 个另有逐项 Props 文档。
        浏览全部组件请见{" "}
        <Link to="/docs/components" className="underline underline-offset-4">
          组件总览
        </Link>
        。
      </p>

      <div className="mt-12 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight">带演示的组件</h2>
        <Link
          to="/docs/components"
          className="text-muted-foreground hover:text-foreground text-sm"
        >
          查看全部 {componentCatalog.length} 个组件
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {componentDocs.map((doc) => (
          <Link
            key={doc.slug}
            to={`/docs/components/${doc.slug}`}
            className="bg-card hover:shadow-md group rounded-xl border p-5 transition-all"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold">{doc.zhName}</h3>
              <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px]">
                {doc.category}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 font-mono text-xs">
              {doc.name}
            </p>
            <p className="text-muted-foreground mt-3 line-clamp-2 text-sm leading-relaxed">
              {doc.description}
            </p>
            <span className="text-foreground mt-3 inline-flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
              查看文档
            </span>
          </Link>
        ))}
      </div>
    </article>
  )
}
