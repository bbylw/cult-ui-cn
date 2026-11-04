# Halo 切换组 (Halo Toggle Group)

> 单选切换组,磨砂轨道加弹簧滑块,用于视图与对齐切换。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-toggle-group
- 官方文档:https://www.cult-ui.com/docs/components/halo-toggle-group
- 源码位置:`src/components/ui/halo-toggle-group.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-toggle-group
~~~

## 用法

~~~tsx
import { HaloToggleGroup, HaloToggleGroupItem } from "@/components/ui/halo-toggle-group"

export function Example() {
  return (
    <HaloToggleGroup>
      <HaloToggleGroupItem />
    </HaloToggleGroup>
  )
}
~~~

## 导出部件

- `HaloToggleGroup`
- `HaloToggleGroupItem`

## 依赖

- `@base-ui/react`
- `motion`

## 源码属性定义

### HaloToggleGroupProps

~~~ts
export interface HaloToggleGroupProps {
  items: HaloToggleGroupItem[]
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