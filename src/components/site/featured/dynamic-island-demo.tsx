import { Rocket } from "lucide-react"
import { Preview } from "@/components/site/preview"
import {
  DynamicContainer,
  DynamicDescription,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicTitle,
  useScheduledAnimations,
} from "@/components/ui/dynamic-island"

function IslandDemo() {
  useScheduledAnimations([
    { size: "compact", delay: 900 },
    { size: "large", delay: 2200 },
    { size: "tall", delay: 3600 },
    { size: "long", delay: 5000 },
    { size: "medium", delay: 6600 },
  ])

  return (
    <DynamicContainer className="flex h-full w-full items-center justify-center">
      <DynamicTitle className="flex items-center gap-2 text-base font-semibold text-white">
        <Rocket className="h-4 w-4 fill-orange-400 text-orange-400" />
        Cult UI
      </DynamicTitle>
      <DynamicDescription className="text-xs text-white/60">
        灵动岛 · 14 种尺寸预设
      </DynamicDescription>
    </DynamicContainer>
  )
}

export default function DynamicIslandDemo() {
  return (
    <Preview className="min-h-[300px]">
      <DynamicIslandProvider>
        <DynamicIsland id="landing-island">
          <IslandDemo />
        </DynamicIsland>
      </DynamicIslandProvider>
    </Preview>
  )
}
