import { Preview } from "@/components/site/preview"
import { CopyButton } from "@/components/ui/copy-button"

export default function CopyButtonDemo() {
  return (
    <Preview className="flex-col gap-4">
      <p className="text-muted-foreground text-sm">点击右侧按钮复制命令:</p>
      <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 font-mono text-sm">
        <span>npx shadcn@latest add @cult-ui/globe</span>
        <CopyButton
          value="npx shadcn@latest add @cult-ui/globe"
          tooltip="复制安装命令"
        />
      </div>
    </Preview>
  )
}
