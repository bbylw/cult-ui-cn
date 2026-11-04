# 提示词库 (Prompt Library)

> 按分类浏览、插入和管理提示词模板,支持自定义提示词。

- 分类:AI 组件
- 本站页面:https://cult-ui.ndjp.net/docs/components/prompt-library
- 官方文档:https://www.cult-ui.com/docs/components/prompt-library
- 源码位置:`src/components/ui/prompt-library.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/prompt-library
~~~

## 用法

~~~tsx
import { Prompt } from "@/components/ui/prompt-library"

export function Example() {
  return (
    <Prompt />
  )
}
~~~

## 导出部件

- `Prompt`
- `PromptLibrary`
- `PromptLibraryContent`
- `PromptLibraryCreateDialog`
- `PromptLibraryCreateTrigger`
- `PromptLibraryEmpty`
- `PromptLibraryFooter`
- `PromptLibraryGroup`
- `PromptLibraryHoverCard`
- `PromptLibraryItem`
- `PromptLibraryItemDescription`
- `PromptLibraryItemTitle`

## 依赖

- `@hugeicons/core-free-icons`
- `@hugeicons/react`

## 源码属性定义

### PromptLibraryHoverCardProps

~~~ts
export interface PromptLibraryHoverCardProps {
  /** The prompt to preview */
  prompt: Prompt
  /** The trigger element (prompt item) */
  children: ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。