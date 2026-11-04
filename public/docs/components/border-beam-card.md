# 流光边框卡片 (Border Beam Card)

> 带有一道沿边缘循环流动光束的卡片组件,基于 shadcn Card 封装,常用于功能亮点展示与定价卡。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/border-beam-card
- 官方文档:https://www.cult-ui.com/docs/components/border-beam-card
- 源码位置:`src/components/ui/border-beam-card.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/border-beam-card
~~~

## 用法

~~~tsx
import {
  BorderBeamCard,
  BorderBeamCardHeader,
  BorderBeamCardTitle,
  BorderBeamCardDescription,
  BorderBeamCardContent,
} from "@/components/ui/border-beam-card"

<BorderBeamCard className="w-sm">
  <BorderBeamCardHeader>
    <BorderBeamCardTitle>流光边框</BorderBeamCardTitle>
    <BorderBeamCardDescription>一道光束沿卡片边缘循环流动。</BorderBeamCardDescription>
  </BorderBeamCardHeader>
  <BorderBeamCardContent>内容区</BorderBeamCardContent>
</BorderBeamCard>
~~~

## 导出部件

- `BorderBeamCard`
- `BorderBeamCardAction`
- `BorderBeamCardContent`
- `BorderBeamCardDescription`
- `BorderBeamCardFooter`
- `BorderBeamCardHeader`
- `BorderBeamCardTitle`

## 依赖

- 无额外依赖
## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | 卡片内容。 |
| `size` | `"default" \| "sm"` | `"default"` | 卡片布局密度,与 shadcn Card 的 size 一致。 |
| `beamSize` | `"sm" \| "md" \| "line"` | `"md"` | 光束粗细预设。 |
| `cardClassName` | `string` | — | 合并到内部 Card 的类名。 |
| `theme` | `"auto" \| ...` | `"auto"` | 光束配色主题,auto 跟随明暗模式。 |
| `borderRadius` | `string \| number` | — | 覆盖圆角。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。