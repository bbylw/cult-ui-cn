# 悬停视频播放器 (Hover Video Player)

> 悬停即播放的视频播放器,带懒加载、封面、画中画与触屏支持。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/hover-video-player
- 官方文档:https://www.cult-ui.com/docs/components/hover-video-player
- 源码位置:`src/components/ui/hover-video-player.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/hover-video-player
~~~

## 用法

~~~tsx
import { HoverVideoPaddingWrapper, HoverVideoPlayer, HoverVideoPlayerControls } from "@/components/ui/hover-video-player"

export function Example() {
  return (
    <HoverVideoPaddingWrapper>
      <HoverVideoPlayer />
    </HoverVideoPaddingWrapper>
  )
}
~~~

## 导出部件

- `HoverVideoPaddingWrapper`
- `HoverVideoPlayer`
- `HoverVideoPlayerControls`
- `HoverVideoPlayerHoverOverlay`
- `HoverVideoPlayerLoadingOverlay`
- `HoverVideoPlayerPausedOverlay`
- `HoverVideoPlayerPiPButton`
- `HoverVideoPlayerPlayPauseButton`
- `HoverVideoPlayerProgressBar`
- `HoverVideoPlayerVolumeControl`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### HoverVideoPlayerProps

~~~ts
interface HoverVideoPlayerProps {
  videoSrc: string
  thumbnailSrc?: string
  hoverOverlay?: React.ReactNode
  pausedOverlay?: React.ReactNode
  loadingOverlay?: React.ReactNode
  playbackStartDelay?: number
  restartOnPaused?: boolean
  unloadVideoOnPaused?: boolean
  playbackRangeStart?: number
  playbackRangeEnd?: number
  muted?: boolean
  loop?: boolean
  preload?: "auto" | "metadata" | "none"
  className?: string
  style?: React.CSSProperties
  onHoverStart?: () => void
  onHoverEnd?: () => void
  enableControls?: boolean
  cropTop?: number
  cropBottom?: number
  isVimeo?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。