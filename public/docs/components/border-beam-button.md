# 流光边框按钮 (Border Beam Button)

> shadcn 按钮外包一圈流动光束,提供文字与图标两种变体。

- 分类:按钮
- 本站页面:https://cult-ui.ndjp.net/docs/components/border-beam-button
- 官方文档:https://www.cult-ui.com/docs/components/border-beam-button
- 源码位置:`src/components/ui/border-beam-button.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/border-beam-button
~~~

## 用法

~~~tsx
import { BorderBeamButton, BorderBeamIconButton } from "@/components/ui/border-beam-button"

export function Example() {
  return (
    <BorderBeamButton>
      <BorderBeamIconButton />
    </BorderBeamButton>
  )
}
~~~

## 导出部件

- `BorderBeamButton`
- `BorderBeamIconButton`

## 依赖

- 无额外依赖
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。