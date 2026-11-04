# 提示词输入器 (Prompt Composer)

> 多行提示词输入框,带着色器头像、交错占位符、加载线与发送/附件按钮。

- 分类:AI 组件
- 本站页面:https://cult-ui.ndjp.net/docs/components/prompt-composer
- 官方文档:https://www.cult-ui.com/docs/components/prompt-composer
- 源码位置:`src/components/ui/prompt-composer.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/prompt-composer
~~~

## 用法

~~~tsx
import { AiBlobWarpAvatar } from "@/components/ui/prompt-composer"

export function Example() {
  return (
    <AiBlobWarpAvatar />
  )
}
~~~

## 导出部件

- `AiBlobWarpAvatar`
- `PromptComposer`
- `PromptTextarea`

## 依赖

- `@base-ui/react`
- `@paper-design/shaders-react`
- `lucide-react`
- `motion`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。