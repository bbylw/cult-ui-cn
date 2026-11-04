import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"

import {
  catalogByCategory,
  catalogCategories,
  componentCatalog,
} from "@/lib/component-catalog"

export function ComponentsPage() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState<string | null>(null)

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    return catalogByCategory()
      .filter((group) => !active || group.category === active)
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (entry) =>
            !q ||
            entry.zhName.toLowerCase().includes(q) ||
            entry.name.toLowerCase().includes(q) ||
            entry.slug.includes(q) ||
            entry.description.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [query, active])

  const matchCount = groups.reduce((sum, group) => sum + group.items.length, 0)
  const portedCount = componentCatalog.filter((entry) => entry.ported).length

  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight">组件</h1>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        官方 registry 共 {" "}
        <strong className="text-foreground">{componentCatalog.length}</strong> 个组件,
        源码已全部移植到本站的{" "}
        <code className="text-foreground font-mono text-sm">src/components/ui</code>,
        每个组件都配有在线演示、中文名称、简介与安装命令;其中{" "}
        <strong className="text-foreground">{portedCount}</strong>{" "}
        个另附逐项 Props 文档。
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <div className="relative">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <input
            aria-label="搜索组件"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索组件名称、slug 或简介…"
            className="border-input bg-background focus-visible:ring-ring w-full rounded-lg border py-2 pr-3 pl-9 text-sm outline-none focus-visible:ring-2"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              active === null
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            全部
          </button>
          {catalogCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(active === category ? null : category)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                active === category
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-muted-foreground text-xs">
          {matchCount} 个组件
          {active ? ` · ${active}` : ""}
          {query.trim() ? ` · 匹配「${query.trim()}」` : ""}
        </p>
      </div>

      {groups.length === 0 ? (
        <p className="text-muted-foreground mt-10 text-sm">
          没有找到匹配的组件,换个关键词试试。
        </p>
      ) : (
        groups.map((group) => (
          <section key={group.category} className="mt-10">
            <h2 className="flex items-baseline justify-between gap-3 text-xl font-bold tracking-tight">
              {group.category}
              <span className="text-muted-foreground font-mono text-xs font-normal">
                {group.items.length}
              </span>
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {group.items.map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/docs/components/${entry.slug}`}
                  className="bg-card hover:shadow-md group flex flex-col rounded-xl border p-4 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold">{entry.zhName}</h3>
                      <p className="text-muted-foreground truncate font-mono text-xs">
                        {entry.name}
                      </p>
                    </div>
                    {entry.ported && (
                      <span className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-500">
                        含 Props 文档
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-3 line-clamp-2 text-sm leading-relaxed">
                    {entry.description}
                  </p>
                  <code className="text-muted-foreground mt-3 truncate font-mono text-[11px]">
                    {entry.install}
                  </code>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </article>
  )
}
