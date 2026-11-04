# Halo 进度条 (Halo Progress)

> 弹簧驱动的确定型进度条,以及滑动的非确定型光带。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-progress
- 官方文档:https://www.cult-ui.com/docs/components/halo-progress
- 源码位置:`src/components/ui/halo-progress.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-progress
~~~

## 用法

~~~tsx
import { HaloProgress } from "@/components/ui/halo-progress"

export function Example() {
  return (
    <HaloProgress />
  )
}
~~~

## 导出部件

- `HaloProgress`

## 依赖

- `@base-ui/react`
- `motion`

## 源码属性定义

### HaloProgress

~~~ts
export function HaloProgress({
className,
  label,
  showValue,
  translucent = true,
  trackClassName,
  indicatorClassName,
  value,
  min = 0,
  max = 100,
  ...rootProps
}: HaloProgressProps)
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。