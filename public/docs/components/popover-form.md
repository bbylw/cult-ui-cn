# 表单弹出层 (Popover Form)

> 带成功态与动画过渡的表单弹出层。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/popover-form
- 官方文档:https://www.cult-ui.com/docs/components/popover-form
- 源码位置:`src/components/ui/popover-form.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/popover-form
~~~

## 用法

~~~tsx
import { PopoverForm } from "@/components/ui/popover-form"

export function Example() {
  return (
    <PopoverForm />
  )
}
~~~

## 导出部件

- `PopoverForm`
- `PopoverFormButton`
- `PopoverFormCutOutLeftIcon`
- `PopoverFormCutOutRightIcon`
- `PopoverFormSeparator`
- `PopoverFormSuccess`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### PopoverFormProps

~~~ts
type PopoverFormProps = {
  open: boolean
  setOpen: (open: boolean) => void
  openChild?: ReactNode
  successChild?: ReactNode
  showSuccess: boolean
  width?: string
  height?: string
  showCloseButton?: boolean
  title: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。