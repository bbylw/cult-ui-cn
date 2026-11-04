import { Preview } from "@/components/site/preview"
import {
  Dock,
  DockCard,
  DockCardInner,
  DockDivider,
} from "@/components/ui/dock"

const DOCK_ICONS = ["🎨", "🧩", "⚡", "🌙", "📦", "🛠️", "✨"] as const

function dockIcon(emoji: string) {
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`
}

export default function DockDemo() {
  return (
    <Preview className="flex-col">
      <p className="text-muted-foreground text-sm">把鼠标移到程序坞上试试</p>
      <Dock className="rounded-2xl border bg-background/80 p-2 shadow-xl backdrop-blur">
        {DOCK_ICONS.map((emoji, i) => (
          <DockCard key={emoji} id={String(i)}>
            <DockCardInner src={dockIcon(emoji)} id={String(i)} />
          </DockCard>
        ))}
        <DockDivider />
        <DockCard id="8">
          <DockCardInner src={dockIcon("🚀")} id="8" />
        </DockCard>
      </Dock>
    </Preview>
  )
}
