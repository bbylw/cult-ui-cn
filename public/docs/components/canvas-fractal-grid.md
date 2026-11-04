# 画布分形网格 (Canvas Fractal Grid)

> 跟随鼠标的分形点阵画布,带波浪与光晕,适合首屏。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/canvas-fractal-grid
- 官方文档:https://www.cult-ui.com/docs/components/canvas-fractal-grid
- 源码位置:`src/components/ui/canvas-fractal-grid.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/canvas-fractal-grid
~~~

## 用法

~~~tsx
import { CanvasFractalGrid } from "@/components/ui/canvas-fractal-grid"

export function Example() {
  return (
    <CanvasFractalGrid />
  )
}
~~~

## 导出部件

- `CanvasFractalGrid`

## 依赖

- `motion`

## 源码属性定义

### CanvasFractalGridProps

~~~ts
interface CanvasFractalGridProps {
  /** Size of each dot in pixels */
  dotSize?: number
  /** Spacing between dots in pixels */
  dotSpacing?: number
  /** Opacity of dots (0-1) */
  dotOpacity?: number
  /** Duration of the background gradient animation in seconds */
  gradientAnimationDuration?: number
  /** Stiffness of mouse tracking (higher values make it more responsive) */
  mouseTrackingStiffness?: number
  /** Damping of mouse tracking (higher values make it less bouncy) */
  mouseTrackingDamping?: number
  /** Intensity of the wave effect when hovering */
  waveIntensity?: number
  /** Radius of the wave effect in pixels */
  waveRadius?: number
  /** Array of gradient configurations for the background */
  gradients?: GradientType[]
  /** Color of the dots (supports any valid CSS color) */
  dotColor?: string
  /** Color of the dot glow effect (supports any valid CSS color) */
  glowColor?: string
  /** Enable or disable the noise overlay */
  enableNoise?: boolean
  /** Opacity of the noise overlay (0-1) */
  noiseOpacity?: number
  /** Enable or disable the mouse glow effect */
  // …
~~~

### CanvasFractalGridProps

~~~ts
interface CanvasFractalGridProps {
//   /** Size of each dot in pixels */
//   dotSize?: number
//   /** Spacing between dots in pixels */
//   dotSpacing?: number
//   /** Opacity of dots (0-1) */
//   dotOpacity?: number
//   /** Duration of the background gradient animation in seconds */
//   gradientAnimationDuration?: number
//   /** Stiffness of mouse tracking (higher values make it more responsive) */
//   mouseTrackingStiffness?: number
//   /** Damping of mouse tracking (higher values make it less bouncy) */
//   mouseTrackingDamping?: number
//   /** Intensity of the wave effect when hovering */
//   waveIntensity?: number
//   /** Radius of the wave effect in pixels */
//   waveRadius?: number
//   /** Array of gradient configurations for the background */
//   gradients?: Gradient[]
//   /** Color of the dots (supports any valid CSS color) */
//   dotColor?: string
//   /** Color of the dot glow effect (supports any valid CSS color) */
//   glowColor?: string
//   /** Enable or disable the noise overlay */
//   enableNoise?: boolean
//   /** Opacity of the noise overlay (0-1) */
//   noiseOpacity?: number
//   /** Enable or disable the mouse glow effect */
  // …
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。