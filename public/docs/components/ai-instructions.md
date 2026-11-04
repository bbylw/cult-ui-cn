# AI 指令管理 (AI Instructions)

> 在弹出层里搜索、开关、新建自定义 AI 指令的组合式组件。

- 分类:AI 组件
- 本站页面:https://cult-ui.ndjp.net/docs/components/ai-instructions
- 官方文档:https://www.cult-ui.com/docs/components/ai-instructions
- 源码位置:`src/components/ui/ai-instructions.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/ai-instructions
~~~

## 用法

~~~tsx
import { Instruction } from "@/components/ui/ai-instructions"

export function Example() {
  return (
    <Instruction />
  )
}
~~~

## 导出部件

- `Instruction`
- `Instructions`
- `InstructionsContent`
- `InstructionsCreateDialog`
- `InstructionsCreateTrigger`
- `InstructionsEmpty`
- `InstructionsFooter`
- `InstructionsGroup`
- `InstructionsHoverCard`
- `InstructionsItem`
- `InstructionsItemDescription`
- `InstructionsItemTitle`

## 依赖

- `@hugeicons/core-free-icons`
- `@hugeicons/react`

## 源码属性定义

### InstructionsHoverCardProps

~~~ts
export interface InstructionsHoverCardProps {
  /** The instruction to preview */
  instruction: Instruction
  /** The trigger element (instruction item) */
  children: ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。