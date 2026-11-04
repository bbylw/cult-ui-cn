# 渐变背景 (Background Animated Gradient)

> 颜色过渡可自定义的动画渐变背景。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/bg-animated-gradient
- 官方文档:https://www.cult-ui.com/docs/components/bg-animated-gradient
- 源码位置:`src/components/ui/bg-animated-gradient.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/bg-animated-gradient
~~~

## 用法

~~~tsx
import { GradientAnimation } from "@/components/ui/bg-animated-gradient"

export function Example() {
  return (
    <GradientAnimation />
  )
}
~~~

## 导出部件

- `GradientAnimation`

## 依赖

- `motion`

## 源码属性定义

### GradientAnimationProps

~~~ts
interface GradientAnimationProps {
  gradients: GradientType[]
  animationDuration: number
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。