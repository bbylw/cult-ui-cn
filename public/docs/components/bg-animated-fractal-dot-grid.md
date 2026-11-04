# 分形点阵背景 (Background Animated Fractal Dot Grid)

> 带性能优化与响应式处理的分形点阵动画背景。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/bg-animated-fractal-dot-grid
- 官方文档:https://www.cult-ui.com/docs/components/bg-animated-fractal-dot-grid
- 源码位置:`src/components/ui/bg-animated-fractal-dot-grid.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/bg-animated-fractal-dot-grid
~~~

## 用法

~~~tsx
import { FractalDotGrid } from "@/components/ui/bg-animated-fractal-dot-grid"

export function Example() {
  return (
    <FractalDotGrid>内容</FractalDotGrid>
  )
}
~~~

## 导出部件

- `FractalDotGrid`

## 依赖

- `motion`

## 源码属性定义

### FractalDotGridProps

~~~ts
interface FractalDotGridProps {
  /** Size of each dot in pixels */
  dotSize?: number
  /** Spacing between dots in pixels */
  dotSpacing?: number
  /** Opacity of dots (0-1) */
  dotOpacity?: number
  /** Intensity of the wave effect when hovering */
  waveIntensity?: number
  /** Radius of the wave effect in pixels */
  waveRadius?: number
  /** Color of the dots (supports any valid CSS color) */
  dotColor?: string
  /** Color of the dot glow effect (supports any valid CSS color) */
  glowColor?: string
  /** Enable or disable the noise overlay */
  enableNoise?: boolean
  /** Opacity of the noise overlay (0-1) */
  noiseOpacity?: number
  /** Enable or disable the mouse glow effect */
  enableMouseGlow?: boolean
  /** Set the initial performance level */
  initialPerformance?: "low" | "medium" | "high"
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。