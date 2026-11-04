# 吸顶功能区块 (Feature Sticky Section)

> 滚动吸顶的功能区块,把触发器与内容面板配对并跟踪当前面板。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/feature-sticky-section
- 官方文档:https://www.cult-ui.com/docs/components/feature-sticky-section
- 源码位置:`src/components/ui/feature-sticky-section.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/feature-sticky-section
~~~

## 用法

~~~tsx
import { OSSProject, OSSSection, OSSSectionComponents } from "@/components/ui/feature-sticky-section"

export function Example() {
  return (
    <OSSProject>
      <OSSSection />
    </OSSProject>
  )
}
~~~

## 导出部件

- `OSSProject`
- `OSSSection`
- `OSSSectionComponents`
- `StickySection`
- `defaultOSSSectionProjects`

## 依赖

- `@radix-ui/react-slot`
- `@radix-ui/react-use-controllable-state`

## 源码属性定义

### OSSSectionProps

~~~ts
export interface OSSSectionProps {
  /** Project items to display. Defaults to Vite, Vitest, Rolldown, Oxc. */
  projects?: OSSProject[]
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。