# 可扩展工具栏 (Toolbar Expandable)

> 分步展开的工具栏,带动画与增强滚动。

- 分类:导航与标签页
- 本站页面:https://cult-ui.ndjp.net/docs/components/toolbar-expandable
- 官方文档:https://www.cult-ui.com/docs/components/toolbar-expandable
- 源码位置:`src/components/ui/toolbar-expandable.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/toolbar-expandable
~~~

## 用法

~~~tsx
import { ToolbarExpandable } from "@/components/ui/toolbar-expandable"
~~~

## 导出部件


## 依赖

- `motion`
- `@radix-ui/react-scroll-area`

## 源码属性定义

### DynamicToolbarExpandableProps

~~~ts
interface DynamicToolbarExpandableProps {
  steps: DynamicStep[]
  badgeText?: string

  className?: string
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  activeStep?: string | null
  onActiveStepChange?: (stepId: string | null) => void
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。