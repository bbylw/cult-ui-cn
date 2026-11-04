# 3D 地球 (Globe (COBE))

> 基于 cobe 构建的交互式 3D WebGL 地球组件,支持拖拽旋转、明暗主题自适应、标记点与飞行弧线,适合营销页首屏与仪表盘。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/globe
- 官方文档:https://www.cult-ui.com/docs/components/globe
- 源码位置:`src/components/ui/globe.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/globe
~~~

## 用法

~~~tsx
import { DefaultShowcaseGlobe } from "@/components/ui/globe"

<DefaultShowcaseGlobe globeSize={520} title="CULT PRO" />
~~~

## 导出部件

- `DefaultShowcaseGlobe`
- `MarketingHeroGlobe`
- `ShowcaseConfig`
- `ShowcaseKey`
- `analyticsMarkers`
- `barMarkers`
- `cdnArcs`
- `cdnMarkers`
- `flightArcs`
- `flightMarkers`
- `getShowcaseArcs`
- `getShowcaseMarkers`

## 依赖

- `cobe`
- `motion`
- `next-themes`

## 源码属性定义

### ShowcaseConfig

~~~ts
export type ShowcaseConfig = {
  theta: number
  dark: number
  mapBrightness: number
  markerColor: [number, number, number]
  baseColor: [number, number, number]
  arcColor: [number, number, number]
  markerSize: number
  markerElevation: number
}
~~~

### DefaultShowcaseGlobeProps

~~~ts
export interface DefaultShowcaseGlobeProps {
  className?: string
  globeSize?: number
  title?: string
  orbitPhrase?: string
  /** When true, omit the centered scanline title (e.g. headline lives in the hero column). */
  hideCenterTitle?: boolean
}
~~~

## 备注

标记点与弧线标签使用 CSS 锚点定位。组件同时导出 DefaultShowcaseGlobe 与 MarketingHeroGlobe 两个变体,以及 CDN、航班、卫星、分析等多种示例数据配置。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `className` | `string` | — | 附加到根元素的类名。 |
| `globeSize` | `number` | `520` | 地球渲染尺寸(px)。 |
| `title` | `string` | `"CULT PRO"` | 中心标题贴纸文字。 |
| `orbitPhrase` | `string` | `"Ship-ready sections · "` | 环绕轨道循环滚动的文字短语。 |
| `hideCenterTitle` | `boolean` | `false` | 隐藏中心标题。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。