# 弹出层 (Popover)

> 带表单支持与流畅过渡的动画弹出层。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/popover
- 官方文档:https://www.cult-ui.com/docs/components/popover
- 源码位置:`src/components/ui/popover.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/popover
~~~

## 用法

~~~tsx
import { PopoverBody } from "@/components/ui/popover"

export function Example() {
  return (
    <PopoverBody />
  )
}
~~~

## 导出部件

- `PopoverBody`
- `PopoverButton`
- `PopoverCloseButton`
- `PopoverContent`
- `PopoverFooter`
- `PopoverForm`
- `PopoverHeader`
- `PopoverLabel`
- `PopoverRoot`
- `PopoverSubmitButton`
- `PopoverTextarea`
- `PopoverTrigger`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### PopoverRootProps

~~~ts
interface PopoverRootProps {
  children: React.ReactNode
  className?: string
}
~~~

### PopoverTriggerProps

~~~ts
interface PopoverTriggerProps {
  children: React.ReactNode
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。