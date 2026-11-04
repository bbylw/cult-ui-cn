# 渐变标题 (Gradient Heading)

> 渐变文字标题,提供颜色、字号、字重的 CVA 变体与 asChild。

- 分类:文字与排版
- 本站页面:https://cult-ui.ndjp.net/docs/components/gradient-heading
- 官方文档:https://www.cult-ui.com/docs/components/gradient-heading
- 源码位置:`src/components/ui/gradient-heading.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/gradient-heading
~~~

## 用法

~~~tsx
import { GradientHeading, Size, Variant } from "@/components/ui/gradient-heading"

export function Example() {
  return (
    <GradientHeading>
      <Size />
    </GradientHeading>
  )
}
~~~

## 导出部件

- `GradientHeading`
- `Size`
- `Variant`
- `Weight`
- `headingVariants`

## 依赖

- `@radix-ui/react-slot`
- `class-variance-authority`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。