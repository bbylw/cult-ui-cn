# 切角图片卡 (Cutout Card)

> 带切角装饰、内嵌标签、图钉与悬停操作按钮的图片卡片。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/cutout-card
- 官方文档:https://www.cult-ui.com/docs/components/cutout-card
- 源码位置:`src/components/ui/cutout-card.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/cutout-card
~~~

## 用法

~~~tsx
import { CutoutCard, CutoutCardAction, CutoutCardContent } from "@/components/ui/cutout-card"

export function Example() {
  return (
    <CutoutCard>
      <CutoutCardAction />
    </CutoutCard>
  )
}
~~~

## 导出部件

- `CutoutCard`
- `CutoutCardAction`
- `CutoutCardContent`
- `CutoutCardFooter`
- `CutoutCardImage`
- `CutoutCardInsetLabel`
- `CutoutCardMedia`
- `CutoutCardOverlay`
- `CutoutCardPin`
- `CutoutCorner`
- `cutoutCardSurfaceClassName`
- `cutoutCardSurfaceShadowClassName`

## 依赖

- `motion`
- `@radix-ui/react-use-controllable-state`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。