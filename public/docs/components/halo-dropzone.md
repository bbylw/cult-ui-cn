# Halo 拖放上传 (Halo Dropzone)

> 带动画虚线边框与文件类型图标的拖放上传区,支持键盘操作。

- 分类:表单与输入
- 本站页面:https://cult-ui.ndjp.net/docs/components/halo-dropzone
- 官方文档:https://www.cult-ui.com/docs/components/halo-dropzone
- 源码位置:`src/components/ui/halo-dropzone.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/halo-dropzone
~~~

## 用法

~~~tsx
import { DropzoneFileTypeGlyph, DropzoneUploadFileList, DropzoneUploadFileRow } from "@/components/ui/halo-dropzone"

export function Example() {
  return (
    <DropzoneFileTypeGlyph>
      <DropzoneUploadFileList />
    </DropzoneFileTypeGlyph>
  )
}
~~~

## 导出部件

- `DropzoneFileTypeGlyph`
- `DropzoneUploadFileList`
- `DropzoneUploadFileRow`
- `FilePlaceholderKind`
- `FileTypePlaceholder`
- `HaloDropzone`
- `QueuedFile`
- `fileKey`
- `formatFileBytes`
- `inferPlaceholderKind`

## 依赖

- `lucide-react`
- `motion`

## 源码属性定义

### DropzoneBodyProps

~~~ts
interface DropzoneBodyProps {
  cf: ReturnType<typeof crossfade>
  cfTransition: ReturnType<typeof crossfadeTransition>
  disabled: boolean
  emptyLabel: string
  formatHint: string | null
  idleIcon?: ReactNode
  imageObjectUrls: Record<string, string>
  reduceMotion: boolean
  showSuccess: boolean
  showSuccessThumbnails: boolean
  successLabel: string
  uploadedFiles: File[]
}
~~~

### HaloDropzoneProps

~~~ts
export interface HaloDropzoneProps {
  className?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  /** Frosted glass fill (matches composer translucent mode). */
  translucent?: boolean
  /** Called after files are chosen via drop or picker. */
  onFiles?: (files: File[]) => void
  /**
   * Clear the success state after this many ms. `0` keeps success until the next
   * drop or until the user picks again.
   */
  successResetMs?: number
  /** Primary line in the idle slot. */
  emptyLabel?: string
  /** Line under the filename in the success slot. */
  successLabel?: string
  /** Optional icon override for the idle slot (defaults to upload). */
  idleIcon?: ReactNode
  /** Secondary line under the title; set `null` to hide. */
  formatHint?: string | null
  /**
   * When the dropzone shows success, render thumbnail previews inside the zone.
   * Set `false` if you show file details (e.g. upload rows) below the dropzone.
   */
  showSuccessThumbnails?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。