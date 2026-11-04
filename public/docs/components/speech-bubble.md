# 对话气泡 (Speech Bubble)

> 带方向与配色变体的对话气泡。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/speech-bubble
- 官方文档:https://www.cult-ui.com/docs/components/speech-bubble
- 源码位置:`src/components/ui/speech-bubble.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/speech-bubble
~~~

## 用法

~~~tsx
import { SpeechBubble } from "@/components/ui/speech-bubble"

export function Example() {
  return (
    <SpeechBubble />
  )
}
~~~

## 导出部件

- `SpeechBubble`
- `SpeechBubbleBody`
- `SpeechBubbleCursor`
- `SpeechBubbleRoot`
- `SpeechBubbleTail`
- `SpeechBubbleText`

## 依赖

- 无额外依赖

## 源码属性定义

### SpeechBubbleProps

~~~ts
interface SpeechBubbleProps {
  children: React.ReactNode
  className?: string
  showCursor?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。