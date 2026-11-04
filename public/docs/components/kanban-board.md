# 看板 (Kanban Board)

> 拖拽看板组件,卡片可在列之间拖动,支持标签、负责人头像与 Motion 布局动画,使用原生 HTML 拖放 API。

- 分类:交互
- 本站页面:https://cult-ui.ndjp.net/docs/components/kanban-board
- 官方文档:https://www.cult-ui.com/docs/components/kanban-board
- 源码位置:`src/components/ui/kanban-board.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/kanban-board
~~~

## 用法

~~~tsx
import { Column, gentleSpring } from "@/components/ui/kanban-board"
import { MotionConfig } from "motion/react"

<MotionConfig transition={gentleSpring}>
  {columns.map((col) => (
    <Column
      key={col.id}
      column={col}
      dragState={dragState}
      setDragState={setDragState}
      onDrop={(cardId, from, to) => moveCard(cardId, from, to)}
    />
  ))}
</MotionConfig>
~~~

## 导出部件

- `Assignee`
- `CardData`
- `CardTag`
- `Column`
- `ColumnData`
- `ColumnStatus`
- `DragState`
- `TagVariant`
- `gentleSpring`

## 依赖

- `motion`

## 源码属性定义

### TagProps

~~~ts
type TagProps = {
  label: string
  variant: TagVariant
}
~~~

### AvatarProps

~~~ts
type AvatarProps = {
  src?: string
  name?: string
}
~~~

## 备注

CardData 支持 { id, title, tags?, assignee?, date? };标签变体有 feature / bug / design / improvement / docs / done 六种配色。原组件的 next/image 头像已适配为标准 <img>。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `column` | `ColumnData` | — | 列数据 {id, title, status, cards}。 |
| `onDrop` | `(cardId, fromColumnId, toColumnId) => void` | — | 卡片落下的回调,在此更新状态。 |
| `dragState` | `DragState \| null` | — | 当前拖拽中的卡片与来源列。 |
| `setDragState` | `React.Dispatch<SetStateAction<DragState>>` | — | 拖拽状态更新器。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。