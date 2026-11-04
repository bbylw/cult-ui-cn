import { OG_IMAGE } from "@/lib/docs-data"
import { Preview } from "@/components/site/preview"
import { MacScreen } from "@/components/ui/mac-screen"

export default function MacScreenDemo() {
  return (
    <Preview className="min-h-[300px]">
      <MacScreen gifUrl={OG_IMAGE} alt="Cult UI 首屏截图" />
    </Preview>
  )
}
