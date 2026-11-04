# YouTube 播放器 (YouTube Video Player)

> 带自定义控制与动画过渡的 YouTube 播放器。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/youtube-video-player
- 官方文档:https://www.cult-ui.com/docs/components/youtube-video-player
- 源码位置:`src/components/ui/youtube-video-player.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/youtube-video-player
~~~

## 用法

~~~tsx
import { YouTubePlayer, YouTubePlayerControls } from "@/components/ui/youtube-video-player"

export function Example() {
  return (
    <YouTubePlayer>
      <YouTubePlayerControls />
    </YouTubePlayer>
  )
}
~~~

## 导出部件

- `YouTubePlayer`
- `YouTubePlayerControls`

## 依赖

- `motion`
- `lucide-react`

## 源码属性定义

### YouTubePlayerProps

~~~ts
interface YouTubePlayerProps {
  videoId: string
  title?: string
  defaultExpanded?: boolean
  customThumbnail?: string

  // Container & Layout
  className?: string
  containerClassName?: string
  expandedClassName?: string

  // Thumbnail & Media
  thumbnailClassName?: string
  thumbnailImageClassName?: string

  // Play Button
  playButtonClassName?: string
  playIconClassName?: string

  // Title
  titleClassName?: string

  // Controls
  controlsClassName?: string
  expandButtonClassName?: string

  // Backdrop
  backdropClassName?: string
  // …
~~~

### YouTubePlayerControlsProps

~~~ts
interface YouTubePlayerControlsProps {
  videoId: string
  expanded: boolean
  playing: boolean
  isHovered: boolean
  onToggleExpand: () => void
  controlsClassName?: string
  expandButtonClassName?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。