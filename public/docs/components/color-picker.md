# 颜色选择器 (Color Picker)

> HLS 滑杆、HEX 输入与预设色板组成的取色器。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/color-picker
- 官方文档:https://www.cult-ui.com/docs/components/color-picker
- 源码位置:`src/components/ui/color-picker.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/color-picker
~~~

## 用法

~~~tsx
import { ColorPicker } from "@/components/ui/color-picker"

export function Example() {
  return (
    <ColorPicker />
  )
}
~~~

## 导出部件

- `ColorPicker`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### ColorPicker

~~~ts
export function ColorPicker({
color,
  onChange,
}: {
  color: string
  onChange: (color: string)
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。