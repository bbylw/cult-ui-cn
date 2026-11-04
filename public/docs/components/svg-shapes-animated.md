# 滚动描边 SVG (SVG Shapes Animated)

> 滚动触发的描边绘制动画,配合宽幅 SVG 形状使用。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/svg-shapes-animated
- 官方文档:https://www.cult-ui.com/docs/components/svg-shapes-animated
- 源码位置:`src/components/ui/svg-shapes-animated.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/svg-shapes-animated
~~~

## 用法

~~~tsx
import { ArrowPentagonShapeSvg } from "@/components/ui/svg-shapes-animated"

export function Example() {
  return (
    <ArrowPentagonShapeSvg />
  )
}
~~~

## 导出部件

- `ArrowPentagonShapeSvg`
- `ChevronShapeSvg`
- `CircleShapeSvg`
- `CrossShapeSvg`
- `CubeWireframeSvg`
- `DiamondShapeSvg`
- `DodecahedronWireframeSvg`
- `DoubleNotchTechShapeSvg`
- `EllipseShapeSvg`
- `FlowerOfLifeSvg`
- `GoldenSpiralSvg`
- `GothicArchPanelSvg`

## 依赖

- `motion`

## 源码属性定义

### ShapeSvgProps

~~~ts
export interface ShapeSvgProps {
  className?: string
  flip?: ShapeShapeFlip
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。