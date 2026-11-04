"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/base-tooltip"

export default function BaseTooltipDemo() {
  return (
    <TooltipProvider delay={150}>
      <div className="flex flex-col items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">悬停查看提示</Button>
          </TooltipTrigger>
          <TooltipContent>基于 Base UI 定位器的提示气泡</TooltipContent>
        </Tooltip>
        <p className="text-muted-foreground text-xs">
          支持键盘聚焦与触摸长按,位置随可用空间自动翻转。
        </p>
      </div>
    </TooltipProvider>
  )
}
