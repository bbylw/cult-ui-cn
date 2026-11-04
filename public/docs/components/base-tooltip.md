# Base UI 提示 (Base Tooltip)

> Apple Pro Display XDR 等组件用到的 Base UI 提示原语(Tooltip、Trigger、Content)。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/base-tooltip
- 官方文档:https://www.cult-ui.com/docs/components/base-tooltip
- 源码位置:`src/components/ui/base-tooltip.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/base-tooltip
~~~

## 用法

~~~tsx
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/base-tooltip"

export function Example() {
  return (
    <Tooltip>
      <TooltipContent />
    </Tooltip>
  )
}
~~~

## 导出部件

- `Tooltip`
- `TooltipContent`
- `TooltipProvider`
- `TooltipTrigger`

## 依赖

- `@base-ui/react`
- `@radix-ui/react-slot`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。