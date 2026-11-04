# Hero 液态金属 (Hero Liquid Metal)

> 左右分栏首屏,右侧为铬金属液态着色器视觉。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hero-liquid-metal
- 官方文档:https://www.cult-ui.com/docs/components/hero-liquid-metal
- 源码位置:`src/components/ui/hero-liquid-metal.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hero-liquid-metal
~~~

## 用法

~~~tsx
import { AISDKIcon, HeroLiquidMetal, HeroLiquidMetalActions } from "@/components/ui/hero-liquid-metal"

export function Example() {
  return (
    <AISDKIcon>
      <HeroLiquidMetal />
    </AISDKIcon>
  )
}
~~~

## 导出部件

- `AISDKIcon`
- `HeroLiquidMetal`
- `HeroLiquidMetalActions`
- `HeroLiquidMetalBadges`
- `HeroLiquidMetalCTA`
- `HeroLiquidMetalContainer`
- `HeroLiquidMetalContent`
- `HeroLiquidMetalDescription`
- `HeroLiquidMetalHeading`
- `HeroLiquidMetalMobileVisual`
- `HeroLiquidMetalRoot`
- `HeroLiquidMetalShaderOverrides`

## 依赖

- `@paper-design/shaders-react`

## 源码属性定义

### HeroLiquidMetalCTAProps

~~~ts
export interface HeroLiquidMetalCTAProps {
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