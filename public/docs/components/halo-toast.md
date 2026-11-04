# Halo Toast (Halo Toast)

> 基于 Sonner 的 Halo 风格 Toast,支持操作按钮,需在根布局挂载一次。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-toast
- 官方文档:https://www.cult-ui.com/docs/components/halo-toast
- 源码位置:`src/components/ui/halo-toast.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-toast
~~~

## 用法

~~~tsx
import { PolishedToastOptions } from "@/components/ui/halo-toast"

export function Example() {
  return (
    <PolishedToastOptions />
  )
}
~~~

## 导出部件

- `PolishedToastOptions`
- `PolishedToastSurface`
- `PolishedToaster`
- `RimVariant`
- `showPolishedToast`

## 依赖

- `lucide-react`
- `motion`
- `sonner`

## 源码属性定义

### PolishedToastSurfaceProps

~~~ts
export interface PolishedToastSurfaceProps {
  title: string
  description?: string
  messageKey?: string
  politeness?: "status" | "alert"
  translucent?: boolean
  rimVariant?: RimVariant
  /** Sonner toast id from `toast.custom((id) => …)`; required for the dismiss control. */
  toastId?: number | string
  /** When true (default with {@link showPolishedToast}), renders a Dismiss control. */
  closeButton?: boolean
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。