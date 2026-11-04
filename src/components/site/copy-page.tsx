import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

/** 复制当前组件页的 Markdown 版本(构建时生成的静态 .md 文件)。 */
export function CopyPageButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const response = await fetch(`/docs/components/${slug}.md`)
      if (!response.ok) throw new Error("Markdown 尚未生成")
      const markdown = await response.text()
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      toast.success("已复制本页 Markdown")
      window.setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "复制失败")
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "已复制" : "复制 Markdown"}
    </Button>
  )
}
