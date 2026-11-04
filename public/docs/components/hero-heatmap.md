# Hero 热力图 (Hero Heatmap)

> 左右分栏首屏,右侧为发光热力着色器视觉。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hero-heatmap
- 官方文档:https://www.cult-ui.com/docs/components/hero-heatmap
- 源码位置:`src/components/ui/hero-heatmap.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hero-heatmap
~~~

## 用法

~~~tsx
import { AISDKIcon } from "@/components/ui/hero-heatmap"

export function Example() {
  return (
    <AISDKIcon />
  )
}
~~~

## 导出部件

- `AISDKIcon`
- `HeroHeatmap`
- `HeroHeatmapActions`
- `HeroHeatmapBadges`
- `HeroHeatmapCTA`
- `HeroHeatmapContainer`
- `HeroHeatmapContent`
- `HeroHeatmapDescription`
- `HeroHeatmapHeading`
- `HeroHeatmapMobileVisual`
- `HeroHeatmapRoot`
- `HeroHeatmapShaderOverrides`

## 依赖

- `@paper-design/shaders-react`

## 源码属性定义

### HeroHeatmapCTAProps

~~~ts
export interface HeroHeatmapCTAProps {
  label: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  className?: string
  buttonClassName?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。