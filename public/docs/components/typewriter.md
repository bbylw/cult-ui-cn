# 打字机 (Typewriter)

> 可调打字速度与光标动画的打字机文字。

- 分类:文字与排版
- 本站页面:https://cult-ui.ndjp.net/docs/components/typewriter
- 官方文档:https://www.cult-ui.com/docs/components/typewriter
- 源码位置:`src/components/ui/typewriter.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/typewriter
~~~

## 用法

~~~tsx
import { Typewriter } from "@/components/ui/typewriter"

export function Example() {
  return (
    <Typewriter>内容</Typewriter>
  )
}
~~~

## 导出部件

- `Typewriter`

## 依赖

- `motion`

## 源码属性定义

### ITypewriterProps

~~~ts
export interface ITypewriterProps {
  delay: number
  texts: string[]
  baseText?: string
}
~~~

### IRepeatedTextAnimationProps

~~~ts
export interface IRepeatedTextAnimationProps {
  delay: number
  texts: string[]
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。