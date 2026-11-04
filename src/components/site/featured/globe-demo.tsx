import { Preview } from "@/components/site/preview"
import { DefaultShowcaseGlobe } from "@/components/ui/globe"

export default function GlobeDemo() {
  return (
    <Preview className="min-h-[280px] bg-muted/20 sm:min-h-[340px] dark:bg-transparent">
      <DefaultShowcaseGlobe
        globeSize={300}
        title="CULT UI"
        orbitPhrase="150+ ANIMATED COMPONENTS · "
      />
    </Preview>
  )
}
