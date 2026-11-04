# 评论气泡插画 (Illustration Comment Bubble)

> 含头像、行内代码与光标的评论气泡,用于评审与聊天。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/illustration-comment-bubble
- 官方文档:https://www.cult-ui.com/docs/components/illustration-comment-bubble
- 源码位置:`src/components/ui/illustration-comment-bubble.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/illustration-comment-bubble
~~~

## 用法

~~~tsx
import { Code } from "@/components/ui/illustration-comment-bubble"

export function Example() {
  return (
    <Code />
  )
}
~~~

## 导出部件

- `Code`
- `CommentBubble`
- `CommentBubbleDemo`

## 依赖

- 无额外依赖

## 源码属性定义

### Code

~~~ts
export function Code({
children
}: { children: React.ReactNode })
~~~

### CommentBubble

~~~ts
export function CommentBubble({
user,
  color,
  deviceIcons = [],
  children,
  cursor,
}: {
  user: string
  color: string
  deviceIcons?: IconKey[]
  children: React.ReactNode
  cursor?: React.ReactNode
})
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。