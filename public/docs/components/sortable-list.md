# 可排序列表 (Sortable List)

> 拖放排序的列表,带布局动画。

- 分类:交互
- 本站页面:https://cult-ui.ndjp.net/docs/components/sortable-list
- 官方文档:https://www.cult-ui.com/docs/components/sortable-list
- 源码位置:`src/components/ui/sortable-list.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/sortable-list
~~~

## 用法

~~~tsx
import { Item, SortableList, SortableListItem } from "@/components/ui/sortable-list"

export function Example() {
  return (
    <Item>
      <SortableList />
    </Item>
  )
}
~~~

## 导出部件

- `Item`
- `SortableList`
- `SortableListItem`

## 依赖

- `motion`
- `react-use-measure`
- `lucide-react`

## 源码属性定义

### SortableListItemProps

~~~ts
interface SortableListItemProps {
  item: Item
  order: number
  onCompleteItem: (id: number) => void
  onRemoveItem: (id: number) => void
  renderExtra?: (item: Item) => React.ReactNode
  isExpanded?: boolean
  className?: string
  handleDrag: () => void
}
~~~

### SortableListProps

~~~ts
interface SortableListProps {
  items: Item[]
  setItems: Dispatch<SetStateAction<Item[]>>
  onCompleteItem: (id: number) => void
  renderItem: (
    item: Item,
    order: number,
    onCompleteItem: (id: number) => void,
    onRemoveItem: (id: number) => void
  ) => ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。