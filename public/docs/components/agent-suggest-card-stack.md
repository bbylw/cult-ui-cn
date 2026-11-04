# 建议卡堆叠 (Agent Suggest Card Stack)

> AI 助手回复用的一叠建议卡,带进度条、成功与失败状态以及提交按钮。

- 分类:AI 组件
- 本站页面:https://cult-ui.ndjp.net/docs/components/agent-suggest-card-stack
- 官方文档:https://www.cult-ui.com/docs/components/agent-suggest-card-stack
- 源码位置:`src/components/ui/agent-suggest-card-stack.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/agent-suggest-card-stack
~~~

## 用法

~~~tsx
import { AgentSuggestBotBadge, AgentSuggestCardFrame, AgentSuggestCardStack } from "@/components/ui/agent-suggest-card-stack"

export function Example() {
  return (
    <AgentSuggestBotBadge>
      <AgentSuggestCardFrame />
    </AgentSuggestBotBadge>
  )
}
~~~

## 导出部件

- `AgentSuggestBotBadge`
- `AgentSuggestCardFrame`
- `AgentSuggestCardStack`
- `AgentSuggestCommitButton`
- `SuggestionItem`
- `VercelLogo`

## 依赖

- 无额外依赖
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。