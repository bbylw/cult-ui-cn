# 多步引导原语 (Onboarding)

> 组合式多步引导:根组件、步骤导航、功能轮播、选择组、提示列表与步骤指示器。

- 分类:交互
- 本站页面:https://cult-ui.ndjp.net/docs/components/onboarding
- 官方文档:https://www.cult-ui.com/docs/components/onboarding
- 源码位置:`src/components/ui/onboarding.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/onboarding
~~~

## 用法

~~~tsx
import { ChoiceGroup, FeatureCarousel, Onboarding } from "@/components/ui/onboarding"

export function Example() {
  return (
    <ChoiceGroup>
      <FeatureCarousel />
    </ChoiceGroup>
  )
}
~~~

## 导出部件

- `ChoiceGroup`
- `FeatureCarousel`
- `Onboarding`
- `StepIndicator`
- `TipsList`
- `useOnboarding`

## 依赖

- `@radix-ui/react-use-controllable-state`
- `class-variance-authority`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。