# 浏览器窗口 (Mock Browser Window)

> 可定制的浏览器窗口样机,支持 Chrome、Safari 与通用样式和侧边栏。

- 分类:样机
- 本站页面:https://cult-ui.ndjp.net/docs/components/mock-browser-window
- 官方文档:https://www.cult-ui.com/docs/components/mock-browser-window
- 源码位置:`src/components/ui/mock-browser-window.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/mock-browser-window
~~~

## 用法

~~~tsx
import { BrowserWindow } from "@/components/ui/mock-browser-window"

export function Example() {
  return (
    <BrowserWindow />
  )
}
~~~

## 导出部件

- `BrowserWindow`

## 依赖

- 无额外依赖

## 源码属性定义

### WindowControlsProps

~~~ts
interface WindowControlsProps {
  variant?: "macos" | "windows" | "chrome" | "safari"
  headerStyle?: "minimal" | "full"
}
~~~

### AddressBarProps

~~~ts
interface AddressBarProps {
  url?: string
  secure?: boolean
  variant?: "chrome" | "safari"
  className?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。