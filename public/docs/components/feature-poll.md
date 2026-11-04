# 功能投票 (Feature Poll)

> 功能投票的组合式实现,支持单选、多选与结果条。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/feature-poll
- 官方文档:https://www.cult-ui.com/docs/components/feature-poll
- 源码位置:`src/components/ui/feature-poll.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/feature-poll
~~~

## 用法

~~~tsx
import { FeaturePoll } from "@/components/ui/feature-poll"

export function Example() {
  return (
    <FeaturePoll />
  )
}
~~~

## 导出部件

- `FeaturePoll`
- `FeaturePollDescription`
- `FeaturePollFooter`
- `FeaturePollHeader`
- `FeaturePollIndicator`
- `FeaturePollLabel`
- `FeaturePollOption`
- `FeaturePollOptions`
- `FeaturePollPercentage`
- `FeaturePollProgress`
- `FeaturePollRoot`
- `FeaturePollTitle`

## 依赖

- `@radix-ui/react-use-controllable-state`
- `lucide-react`
- `class-variance-authority`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。