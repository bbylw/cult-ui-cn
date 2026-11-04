# SVG 形状面板 (SVG Shapes)

> 宽幅 SVG 形状与面板,用于背景和首屏装饰。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/svg-shapes
- 官方文档:https://www.cult-ui.com/docs/components/svg-shapes
- 源码位置:`src/components/ui/svg-shapes.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/svg-shapes
~~~

## 用法

~~~tsx
import { ArrowPentagonShapeSvg } from "@/components/ui/svg-shapes"

export function Example() {
  return (
    <ArrowPentagonShapeSvg />
  )
}
~~~

## 导出部件

- `ArrowPentagonShapeSvg`
- `CircleShapeSvg`
- `CubeWireshapeSvg`
- `DodecahedronWireshapeSvg`
- `EllipseShapeSvg`
- `FlowerOfLifeSvg`
- `GoldenSpiralSvg`
- `GothicArchPanelSvg`
- `IcosahedronWireshapeSvg`
- `KiteShapeSvg`
- `MetatronsCubeSvg`
- `OctahedronWireshapeSvg`

## 依赖

- 无额外依赖

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