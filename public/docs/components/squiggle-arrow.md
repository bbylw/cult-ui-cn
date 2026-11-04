# 波浪箭头 (Squiggle Arrow)

> 手绘风格波浪箭头,可设方向、尺寸与变体。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/squiggle-arrow
- 官方文档:https://www.cult-ui.com/docs/components/squiggle-arrow
- 源码位置:`src/components/ui/squiggle-arrow.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/squiggle-arrow
~~~

## 用法

~~~tsx
import { SquiggleArrow } from "@/components/ui/squiggle-arrow"
~~~

## 导出部件


## 依赖

- 无额外依赖

## 源码属性定义

### SquigglyArrowProps

~~~ts
interface SquigglyArrowProps {
  width?: number
  height?: number
  strokeWidth?: number
  className?: string
  direction?: "right" | "left" | "up" | "down"
  variant?: "wavy" | "bouncy" | "smooth"
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。