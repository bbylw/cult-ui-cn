# Halo 选择器 (Halo Select)

> 组合式动画下拉选择器,渐变边框、磨砂填充与交错标签。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-select
- 官方文档:https://www.cult-ui.com/docs/components/halo-select
- 源码位置:`src/components/ui/halo-select.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-select
~~~

## 用法

~~~tsx
import { HaloSelect, HaloSelectContent, HaloSelectGroup } from "@/components/ui/halo-select"

export function Example() {
  return (
    <HaloSelect>
      <HaloSelectContent />
    </HaloSelect>
  )
}
~~~

## 导出部件

- `HaloSelect`
- `HaloSelectContent`
- `HaloSelectGroup`
- `HaloSelectItem`
- `HaloSelectLabel`
- `HaloSelectScrollDownButton`
- `HaloSelectScrollUpButton`
- `HaloSelectSeparator`
- `HaloSelectTrailingIndicator`
- `HaloSelectTrigger`
- `HaloSelectValue`
- `PolishedSelectItem`

## 依赖

- `@base-ui/react`
- `lucide-react`
- `motion`

## 源码属性定义

### BorderGlowConfig

~~~ts
interface BorderGlowConfig {
  opacityIdle: number
  primaryBg: string
  secondaryBg: string
  tertiaryBg: string
  primaryLeft: string[]
  secondaryLeft: string[]
  tertiaryLeft: string[]
  durationMain: number
  durationSec: number
  durationTer: number
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。