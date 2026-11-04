# Hero 径向渐变 (Hero Static Radial Gradient)

> 左右分栏首屏,右侧为静态径向渐变色视觉。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hero-static-radial-gradient
- 官方文档:https://www.cult-ui.com/docs/components/hero-static-radial-gradient
- 源码位置:`src/components/ui/hero-static-radial-gradient.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hero-static-radial-gradient
~~~

## 用法

~~~tsx
import { AISDKIcon, HeroStaticRadialGradient, HeroStaticRadialGradientActions } from "@/components/ui/hero-static-radial-gradient"

export function Example() {
  return (
    <AISDKIcon>
      <HeroStaticRadialGradient />
    </AISDKIcon>
  )
}
~~~

## 导出部件

- `AISDKIcon`
- `HeroStaticRadialGradient`
- `HeroStaticRadialGradientActions`
- `HeroStaticRadialGradientBadges`
- `HeroStaticRadialGradientCTA`
- `HeroStaticRadialGradientContainer`
- `HeroStaticRadialGradientContent`
- `HeroStaticRadialGradientDescription`
- `HeroStaticRadialGradientHeading`
- `HeroStaticRadialGradientMobileVisual`
- `HeroStaticRadialGradientRoot`
- `HeroStaticRadialGradientTechItem`

## 依赖

- `@paper-design/shaders-react`

## 源码属性定义

### HeroStaticRadialGradientCTAProps

~~~ts
export interface HeroStaticRadialGradientCTAProps {
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