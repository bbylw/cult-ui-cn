# Halo 通知 (Halo Notification)

> 行内通知卡片,多种边框风格与交错文字动画,可关闭。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-notification
- 官方文档:https://www.cult-ui.com/docs/components/halo-notification
- 源码位置:`src/components/ui/halo-notification.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-notification
~~~

## 用法

~~~tsx
import { HaloPolishedNotification, HaloPolishedToastSurface, RimVariant } from "@/components/ui/halo-notification"

export function Example() {
  return (
    <HaloPolishedNotification>
      <HaloPolishedToastSurface />
    </HaloPolishedNotification>
  )
}
~~~

## 导出部件

- `HaloPolishedNotification`
- `HaloPolishedToastSurface`
- `RimVariant`

## 依赖

- `@base-ui/react`
- `lucide-react`
- `motion`

## 源码属性定义

### HaloPolishedToastSurfaceProps

~~~ts
export interface HaloPolishedToastSurfaceProps {
  title: string
  description?: string
  /**
   * Change when the notification shows a new message so title/body stagger replay.
   * Defaults to `title` + `description` (stable for identical copy).
   */
  messageKey?: string
  /** `status` for non-urgent updates; `alert` for urgent/interruptive content. */
  politeness?: "status" | "alert"
  onDismiss?: () => void
  /** Forwarded to the local `HaloCard`. */
  translucent?: boolean
  /** Rim blob + border-trail palette (success / error vs default). */
  rimVariant?: RimVariant
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。