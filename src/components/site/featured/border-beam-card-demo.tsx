import { Preview } from "@/components/site/preview"
import {
  BorderBeamCard,
  BorderBeamCardContent,
  BorderBeamCardDescription,
  BorderBeamCardHeader,
  BorderBeamCardTitle,
} from "@/components/ui/border-beam-card"

export default function BorderBeamCardDemo() {
  return (
    <Preview>
      <BorderBeamCard className="w-sm">
        <BorderBeamCardHeader>
          <BorderBeamCardTitle>流光边框卡片</BorderBeamCardTitle>
          <BorderBeamCardDescription>
            一道光束沿卡片边缘循环流动,适合功能亮点与定价卡。
          </BorderBeamCardDescription>
        </BorderBeamCardHeader>
        <BorderBeamCardContent>
          <p className="text-muted-foreground text-sm">
            基于 shadcn Card 封装,API 与 Card 完全一致。
          </p>
        </BorderBeamCardContent>
      </BorderBeamCard>
    </Preview>
  )
}
