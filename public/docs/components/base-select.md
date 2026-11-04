# Base UI 选择器 (Base Select)

> Halo Select 底层的 Base UI 选择器原语(Select、Item、Group 等)。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/base-select
- 官方文档:https://www.cult-ui.com/docs/components/base-select
- 源码位置:`src/components/ui/base-select.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/base-select
~~~

## 用法

~~~tsx
import { Select, SelectContent, SelectGroup } from "@/components/ui/base-select"

export function Example() {
  return (
    <Select>
      <SelectContent />
    </Select>
  )
}
~~~

## 导出部件

- `Select`
- `SelectContent`
- `SelectGroup`
- `SelectItem`
- `SelectLabel`
- `SelectScrollDownButton`
- `SelectScrollUpButton`
- `SelectSeparator`
- `SelectTrigger`
- `SelectValue`

## 依赖

- `@base-ui/react`
- `@hugeicons/react`
- `@hugeicons/core-free-icons`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。