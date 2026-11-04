# 折角卡片 (Folded Card)

> 可组合的折角卡片组件,右上角带真实翻折效果,适合模板集市、博客索引、资源目录等场景。

- 分类:卡片
- 本站页面:https://cult-ui.ndjp.net/docs/components/folded-card
- 官方文档:https://www.cult-ui.com/docs/components/folded-card
- 源码位置:`src/components/ui/folded-card.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/folded-card
~~~

## 用法

~~~tsx
import {
  FoldedCard, FoldedCardFold, FoldedCardLink, FoldedCardBorder,
  FoldedCardPreview, FoldedCardGrid, FoldedCardFooter,
  FoldedCardHeading, FoldedCardTitle, FoldedCardBadge,
  FoldedCardDescription,
} from "@/components/ui/folded-card"

<FoldedCard>
  <FoldedCardFold />
  <FoldedCardLink href="/docs/components/folded-card">
    <FoldedCardBorder />
    <FoldedCardPreview>
      <FoldedCardGrid />
    </FoldedCardPreview>
    <FoldedCardFooter>
      <FoldedCardHeading>
        <FoldedCardTitle>折角卡片</FoldedCardTitle>
        <FoldedCardBadge>新</FoldedCardBadge>
      </FoldedCardHeading>
      <FoldedCardDescription>右上角带折角的卡片。</FoldedCardDescription>
    </FoldedCardFooter>
  </FoldedCardLink>
</FoldedCard>
~~~

## 导出部件

- `ChatTail`
- `FoldedCard`
- `FoldedCardBadge`
- `FoldedCardBorder`
- `FoldedCardDescription`
- `FoldedCardFold`
- `FoldedCardFooter`
- `FoldedCardGrid`
- `FoldedCardHeading`
- `FoldedCardLink`
- `FoldedCardPreview`
- `FoldedCardTitle`

## 依赖

- 无额外依赖
## 备注

原组件基于 Next.js Link,本站已将其适配为标准 <a> 标签,可在 Vite 中直接使用。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `FoldedCard` | `div props` | — | 根容器,默认 max-w-sm 并应用折角裁剪路径。 |
| `FoldedCardFold` | `div props` | — | 右上角 40×40px 的翻折角。 |
| `FoldedCardLink` | `a props` | — | 链接包装器(Vite 环境渲染为 <a>)。 |
| `FoldedCardPreview` | `div props` | — | 预览区,默认高 228px。 |
| `FoldedCardGrid` | `rows?, columns?` | — | 装饰网格,默认 4×4。 |
| `FoldedCardTitle` | `h3 props` | — | 卡片标题。 |
| `FoldedCardBadge` | `span props` | — | 小徽章。 |
| `FoldedCardDescription` | `p props` | — | 描述,默认 line-clamp-3。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。