import { OG_IMAGE } from "@/lib/docs-data"
import { Preview } from "@/components/site/preview"
import { FlutedGlass } from "@/components/ui/fluted-glass"

export default function FlutedGlassDemo() {
  return (
    <Preview className="min-h-[300px] w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border">
        <FlutedGlass
          className="absolute inset-0 size-full"
          image={OG_IMAGE}
          width={1280}
          height={720}
        />
      </div>
    </Preview>
  )
}
