# 融合气泡插画 (Merging Bubbles)

> 多个气泡相互融合的可视化插画。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/merging-bubbles
- 官方文档:https://www.cult-ui.com/docs/components/merging-bubbles
- 源码位置:`src/components/ui/merging-bubbles.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/merging-bubbles
~~~

## 用法

~~~tsx
import { MergingBubbles, NextLogo, VercelLogo } from "@/components/ui/merging-bubbles"

export function Example() {
  return (
    <MergingBubbles>
      <NextLogo />
    </MergingBubbles>
  )
}
~~~

## 导出部件

- `MergingBubbles`
- `NextLogo`
- `VercelLogo`

## 依赖

- 无额外依赖

## 源码属性定义

### MergingBubblesProps

~~~ts
interface MergingBubblesProps {
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  showPlus?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。