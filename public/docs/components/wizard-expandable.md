# 可扩展向导 (Wizard Expandable)

> 可展开的多步向导,支持前进校验、可滚动步骤轨与高度过渡。

- 分类:交互
- 本站页面:https://cult-ui.ndjp.net/docs/components/wizard-expandable
- 官方文档:https://www.cult-ui.com/docs/components/wizard-expandable
- 源码位置:`src/components/ui/wizard-expandable.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/wizard-expandable
~~~

## 用法

~~~tsx
import { WizardStep } from "@/components/ui/wizard-expandable"

export function Example() {
  return (
    <WizardStep />
  )
}
~~~

## 导出部件

- `WizardStep`
- `useWizardExpandable`

## 依赖

- `@base-ui/react`
- `@radix-ui/react-use-controllable-state`
- `motion`

## 源码属性定义

### WizardExpandableProps

~~~ts
export interface WizardExpandableProps {
  steps: WizardStep[]
  badgeText?: string

  className?: string
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  activeStep?: string | null
  onActiveStepChange?: (stepId: string | null) => void

  /**
   * Return false to block moving from the current step to `toStepId`.
   * Not called when opening the first step (`fromStepId` is null), closing the wizard,
   * or when `skipValidationForBackward` is true and the target step is before the current one.
   */
  canNavigateToStep?: (context: WizardNavigateContext) => boolean
  /**
   * When true, navigating to an earlier step does not call `canNavigateToStep`.
   * @default true
   */
  skipValidationForBackward?: boolean
  /** Called when navigation was blocked by `canNavigateToStep` returning false. */
  onNavigateBlocked?: (context: WizardNavigateContext) => void

  /**
   * When `false`, disables Next and the Complete action. When `undefined`, only
   * `canNavigateToStep` gates forward moves (and Complete stays enabled unless you set this).
   */
  // …
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。