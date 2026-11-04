# 苹果键盘 (Apple Keyboard)

> 带标注按键与媒体键行的 Apple Magic Keyboard 插画,可演示快捷键。

- 分类:样机
- 本站页面:https://cult-ui.ndjp.net/docs/components/apple-keyboard
- 官方文档:https://www.cult-ui.com/docs/components/apple-keyboard
- 源码位置:`src/components/ui/apple-keyboard.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/apple-keyboard
~~~

## 用法

~~~tsx
import { AppleKeyboard } from "@/components/ui/apple-keyboard"

export function Example() {
  return (
    <AppleKeyboard>内容</AppleKeyboard>
  )
}
~~~

## 导出部件

- `AppleKeyboard`

## 依赖

- `@tabler/icons-react`

## 源码属性定义

### KeyProps

~~~ts
interface KeyProps {
  children?: ReactNode
  size?: KeySize
  symbol?: string
  secondaryLabel?: string
  icon?: ReactNode
  corner?: CornerPosition
  className?: string
  iconWithLabel?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。