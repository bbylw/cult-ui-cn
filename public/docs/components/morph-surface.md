# 形变面板 (Morph Surface)

> 可平滑形变、尺寸与内容可配置的面板。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/morph-surface
- 官方文档:https://www.cult-ui.com/docs/components/morph-surface
- 源码位置:`src/components/ui/morph-surface.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/morph-surface
~~~

## 用法

~~~tsx
import { MorphSurface } from "@/components/ui/morph-surface"

export function Example() {
  return (
    <MorphSurface>内容</MorphSurface>
  )
}
~~~

## 导出部件

- `MorphSurface`

## 依赖

- `motion`

## 源码属性定义

### SpringConfig

~~~ts
type SpringConfig = {
  type: "spring"
  stiffness: number
  damping: number
  mass?: number
  delay?: number
}
~~~

### TriggerProps

~~~ts
interface TriggerProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。