# Family 浮动按钮 (Family Button)

> 从加号展开成内容面板的浮动按钮,灵感来自 Family 应用。

- 分类:按钮
- 本站页面:https://cult-ui.ndjp.net/docs/components/family-button
- 官方文档:https://www.cult-ui.com/docs/components/family-button
- 源码位置:`src/components/ui/family-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/family-button
~~~

## 用法

~~~tsx
import { FamilyButton } from "@/components/ui/family-button"

export function Example() {
  return (
    <FamilyButton>内容</FamilyButton>
  )
}
~~~

## 导出部件

- `FamilyButton`

## 依赖

- `lucide-react`
- `motion`

## 源码属性定义

### FamilyButtonProps

~~~ts
interface FamilyButtonProps {
  children: React.ReactNode
}
~~~

### FamilyButtonContainerProps

~~~ts
interface FamilyButtonContainerProps {
  isExpanded: boolean
  toggleExpand: () => void
  children: ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。