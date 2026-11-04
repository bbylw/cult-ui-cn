import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Package } from "lucide-react"

import { CodeBlock } from "@/components/ui/code-block"

import { ComponentDemo } from "@/components/site/demos"
import { componentDocs, getComponentDoc } from "@/lib/docs-data"
import { NotFoundPage } from "@/pages/not-found"

export function ComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const doc = getComponentDoc(slug)

  if (!doc) return <NotFoundPage />

  const index = componentDocs.findIndex((d) => d.slug === doc.slug)
  const prev = index > 0 ? componentDocs[index - 1] : null
  const next = index < componentDocs.length - 1 ? componentDocs[index + 1] : null

  return (
    <article className="max-w-3xl">
      {/* 标题区 */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight">{doc.zhName}</h1>
        <span className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs">
          {doc.category}
        </span>
      </div>
      <p className="text-muted-foreground mt-1 font-mono text-sm">{doc.name}</p>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        {doc.description}
      </p>

      {/* 实时演示 */}
      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold tracking-tight">实时演示</h2>
        <ComponentDemo slug={doc.slug} />
      </section>

      {/* 安装 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight">安装</h2>
        <CodeBlock
          tabs={[
            {
              label: "npm",
              code: doc.install,
              language: "bash",
            },
            {
              label: "bun",
              code: doc.install.replace("npx shadcn", "bunx shadcn"),
              language: "bash",
            },
          ]}
        />
      </section>

      {/* 用法 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight">用法</h2>
        <CodeBlock code={doc.usage} language="tsx" />
      </section>

      {/* Props */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight">属性(Props)</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b text-left">
                <th className="px-4 py-3 font-medium">属性</th>
                <th className="px-4 py-3 font-medium">类型</th>
                <th className="px-4 py-3 font-medium">默认值</th>
                <th className="px-4 py-3 font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {doc.props.map((prop) => (
                <tr key={prop.name} className="border-b last:border-0">
                  <td className="px-4 py-3 font-mono text-xs font-medium">
                    {prop.name}
                  </td>
                  <td className="text-muted-foreground max-w-[220px] px-4 py-3 font-mono text-xs break-words">
                    {prop.type}
                  </td>
                  <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                    {prop.default ?? "—"}
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    {prop.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 依赖与备注 */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold tracking-tight">依赖</h2>
        <ul className="space-y-2">
          {doc.dependencies.map((dep) => (
            <li
              key={dep}
              className="flex items-start gap-2 text-sm leading-relaxed"
            >
              <Package className="text-muted-foreground mt-0.5 size-4 shrink-0" />
              <span className="text-muted-foreground">{dep}</span>
            </li>
          ))}
        </ul>
        {doc.notes && (
          <p className="bg-muted/40 border-border mt-4 rounded-lg border px-4 py-3 text-sm leading-relaxed">
            <strong className="text-foreground">备注:</strong>
            <span className="text-muted-foreground"> {doc.notes}</span>
          </p>
        )}
      </section>

      {/* 官方文档链接 */}
      <p className="text-muted-foreground mt-8 text-sm">
        完整英文文档与更多示例见{" "}
        <a
          href={`https://www.cult-ui.com/docs/components/${doc.slug}`}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          cult-ui.com/docs/components/{doc.slug}
        </a>
      </p>

      {/* 上一篇 / 下一篇 */}
      <nav className="mt-12 flex items-stretch justify-between gap-4 border-t pt-6">
        {prev ? (
          <Link
            to={`/docs/components/${prev.slug}`}
            className="group hover:bg-accent flex flex-1 flex-col rounded-lg border p-4 transition-colors"
          >
            <span className="text-muted-foreground flex items-center gap-1 text-xs">
              <ArrowLeft className="size-3" /> 上一篇
            </span>
            <span className="mt-1 text-sm font-semibold">{prev.zhName}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/docs/components/${next.slug}`}
            className="group hover:bg-accent flex flex-1 flex-col items-end rounded-lg border p-4 text-right transition-colors"
          >
            <span className="text-muted-foreground flex items-center gap-1 text-xs">
              下一篇 <ArrowRight className="size-3" />
            </span>
            <span className="mt-1 text-sm font-semibold">{next.zhName}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </nav>
    </article>
  )
}
