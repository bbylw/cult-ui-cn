# iPhone 17 Pro 样机 (Apple iPhone 17 Pro Max)

> 带灵动岛、状态栏与四种边框配色的 iPhone 17 Pro 外壳。

- 分类:样机
- 本站页面:https://cult-ui.ndjp.net/docs/components/apple-iphone-17-pro
- 官方文档:https://www.cult-ui.com/docs/components/apple-iphone-17-pro
- 源码位置:`src/components/ui/apple-iphone-17-pro.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/apple-iphone-17-pro
~~~

## 用法

~~~tsx
import { DynamicIslandSize, IPhone17ProMax } from "@/components/ui/apple-iphone-17-pro"

export function Example() {
  return (
    <DynamicIslandSize>
      <IPhone17ProMax />
    </DynamicIslandSize>
  )
}
~~~

## 导出部件

- `DynamicIslandSize`
- `IPhone17ProMax`

## 依赖

- `lucide-react`
- `motion`

## 源码属性定义

### IPhoneProps

~~~ts
export interface IPhoneProps {
  /** Content to display on the screen */
  children?: ReactNode
  /** Dynamic Island size preset */
  dynamicIslandSize?: DynamicIslandSize
  /** Content to display inside the Dynamic Island when expanded */
  dynamicIslandContent?: ReactNode
  /** Frame color variant */
  frameColor?: "graphite" | "silver" | "gold" | "blue"
  /** Show status bar */
  showStatusBar?: boolean
  /** Show home indicator */
  showHomeIndicator?: boolean
  /** Custom time to display */
  time?: string
  /** Battery level (0-100) */
  batteryLevel?: number
  /** Signal strength (0-4) */
  signalStrength?: number
  /** Callback when Dynamic Island is tapped */
  onDynamicIslandTap?: () => void
  /** Callback when screen is tapped */
  onScreenTap?: () => void
  /** Custom className for the container */
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。