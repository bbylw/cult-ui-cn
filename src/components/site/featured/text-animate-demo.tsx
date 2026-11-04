import { Preview } from "@/components/site/preview"
import TextAnimate from "@/components/ui/text-animate"

export default function TextAnimateDemo() {
  return (
    <Preview className="flex-col gap-4">
      <TextAnimate
        text="让 shadcn/ui 动起来"
        type="rollIn"
        className="text-3xl font-bold tracking-tight"
      />
      <TextAnimate
        text="Free · Open Source · Animated"
        type="calmInUp"
        delay={0.6}
        className="text-muted-foreground text-sm"
      />
    </Preview>
  )
}
