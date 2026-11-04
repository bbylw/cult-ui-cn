# LED 灯板 (Lightboard)

> 由灯点组成的滚动 LED 字幕板,含七段字体与手绘。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/lightboard
- 官方文档:https://www.cult-ui.com/docs/components/lightboard
- 源码位置:`src/components/ui/lightboard.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/lightboard
~~~

## 用法

~~~tsx
import { LightBoard } from "@/components/ui/lightboard"

export function Example() {
  return (
    <LightBoard />
  )
}
~~~

## 导出部件

- `LightBoard`
- `PatternCell`

## 依赖

- 无额外依赖

## 源码属性定义

### LightBoardProps

~~~ts
interface LightBoardProps {
  gap?: number
  rows?: number
  lightSize?: number
  updateInterval?: number
  text: string
  font?: "default" | "7segment"
  colors?: Partial<LightBoardColors>
  disableDrawing?: boolean
  controlledDrawState?: PatternCell
  onDrawStateChange?: (newState: PatternCell) => void
  controlledHoverState?: boolean
  onHoverStateChange?: (isHovered: boolean) => void
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。