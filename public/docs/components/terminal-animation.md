# 终端动画 (Terminal Animation)

> 可组合的终端动画原语:按类型回放的命令、标签页场景与输出渲染。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/terminal-animation
- 官方文档:https://www.cult-ui.com/docs/components/terminal-animation
- 源码位置:`src/components/ui/terminal-animation.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/terminal-animation
~~~

## 用法

~~~tsx
import { TabContent } from "@/components/ui/terminal-animation"

export function Example() {
  return (
    <TabContent />
  )
}
~~~

## 导出部件

- `TabContent`
- `TerminalAnimationBackgroundGradient`
- `TerminalAnimationBlinkingCursor`
- `TerminalAnimationCommandBar`
- `TerminalAnimationContainer`
- `TerminalAnimationContent`
- `TerminalAnimationOutput`
- `TerminalAnimationOutputLine`
- `TerminalAnimationRoot`
- `TerminalAnimationTabList`
- `TerminalAnimationTabTrigger`
- `TerminalAnimationTrailingPrompt`

## 依赖

- `@radix-ui/react-slot`
- `@radix-ui/react-use-controllable-state`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。