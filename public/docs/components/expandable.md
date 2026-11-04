# 可展开卡片 (Expandable)

> 在收起与展开状态间平滑动画,展开后显示更多细节。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/expandable
- 官方文档:https://www.cult-ui.com/docs/components/expandable
- 源码位置:`src/components/ui/expandable.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/expandable
~~~

## 用法

~~~tsx
import { Expandable, ExpandableCard, ExpandableCardContent } from "@/components/ui/expandable"

export function Example() {
  return (
    <Expandable>
      <ExpandableCard />
    </Expandable>
  )
}
~~~

## 导出部件

- `Expandable`
- `ExpandableCard`
- `ExpandableCardContent`
- `ExpandableCardFooter`
- `ExpandableCardHeader`
- `ExpandableContent`
- `ExpandableTrigger`
- `useExpandable`

## 依赖

- `motion`
- `react-use-measure`

## 源码属性定义

### AnimationProps

~~~ts
interface AnimationProps {
  initial?: TargetAndTransition
  animate?: TargetAndTransition
  exit?: TargetAndTransition
  transition?: any
}
~~~

### ExpandableCardProps

~~~ts
interface ExpandableCardProps {
  children: ReactNode
  className?: string
  collapsedSize?: { width?: number; height?: number } // Size when collapsed
  expandedSize?: { width?: number; height?: number } // Size when expanded
  hoverToExpand?: boolean // Whether to expand on hover
  expandDelay?: number // Delay before expanding
  collapseDelay?: number // Delay before collapsing
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。