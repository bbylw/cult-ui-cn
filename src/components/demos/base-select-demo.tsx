"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/base-select"

export default function BaseSelectDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <label className="text-muted-foreground text-sm" htmlFor="base-select-demo">
        部署环境
      </label>
      <Select defaultValue="prod">
        <SelectTrigger id="base-select-demo" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>环境</SelectLabel>
            <SelectItem value="prod">生产环境</SelectItem>
            <SelectItem value="staging">预发布环境</SelectItem>
            <SelectItem value="dev">开发环境</SelectItem>
            <SelectItem value="preview" disabled>
              预览环境(未开通)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-muted-foreground text-xs">
        基于 Base UI 的无样式选择器,键盘与触摸交互由组件内部处理。
      </p>
    </div>
  )
}
