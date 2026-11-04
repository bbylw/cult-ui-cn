# 投票计数 (Vote Tally)

> 带点赞的票数统计列表,可按票数排序。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/vote-tally
- 官方文档:https://www.cult-ui.com/docs/components/vote-tally
- 源码位置:`src/components/ui/vote-tally.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/vote-tally
~~~

## 用法

~~~tsx
import { VoteTally } from "@/components/ui/vote-tally"

export function Example() {
  return (
    <VoteTally />
  )
}
~~~

## 导出部件

- `VoteTally`
- `VoteTallyCount`
- `VoteTallyDescription`
- `VoteTallyGroup`
- `VoteTallyItem`
- `VoteTallyRoot`
- `VoteTallyTitle`
- `VoteTallyTrigger`
- `VoteTallyValue`
- `useVoteTally`

## 依赖

- `@radix-ui/react-use-controllable-state`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。