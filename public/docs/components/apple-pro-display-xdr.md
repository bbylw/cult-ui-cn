# Pro Display XDR 样机 (Apple Pro Display XDR)

> 铝制边框、屏幕模式与可交互 macOS 程序坞的显示器样机。

- 分类:样机
- 本站页面:https://cult-ui.ndjp.net/docs/components/apple-pro-display-xdr
- 官方文档:https://www.cult-ui.com/docs/components/apple-pro-display-xdr
- 源码位置:`src/components/ui/apple-pro-display-xdr.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/apple-pro-display-xdr
~~~

## 用法

~~~tsx
import { AppleProDisplayXDR } from "@/components/ui/apple-pro-display-xdr"

export function Example() {
  return (
    <AppleProDisplayXDR />
  )
}
~~~

## 导出部件

- `AppleProDisplayXDR`
- `StudioScreenMode`

## 依赖

- `@tabler/icons-react`
- `motion`

## 源码属性定义

### AppleStudioDisplayProps

~~~ts
export interface AppleStudioDisplayProps {
  className?: string
  /** When set, replaces built-in screen demos */
  screenContent?: ReactNode
  /** Initial variant when using built-in content */
  initialMode?: StudioScreenMode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。