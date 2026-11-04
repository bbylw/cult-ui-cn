# 有机小卡片 (Organic Card Small)

> 带 SVG 轮廓的小卡片,展示分类与日期,悬停时有形变动画。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/organic-card-small
- 官方文档:https://www.cult-ui.com/docs/components/organic-card-small
- 源码位置:`src/components/ui/organic-card-small.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/organic-card-small
~~~

## 用法

~~~tsx
import { OrganicCardSmall } from "@/components/ui/organic-card-small"

export function Example() {
  return (
    <OrganicCardSmall />
  )
}
~~~

## 导出部件

- `OrganicCardSmall`

## 依赖

- `lucide-react`
- `motion`

## 源码属性定义

### OrganicCardSmallProps

~~~ts
interface OrganicCardSmallProps {
  image: string
  imageAlt?: string
  category: string
  date: string
  title: string
  href?: string
  className?: string
  /** Card body + band fill (defaults to stone) */
  surfaceColor?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。