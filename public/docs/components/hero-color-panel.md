# Hero 色彩面板 (Hero Color Panel)

> 左右分栏首屏,右侧为 ColorPanels 着色器视觉,含 CTA 与技术栈徽章。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hero-color-panel
- 官方文档:https://www.cult-ui.com/docs/components/hero-color-panel
- 源码位置:`src/components/ui/hero-color-panel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hero-color-panel
~~~

## 用法

~~~tsx
import { AISDKIcon } from "@/components/ui/hero-color-panel"

export function Example() {
  return (
    <AISDKIcon />
  )
}
~~~

## 导出部件

- `AISDKIcon`
- `HeroColorPanels`
- `HeroColorPanelsActions`
- `HeroColorPanelsBadges`
- `HeroColorPanelsCTA`
- `HeroColorPanelsContainer`
- `HeroColorPanelsContent`
- `HeroColorPanelsDescription`
- `HeroColorPanelsHeading`
- `HeroColorPanelsMobileVisual`
- `HeroColorPanelsRoot`
- `HeroColorPanelsTechItem`

## 依赖

- `@paper-design/shaders-react`

## 源码属性定义

### HeroColorPanelsCTAProps

~~~ts
export interface HeroColorPanelsCTAProps {
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