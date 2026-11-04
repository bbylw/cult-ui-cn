# 插画卡片网格 (Illustration Card Grid)

> 带内置 AI 网关插画的功能卡片网格。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/illustration-card-grid
- 官方文档:https://www.cult-ui.com/docs/components/illustration-card-grid
- 源码位置:`src/components/ui/illustration-card-grid.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/illustration-card-grid
~~~

## 用法

~~~tsx
import { DEFAULT_ILLUSTRATION_CARD_GRID_ITEMS, IllustrationCardGrid, IllustrationCardGridItem } from "@/components/ui/illustration-card-grid"

export function Example() {
  return (
    <DEFAULT_ILLUSTRATION_CARD_GRID_ITEMS>
      <IllustrationCardGrid />
    </DEFAULT_ILLUSTRATION_CARD_GRID_ITEMS>
  )
}
~~~

## 导出部件

- `DEFAULT_ILLUSTRATION_CARD_GRID_ITEMS`
- `IllustrationCardGrid`
- `IllustrationCardGridItem`

## 依赖

- 无额外依赖
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。