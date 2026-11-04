# 新手引导 (Intro Disclosure)

> 桌面用 Dialog、移动端用 Drawer 的多步引导,记录已关闭状态。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/intro-disclosure
- 官方文档:https://www.cult-ui.com/docs/components/intro-disclosure
- 源码位置:`src/components/ui/intro-disclosure.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/intro-disclosure
~~~

## 用法

~~~tsx
import { IntroDisclosure } from "@/components/ui/intro-disclosure"

export function Example() {
  return (
    <IntroDisclosure>内容</IntroDisclosure>
  )
}
~~~

## 导出部件

- `IntroDisclosure`

## 依赖

- `motion`
- `react-use-measure`
- `lucide-react`

## 源码属性定义

### StepTabProps

~~~ts
interface StepTabProps {
  step: Step
  isActive: boolean
  onClick: () => void
  isCompleted: boolean
}
~~~

### FeatureDisclosureProps

~~~ts
interface FeatureDisclosureProps {
  steps: Step[]
  featureId: string
  onComplete?: () => void
  onSkip?: () => void
  showProgressBar?: boolean
  open: boolean
  setOpen: (open: boolean) => void
  forceVariant?: "mobile" | "desktop"
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。