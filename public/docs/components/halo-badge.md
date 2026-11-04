# Halo 徽章 (Halo Badge)

> 带渐变边框、闪烁状态点与等宽数字的徽章,数字变化不抖动。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-badge
- 官方文档:https://www.cult-ui.com/docs/components/halo-badge
- 源码位置:`src/components/ui/halo-badge.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-badge
~~~

## 用法

~~~tsx
import { HaloBadge } from "@/components/ui/halo-badge"

export function Example() {
  return (
    <HaloBadge />
  )
}
~~~

## 导出部件

- `HaloBadge`

## 依赖

- `class-variance-authority`
- `motion`

## 源码属性定义

### HaloBadge

~~~ts
export function HaloBadge({
variant = "default",
  className,
  children,
  live = false,
  layout = true,
  tabularNums = false,
  translucent = true,
  interactive = true,
  pressScale = true,
  onMouseEnter,
}: HaloBadgeProps)
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。