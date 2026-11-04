# 多人光标插画 (Illustration Cursor)

> 带名字标签与配色的协作光标动画。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/illustration-cursor
- 官方文档:https://www.cult-ui.com/docs/components/illustration-cursor
- 源码位置:`src/components/ui/illustration-cursor.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/illustration-cursor
~~~

## 用法

~~~tsx
import { Cursor } from "@/components/ui/illustration-cursor"

export function Example() {
  return (
    <Cursor />
  )
}
~~~

## 导出部件

- `Cursor`
- `CursorDemo`
- `CursorSide`
- `CursorSvg`

## 依赖

- 无额外依赖

## 源码属性定义

### CursorSvg

~~~ts
export function CursorSvg({
flip = false
}: { flip?: boolean })
~~~

### Cursor

~~~ts
export function Cursor({
name,
  color,
  side,
  style: posStyle,
  delay = false,
}: {
  name: string
  color: string
  side: CursorSide
  style?: React.CSSProperties
  delay?: boolean
})
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。