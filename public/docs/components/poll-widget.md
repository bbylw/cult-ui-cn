# 投票组件 (Poll Widget)

> 行内、弹出层、对话框三种形态的投票组件。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/poll-widget
- 官方文档:https://www.cult-ui.com/docs/components/poll-widget
- 源码位置:`src/components/ui/poll-widget.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/poll-widget
~~~

## 用法

~~~tsx
import { PollOption } from "@/components/ui/poll-widget"

export function Example() {
  return (
    <PollOption />
  )
}
~~~

## 导出部件

- `PollOption`
- `PollWidget`
- `PollWidgetAnimationPhase`
- `PollWidgetContent`
- `PollWidgetDialog`
- `PollWidgetIndicator`
- `PollWidgetLabel`
- `PollWidgetMode`
- `PollWidgetOption`
- `PollWidgetOptions`
- `PollWidgetPercentage`
- `PollWidgetQuestion`

## 依赖

- `@radix-ui/react-use-controllable-state`
- `class-variance-authority`
- `lucide-react`
- `motion`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。