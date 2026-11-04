# 有机形状按钮 (Organic Button)

> 两端固定 SVG 端帽的链接式 CTA,通过 CSS 变量共享表面配色。

- 分类:按钮
- 本站页面:https://cult-ui.ndjp.net/docs/components/organic-button
- 官方文档:https://www.cult-ui.com/docs/components/organic-button
- 源码位置:`src/components/ui/organic-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/organic-button
~~~

## 用法

~~~tsx
import { OrganicButton } from "@/components/ui/organic-button"

export function Example() {
  return (
    <OrganicButton>内容</OrganicButton>
  )
}
~~~

## 导出部件

- `OrganicButton`

## 依赖

- `@radix-ui/react-slot`
- `class-variance-authority`
- `lucide-react`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。