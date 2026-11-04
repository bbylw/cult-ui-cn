# Halo 搜索框 (Halo Search)

> 带流动渐变边框、交错占位符、清除与加载态的搜索框。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-search
- 官方文档:https://www.cult-ui.com/docs/components/halo-search
- 源码位置:`src/components/ui/halo-search.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-search
~~~

## 用法

~~~tsx
import { AiBlobWarpAvatar, DeletedTextBlurReveal, HaloSearchInput } from "@/components/ui/halo-search"

export function Example() {
  return (
    <AiBlobWarpAvatar>
      <DeletedTextBlurReveal />
    </AiBlobWarpAvatar>
  )
}
~~~

## 导出部件

- `AiBlobWarpAvatar`
- `DeletedTextBlurReveal`
- `HaloSearchInput`

## 依赖

- `@paper-design/shaders-react`
- `motion`

## 源码属性定义

### DeletedTextBlurRevealProps

~~~ts
interface DeletedTextBlurRevealProps {
  text: string
  animatedIndexes?: number[]
  reduceMotion?: boolean
  className?: string
  textClassName?: string
  clipDurationMs?: number
  blurPx?: number
  saturatePercent?: number
  /** Optional diagonal blur “wiper” (disabled in the search field for a simpler exit). */
  showSweep?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。