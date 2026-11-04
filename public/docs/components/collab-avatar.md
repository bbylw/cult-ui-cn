# 协作头像 (Collab Avatar)

> 用姓名首字母与配色渐变表示在线成员的头像。

- 分类:协作
- 本站页面:https://cult-ui.ndjp.net/docs/components/collab-avatar
- 官方文档:https://www.cult-ui.com/docs/components/collab-avatar
- 源码位置:`src/components/ui/collab-avatar.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/collab-avatar
~~~

## 用法

~~~tsx
import { CollabAvatar } from "@/components/ui/collab-avatar"

export function Example() {
  return (
    <CollabAvatar />
  )
}
~~~

## 导出部件

- `CollabAvatar`

## 依赖

- `motion`

## 源码属性定义

### CollabAvatar

~~~ts
export function CollabAvatar({
name,
  color,
  size = 24,
  className,
}: {
  name: string
  color: string
  size?: number
  className?: string
})
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。