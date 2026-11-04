# Halo 表单字段 (Halo Field)

> 为 Halo Input 与 Textarea 提供的标签、描述与错误提示布局。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-field
- 官方文档:https://www.cult-ui.com/docs/components/halo-field
- 源码位置:`src/components/ui/halo-field.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-field
~~~

## 用法

~~~tsx
import { HaloField, HaloFieldContent, HaloFieldDescription } from "@/components/ui/halo-field"

export function Example() {
  return (
    <HaloField>
      <HaloFieldContent />
    </HaloField>
  )
}
~~~

## 导出部件

- `HaloField`
- `HaloFieldContent`
- `HaloFieldDescription`
- `HaloFieldError`
- `HaloFieldLabel`
- `HaloFieldTitle`

## 依赖

- 无额外依赖
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。