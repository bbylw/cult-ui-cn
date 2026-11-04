# 3D 轮播 (Three D Carousel)

> 带透视效果的三维轮播,项目之间平滑切换。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/three-d-carousel
- 官方文档:https://www.cult-ui.com/docs/components/three-d-carousel
- 源码位置:`src/components/ui/three-d-carousel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/three-d-carousel
~~~

## 用法

~~~tsx
import { useIsomorphicLayoutEffect } from "@/components/ui/three-d-carousel"

export function Example() {
  return (
    <useIsomorphicLayoutEffect />
  )
}
~~~

## 导出部件

- `useIsomorphicLayoutEffect`
- `useMediaQuery`

## 依赖

- `motion`

## 源码属性定义

### UseMediaQueryOptions

~~~ts
type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。