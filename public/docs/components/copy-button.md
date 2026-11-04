# 复制按钮 (Copy Button)

> 复制到剪贴板按钮,复制成功后图标切换为对勾并显示提示,提供 inline 与 overlay 两种布局。

- 分类:工具
- 本站页面:https://cult-ui.ndjp.net/docs/components/copy-button
- 官方文档:https://www.cult-ui.com/docs/components/copy-button
- 源码位置:`src/components/ui/copy-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/copy-button
~~~

## 用法

~~~tsx
import { CopyButton } from "@/components/ui/copy-button"

<CopyButton value="npx shadcn@latest add @cult-ui/globe" tooltip="复制安装命令" />
~~~

## 导出部件

- `CopyButton`
- `copyToClipboardWithMeta`

## 依赖

- `lucide-react`
- `motion`
## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string` | — | 要复制的文本。 |
| `layout` | `"inline" \| "overlay"` | `"inline"` | 布局模式。 |
| `tooltip` | `string` | — | 提示文字。 |
| `variant` | `Button variant` | `"ghost"` | 按钮样式变体。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。