# 全屏展开 (Expandable Screen)

> 用共享布局动画把卡片或按钮形变成全屏视图。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/expandable-screen
- 官方文档:https://www.cult-ui.com/docs/components/expandable-screen
- 源码位置:`src/components/ui/expandable-screen.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/expandable-screen
~~~

## 用法

~~~tsx
import { ExpandableScreen } from "@/components/ui/expandable-screen"

export function Example() {
  return (
    <ExpandableScreen />
  )
}
~~~

## 导出部件

- `ExpandableScreen`
- `ExpandableScreenBackground`
- `ExpandableScreenContent`
- `ExpandableScreenTrigger`
- `useExpandableScreen`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### ExpandableScreenProps

~~~ts
interface ExpandableScreenProps {
  children: ReactNode
  defaultExpanded?: boolean
  onExpandChange?: (expanded: boolean) => void
  layoutId?: string
  triggerRadius?: string
  contentRadius?: string
  animationDuration?: number
  lockScroll?: boolean
}
~~~

### ExpandableScreenTriggerProps

~~~ts
interface ExpandableScreenTriggerProps {
  children: ReactNode
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。