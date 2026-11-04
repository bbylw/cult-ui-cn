# 方向感知标签页 (Direction Aware Tabs)

> 内容按方向左右滑动切换,并随内容平滑改变尺寸。

- 分类:导航与标签页
- 本站页面:https://cult-ui.ndjp.net/docs/components/direction-aware-tabs
- 官方文档:https://www.cult-ui.com/docs/components/direction-aware-tabs
- 源码位置:`src/components/ui/direction-aware-tabs.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/direction-aware-tabs
~~~

## 用法

~~~tsx
import { DirectionAwareTabs } from "@/components/ui/direction-aware-tabs"

export function Example() {
  return (
    <DirectionAwareTabs />
  )
}
~~~

## 导出部件

- `DirectionAwareTabs`

## 依赖

- `motion`
- `react-use-measure`

## 源码属性定义

### OgImageSectionProps

~~~ts
interface OgImageSectionProps {
  tabs: Tab[]
  className?: string
  /** Outer container radius (e.g. `rounded-lg`) */
  rounded?: string
  /** Inner tab/bubble radius — should be outer radius minus container padding (~3px) */
  roundedInner?: string
  onChange?: () => void
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。