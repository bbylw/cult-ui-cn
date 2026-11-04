# 浮动面板 (Floating Panel)

> 从触发器位置形变展开的浮动面板,含表单与文本域部件。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/floating-panel
- 官方文档:https://www.cult-ui.com/docs/components/floating-panel
- 源码位置:`src/components/ui/floating-panel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/floating-panel
~~~

## 用法

~~~tsx
import { FloatingPanelBody } from "@/components/ui/floating-panel"

export function Example() {
  return (
    <FloatingPanelBody />
  )
}
~~~

## 导出部件

- `FloatingPanelBody`
- `FloatingPanelButton`
- `FloatingPanelCloseButton`
- `FloatingPanelContent`
- `FloatingPanelFooter`
- `FloatingPanelForm`
- `FloatingPanelHeader`
- `FloatingPanelLabel`
- `FloatingPanelRoot`
- `FloatingPanelSubmitButton`
- `FloatingPanelTextarea`
- `FloatingPanelTrigger`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### FloatingPanelRootProps

~~~ts
interface FloatingPanelRootProps {
  children: React.ReactNode
  className?: string
}
~~~

### FloatingPanelTriggerProps

~~~ts
interface FloatingPanelTriggerProps {
  children: React.ReactNode
  className?: string
  title: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。