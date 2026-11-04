# 倒计时 (Timer)

> 可设置时长与视觉样式的倒计时器。

- 分类:工具
- 本站页面:https://cult-ui.ndjp.net/docs/components/timer
- 官方文档:https://www.cult-ui.com/docs/components/timer
- 源码位置:`src/components/ui/timer.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/timer
~~~

## 用法

~~~tsx
import { Timer } from "@/components/ui/timer"

export function Example() {
  return (
    <Timer />
  )
}
~~~

## 导出部件

- `Timer`
- `TimerDisplay`
- `TimerIcon`
- `TimerRoot`
- `UseTimerOptions`
- `UseTimerReturn`
- `useTimer`

## 依赖

- `class-variance-authority`
- `lucide-react`

## 源码属性定义

### TimerRootProps

~~~ts
export type TimerRootProps = {
  /** Whether the timer is in loading/running state */
  loading?: boolean
}
~~~

### TimerIconProps

~~~ts
export type TimerIconProps = {
  /** Custom icon to display instead of default Clock */
  icon?: React.ComponentType<{ className?: string }>
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。