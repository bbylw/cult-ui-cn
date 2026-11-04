import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

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
        本站为中文翻译与演示,精选 12 个代表性组件提供实时渲染与中文文档。完整组件列表请见{" "}
        <a
          href="https://www.cult-ui.com/docs/components/dynamic-island"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          官网组件目录
        </a>
        。
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">精选组件</h2>
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
              查看文档 <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </article>
  )
}
