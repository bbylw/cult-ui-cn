# 文件图标 (File Icons)

> npm、pnpm、Yarn、React、Tailwind 等文件类型与工具图标集。

- 分类:工具
- 本站页面:https://cult-ui.ndjp.net/docs/components/file-icons
- 官方文档:https://www.cult-ui.com/docs/components/file-icons
- 源码位置:`src/components/ui/file-icons.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/file-icons
~~~

## 用法

~~~tsx
import { Icons, getIconForLanguageExtension } from "@/components/ui/file-icons"

export function Example() {
  return (
    <Icons>
      <getIconForLanguageExtension />
    </Icons>
  )
}
~~~

## 导出部件

- `Icons`
- `getIconForLanguageExtension`

## 依赖

- `lucide-react`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。