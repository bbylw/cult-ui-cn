# 功能投票列表 (Feature Voting)

> 带点赞的功能请求列表,可按票数排序。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/feature-voting
- 官方文档:https://www.cult-ui.com/docs/components/feature-voting
- 源码位置:`src/components/ui/feature-voting.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/feature-voting
~~~

## 用法

~~~tsx
import { FeatureVoting } from "@/components/ui/feature-voting"

export function Example() {
  return (
    <FeatureVoting />
  )
}
~~~

## 导出部件

- `FeatureVoting`
- `FeatureVotingCount`
- `FeatureVotingDescription`
- `FeatureVotingGroup`
- `FeatureVotingItem`
- `FeatureVotingRoot`
- `FeatureVotingTitle`
- `FeatureVotingTrigger`
- `FeatureVotingValue`
- `useFeatureVoting`

## 依赖

- `@radix-ui/react-use-controllable-state`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。