# Halo 分段控件 (Halo Segmented)

> 磨砂轨道加弹簧滑块的分段控件。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-segmented
- 官方文档:https://www.cult-ui.com/docs/components/halo-segmented
- 源码位置:`src/components/ui/halo-segmented.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-segmented
~~~

## 用法

~~~tsx
import { HaloSegmented } from "@/components/ui/halo-segmented"

export function Example() {
  return (
    <HaloSegmented />
  )
}
~~~

## 导出部件

- `HaloSegmented`
- `HaloSegmentedItem`

## 依赖

- `@base-ui/react`
- `motion`

## 源码属性定义

### HaloSegmentedProps

~~~ts
export interface HaloSegmentedProps {
  items: HaloSegmentedItem[]
  /** Selected value; omit for uncontrolled usage with `defaultValue`. */
  value?: string
  defaultValue?: string
  onValueChange?: (next: string) => void
  className?: string
  /** Frosted track + backdrop blur (matches card/button translucent mode). */
  translucent?: boolean
  disabled?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。