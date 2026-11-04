# 滚动数字 (Rolling Number)

> 数字滚动计数,可自定义格式化。

- 分类:数据展示
- 本站页面:https://cult-ui.ndjp.net/docs/components/rolling-number
- 官方文档:https://www.cult-ui.com/docs/components/rolling-number
- 源码位置:`src/components/ui/rolling-number.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/rolling-number
~~~

## 用法

~~~tsx
import { RollingNumber } from "@/components/ui/rolling-number"

export function Example() {
  return (
    <RollingNumber />
  )
}
~~~

## 导出部件

- `RollingNumber`

## 依赖

- `motion`

## 源码属性定义

### RollingNumberProps

~~~ts
interface RollingNumberProps {
  value: number
  mass?: number
  stiffness?: number
  damping?: number
  precision?: number
  format?: (value: number) => string
  onAnimationStart?: () => void
  onAnimationComplete?: () => void
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。