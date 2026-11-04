# SVG 分段带 (SVG Bands)

> 宽幅分段带、城垛与锯齿边缘、陡峭首屏切角与装饰框。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/svg-bands
- 官方文档:https://www.cult-ui.com/docs/components/svg-bands
- 源码位置:`src/components/ui/svg-bands.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/svg-bands
~~~

## 用法

~~~tsx
import { AngledCornerPanelSvg } from "@/components/ui/svg-bands"

export function Example() {
  return (
    <AngledCornerPanelSvg />
  )
}
~~~

## 导出部件

- `AngledCornerPanelSvg`
- `ArrowChevronBandSvg`
- `BandShape`
- `BandShapeFlip`
- `BottomBandSteepRightSvg`
- `CastleWallBandSvg`
- `CenterTabBandSvg`
- `CenterTabTopBandSvg`
- `DiagonalSlashBandSvg`
- `DualSideNotchFrameSvg`
- `FlatSingleAngleBandSvg`
- `NotchedTopBandSvg`

## 依赖

- 无额外依赖

## 源码属性定义

### BandShapeProps

~~~ts
export interface BandShapeProps {
  path: string
  viewBox: string
  flip?: BandShapeFlip
  className?: string
  /** Accessible name; defaults to a generic label when omitted. */
  title?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。