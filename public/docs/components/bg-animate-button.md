# 渐变背景按钮 (Background Animate Button)

> 背景为旋转圆锥渐变的按钮,内置预设渐变、CVA 变体与 asChild。

- 分类:按钮
- 本站页面:https://cult-ui.ndjp.net/docs/components/bg-animate-button
- 官方文档:https://www.cult-ui.com/docs/components/bg-animate-button
- 源码位置:`src/components/ui/bg-animate-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/bg-animate-button
~~~

## 用法

~~~tsx
import { BgAnimateButton } from "@/components/ui/bg-animate-button"

export function Example() {
  return (
    <BgAnimateButton>内容</BgAnimateButton>
  )
}
~~~

## 导出部件

- `BgAnimateButton`

## 依赖

- `@radix-ui/react-slot`
- `class-variance-authority`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。