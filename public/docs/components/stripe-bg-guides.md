# 参考线背景 (Stripe BG Guides)

> Stripe 风格的背景参考线与动画图案。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/stripe-bg-guides
- 官方文档:https://www.cult-ui.com/docs/components/stripe-bg-guides
- 源码位置:`src/components/ui/stripe-bg-guides.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/stripe-bg-guides
~~~

## 用法

~~~tsx
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides"

export function Example() {
  return (
    <StripeBgGuides>内容</StripeBgGuides>
  )
}
~~~

## 导出部件

- `StripeBgGuides`

## 依赖

- `motion`

## 源码属性定义

### AnimatedBackgroundGuidesProps

~~~ts
interface AnimatedBackgroundGuidesProps {
  columnCount?: number
  className?: string
  solidLines?: number[]
  animated?: boolean
  animationDuration?: number
  animationDelay?: number
  glowColor?: string
  glowSize?: string
  glowOpacity?: number
  randomize?: boolean
  randomInterval?: number
  direction?: AnimationDirection
  easing?: AnimationEasing
  responsive?: boolean
  minColumnWidth?: string
  maxActiveColumns?: number
  darkMode?: boolean
  contained?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。