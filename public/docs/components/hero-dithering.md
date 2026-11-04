# Hero 抖动 (Hero Dithering)

> 左右分栏首屏,右侧为抖动着色器视觉。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hero-dithering
- 官方文档:https://www.cult-ui.com/docs/components/hero-dithering
- 源码位置:`src/components/ui/hero-dithering.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hero-dithering
~~~

## 用法

~~~tsx
import { AISDKIcon } from "@/components/ui/hero-dithering"

export function Example() {
  return (
    <AISDKIcon />
  )
}
~~~

## 导出部件

- `AISDKIcon`
- `HeroDithering`
- `HeroDitheringActions`
- `HeroDitheringBadges`
- `HeroDitheringCTA`
- `HeroDitheringContainer`
- `HeroDitheringContent`
- `HeroDitheringDescription`
- `HeroDitheringHeading`
- `HeroDitheringMobileVisual`
- `HeroDitheringRoot`
- `HeroDitheringTechItem`

## 依赖

- `@paper-design/shaders-react`

## 源码属性定义

### HeroDitheringCTAProps

~~~ts
export interface HeroDitheringCTAProps {
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