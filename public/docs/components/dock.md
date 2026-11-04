# 程序坞 (Dock)

> macOS 风格的底部程序坞,鼠标靠近时图标放大、点击弹出动效,适合作品集与工具栏场景。

- 分类:导航与标签页
- 本站页面:https://cult-ui.ndjp.net/docs/components/dock
- 官方文档:https://www.cult-ui.com/docs/components/dock
- 源码位置:`src/components/ui/dock.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/dock
~~~

## 用法

~~~tsx
import { Dock, DockCard, DockCardInner, DockDivider } from "@/components/ui/dock"

<Dock className="fixed bottom-4 left-1/2 -translate-x-1/2">
  <DockCard id="1">
    <DockCardInner src="/icons/figma.svg" id="1" />
  </DockCard>
  <DockDivider />
</Dock>
~~~

## 导出部件

- `Dock`
- `DockCard`
- `DockCardInner`
- `DockDivider`
- `useDock`
- `useMousePosition`

## 依赖

- `motion`

## 源码属性定义

### DockProps

~~~ts
interface DockProps {
  className?: string
  children: ReactNode // React children to be rendered within the dock
}
~~~

### DockCardInnerProps

~~~ts
interface DockCardInnerProps {
  src: string // Source URL for the image
  id: string // Unique identifier for the card
  children?: ReactNode // Optional children for the card
}
~~~

## 备注

图标通过 DockCardInner 的 src 传入,任意图片皆可。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `Dock` | `className, children` | — | 根容器,管理悬停与缩放状态。 |
| `DockCard` | `children, id` | — | 单个图标卡,点击触发布局动画。 |
| `DockCardInner` | `src, id, children` | — | 图标图片(必须有 src)。 |
| `DockDivider` | `—` | — | 分隔线。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。