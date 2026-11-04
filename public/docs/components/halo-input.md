# Halo 输入框 (Halo Input)

> 单行与多行输入框,磨砂填充加渐变边框,含错误态。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-input
- 官方文档:https://www.cult-ui.com/docs/components/halo-input
- 源码位置:`src/components/ui/halo-input.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-input
~~~

## 用法

~~~tsx
import { HaloInput } from "@/components/ui/halo-input"

export function Example() {
  return (
    <HaloInput />
  )
}
~~~

## 导出部件

- `HaloInput`
- `HaloTextarea`

## 依赖

- `@base-ui/react`
- `motion`

## 源码属性定义

### ShellProps

~~~ts
interface ShellProps {
  children: ReactNode
  className?: string
  translucent?: boolean
  invalid?: boolean
  /** Extra classes on the frosted inner (border + focus ring target). */
  innerClassName?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。