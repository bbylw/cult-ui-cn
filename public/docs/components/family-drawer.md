# 多视图抽屉 (Family Drawer)

> 基于 Vaul 的底部多视图抽屉,切换视图时平滑改变高度。

- 分类:浮层与抽屉
- 本站页面:https://cult-ui.ndjp.net/docs/components/family-drawer
- 官方文档:https://www.cult-ui.com/docs/components/family-drawer
- 源码位置:`src/components/ui/family-drawer.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/family-drawer
~~~

## 用法

~~~tsx
import { FamilyDrawerAnimatedContent } from "@/components/ui/family-drawer"

export function Example() {
  return (
    <FamilyDrawerAnimatedContent />
  )
}
~~~

## 导出部件

- `FamilyDrawerAnimatedContent`
- `FamilyDrawerAnimatedWrapper`
- `FamilyDrawerButton`
- `FamilyDrawerClose`
- `FamilyDrawerContent`
- `FamilyDrawerDescription`
- `FamilyDrawerHeader`
- `FamilyDrawerOverlay`
- `FamilyDrawerPortal`
- `FamilyDrawerRoot`
- `FamilyDrawerSecondaryButton`
- `FamilyDrawerTitle`

## 依赖

- `motion`
- `react-use-measure`
- `vaul`
- `@radix-ui/react-slot`

## 源码属性定义

### FamilyDrawerRootProps

~~~ts
interface FamilyDrawerRootProps {
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  defaultView?: string
  onViewChange?: (view: string) => void
  views?: ViewsRegistry
}
~~~

### FamilyDrawerTriggerProps

~~~ts
interface FamilyDrawerTriggerProps {
  children: ReactNode
  asChild?: boolean
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。