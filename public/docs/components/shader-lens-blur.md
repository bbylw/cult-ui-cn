# 镜头模糊 (Shader Lens Blur)

> 带镜头模糊与鼠标交互的 WebGL 着色器组件。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/shader-lens-blur
- 官方文档:https://www.cult-ui.com/docs/components/shader-lens-blur
- 源码位置:`src/components/ui/shader-lens-blur.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/shader-lens-blur
~~~

## 用法

~~~tsx
import { ShaderLensBlur } from "@/components/ui/shader-lens-blur"

export function Example() {
  return (
    <ShaderLensBlur />
  )
}
~~~

## 导出部件

- `ShaderLensBlur`
- `configAtom`

## 依赖

- `motion`
- `three`
- `jotai`
- `next-themes`

## 源码属性定义

### ShaderConfig

~~~ts
interface ShaderConfig {
  variation: number
  color1: string
  color2: string
  color3: string
  color4: string
  enableHover: boolean
  invertMouse: boolean
  width: string
  height: string
}
~~~

### ShaderConfig

~~~ts
interface ShaderConfig {
//   variation: number
//   color1: string
//   color2: string
//   color3: string
//   color4: string
//   enableHover: boolean
//   invertMouse: boolean
//   width: string
//   height: string
// }
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。