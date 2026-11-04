# 侧边面板 (Side Panel)

> 可从任意方向滑入的侧边面板。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/side-panel
- 官方文档:https://www.cult-ui.com/docs/components/side-panel
- 源码位置:`src/components/ui/side-panel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/side-panel
~~~

## 用法

~~~tsx
import { SidePanel } from "@/components/ui/side-panel"

export function Example() {
  return (
    <SidePanel />
  )
}
~~~

## 导出部件

- `SidePanel`

## 依赖

- `motion`
- `react-use-measure`

## 源码属性定义

### PanelContainerProps

~~~ts
type PanelContainerProps = {
  panelOpen: boolean
  handlePanelOpen: () => void
  className?: string
  videoUrl?: string
  renderButton?: (handleToggle: () => void) => ReactNode
  children: ReactNode
}
~~~

### ResizablePanelProps

~~~ts
type ResizablePanelProps = {
  children: React.ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。