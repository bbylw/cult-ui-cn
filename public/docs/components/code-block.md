# 代码块 (Code Block)

> 带复制按钮与可切换标签页的代码块组件,内置轻量语法着色,适合文档与安装说明。

- 分类:工具
- 本站页面:https://cult-ui.ndjp.net/docs/components/code-block
- 官方文档:https://www.cult-ui.com/docs/components/code-block
- 源码位置:`src/components/ui/code-block.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/code-block
~~~

## 用法

~~~tsx
import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock
  tabs={[
    { label: "npm", code: "npx shadcn add @cult-ui/globe" },
    { label: "bun", code: "bunx shadcn add @cult-ui/globe" },
  ]}
/>

// 或单段代码
<CodeBlock code="bun run dev" language="bash" />
~~~

## 导出部件

- `CodeBlock`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### CodeBlockProps

~~~ts
interface CodeBlockProps {
  tabs?: CodeTab[]
  code?: string
  language?: string
  className?: string
}
~~~

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `tabs` | `CodeTab[]` | — | 标签页数组 {label, code, language?}。 |
| `code` | `string` | — | 单段代码内容(与 tabs 二选一)。 |
| `language` | `string` | `"bash"` | 默认语言。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。