# 宇宙按钮 (Cosmic Button)

> 带光晕宇宙渐变边框的链接或按钮,悬停时边框扩大,适合首屏 CTA。

- 分类:按钮
- 本站页面:https://cult-ui.ndjp.net/docs/components/cosmic-button
- 官方文档:https://www.cult-ui.com/docs/components/cosmic-button
- 源码位置:`src/components/ui/cosmic-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/cosmic-button
~~~

## 用法

~~~tsx
import { CosmicButton } from "@/components/ui/cosmic-button"

export function Example() {
  return (
    <CosmicButton>内容</CosmicButton>
  )
}
~~~

## 导出部件

- `CosmicButton`

## 依赖

- 无额外依赖

## 源码属性定义

### CosmicButtonProps

~~~ts
export type CosmicButtonProps<E extends "a" | "button" = "a"> = {
  /** The HTML element to render as. @default "a" */
  as?: E
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。