# 分析图表 (Analytics Chart)

> Vercel 风格的 SVG 折线图组件,渐变描边、悬浮 tooltip 卡片,纯 SVG 实现无第三方图表库,适合分析仪表盘。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/analytics-chart
- 官方文档:https://www.cult-ui.com/docs/components/analytics-chart
- 源码位置:`src/components/ui/analytics-chart.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/analytics-chart
~~~

## 用法

~~~tsx
import { AnalyticsLineChart } from "@/components/ui/analytics-chart"

<AnalyticsLineChart
  data={[
    { date: "2024-01-07", label: "organic", value: 340 },
    { date: "2024-01-14", label: "organic", value: 520 },
  ]}
  valueLabel="注册量"
/>
~~~

## 导出部件

- `AnalyticsDataPoint`
- `AnalyticsGradientStop`
- `AnalyticsLineChart`
- `AnalyticsTooltip`
- `AnalyticsTooltipPoint`
- `DEFAULT_DATA`
- `DEFAULT_GRADIENT`
- `EASE_OUT`
- `PALETTE`
- `dotColor`
- `fmtDate`
- `fmtNum`

## 依赖

- 无额外依赖

## 源码属性定义

### AnalyticsTooltipProps

~~~ts
export interface AnalyticsTooltipProps {
  point: AnalyticsTooltipPoint
  color: string
  px: number
  py: number
  side: "top" | "bottom"
  valueLabel: string
  show: boolean
  /** When true, stacks above pinned/static tooltip cards */
  isHovered?: boolean
}
~~~

### AnalyticsLineChartProps

~~~ts
export interface AnalyticsLineChartProps {
  data?: AnalyticsDataPoint[]
  gradientStops?: AnalyticsGradientStop[]
  dotColors?: string[]
  gridLines?: number
  height?: number
  pinnedIndices?: number[]
  valueLabel?: string
  className?: string
}
~~~

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `data` | `AnalyticsDataPoint[]` | — | 数据点数组 {date, label, value}。 |
| `gradientStops` | `AnalyticsGradientStop[]` | — | 渐变描边的色标。 |
| `dotColors` | `string[]` | — | 按索引覆盖数据点颜色。 |
| `gridLines` | `number` | `5` | 网格线数量。 |
| `height` | `number` | `280` | viewBox 高度。 |
| `pinnedIndices` | `number[]` | — | 常显 tooltip 的索引,默认最后两个点。 |
| `valueLabel` | `string` | `"clicks"` | tooltip 中数值的标签。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。