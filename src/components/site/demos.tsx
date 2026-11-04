import {
  Component,
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react"

import { demoLoaders } from "@/components/demos/registry"

/* 全部演示按需加载,单个演示出错不影响文档其余部分 */
const lazyDemoMap = Object.fromEntries(
  Object.entries(demoLoaders).map(([slug, load]) => [slug, lazy(load)])
) as Record<string, LazyExoticComponent<ComponentType>>

class DemoBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <p className="text-muted-foreground text-sm">
          演示加载失败:{this.state.error.message}
        </p>
      )
    }
    return this.props.children
  }
}

export function ComponentDemo({ slug }: { slug: string }) {
  const LazyDemo = lazyDemoMap[slug]
  if (!LazyDemo) {
    return (
      <p className="text-muted-foreground text-sm">该组件暂无在线演示。</p>
    )
  }

  return (
    <DemoBoundary>
      <Suspense
        fallback={
          <div
            aria-busy="true"
            className="bg-dots text-muted-foreground flex h-full min-h-[280px] items-center justify-center rounded-xl border text-sm"
          >
            正在加载演示…
          </div>
        }
      >
        <LazyDemo />
      </Suspense>
    </DemoBoundary>
  )
}
