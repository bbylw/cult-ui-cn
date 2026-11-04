import { Preview } from "@/components/site/preview"
import {
  FoldedCard,
  FoldedCardBadge,
  FoldedCardBorder,
  FoldedCardDescription,
  FoldedCardFold,
  FoldedCardFooter,
  FoldedCardGrid,
  FoldedCardHeading,
  FoldedCardLink,
  FoldedCardPreview,
  FoldedCardTitle,
} from "@/components/ui/folded-card"

export default function FoldedCardDemo() {
  return (
    <Preview>
      <FoldedCard className="w-xs">
        <FoldedCardFold />
        <FoldedCardLink href="/docs/components/folded-card">
          <FoldedCardBorder />
          <FoldedCardPreview>
            <FoldedCardGrid rows={4} columns={6} />
          </FoldedCardPreview>
          <FoldedCardFooter>
            <FoldedCardHeading>
              <FoldedCardTitle>折角卡片</FoldedCardTitle>
              <FoldedCardBadge>新</FoldedCardBadge>
            </FoldedCardHeading>
            <FoldedCardDescription>
              右上角带真实翻折效果的卡片。
            </FoldedCardDescription>
          </FoldedCardFooter>
        </FoldedCardLink>
      </FoldedCard>
    </Preview>
  )
}
