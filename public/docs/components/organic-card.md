# 有机卡片 (Organic Card)

> 营销用组合卡片:图片插槽、眉标、标题、正文、强调色带与底部 CTA。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/organic-card
- 官方文档:https://www.cult-ui.com/docs/components/organic-card
- 源码位置:`src/components/ui/organic-card.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/organic-card
~~~

## 用法

~~~tsx
import { OrganicCard } from "@/components/ui/organic-card"

export function Example() {
  return (
    <OrganicCard />
  )
}
~~~

## 导出部件

- `OrganicCard`
- `OrganicCardBand`
- `OrganicCardBody`
- `OrganicCardDescription`
- `OrganicCardEyebrow`
- `OrganicCardFooter`
- `OrganicCardFooterIcon`
- `OrganicCardFooterLabel`
- `OrganicCardImage`
- `OrganicCardTitle`

## 依赖

- `lucide-react`

## 源码属性定义

### OrganicCardSharedProps

~~~ts
interface OrganicCardSharedProps {
  children: ReactNode
  backgroundColor?: string
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。