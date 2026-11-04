# 加载轮播 (Loading Carousel)

> 基于 Embla 的自动播放提示轮播,适合加载态展示。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/loading-carousel
- 官方文档:https://www.cult-ui.com/docs/components/loading-carousel
- 源码位置:`src/components/ui/loading-carousel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/loading-carousel
~~~

## 用法

~~~tsx
import { LoadingCarousel } from "@/components/ui/loading-carousel"

export function Example() {
  return (
    <LoadingCarousel>内容</LoadingCarousel>
  )
}
~~~

## 导出部件

- `LoadingCarousel`

## 依赖

- `embla-carousel-autoplay`
- `lucide-react`
- `motion`

## 源码属性定义

### LoadingCarouselProps

~~~ts
interface LoadingCarouselProps {
  tips?: Tip[]
  className?: string
  autoplayInterval?: number
  showNavigation?: boolean
  showIndicators?: boolean
  showProgress?: boolean
  aspectRatio?: "video" | "square" | "wide"
  textPosition?: "top" | "bottom"
  onTipChange?: (index: number) => void
  backgroundTips?: boolean
  backgroundGradient?: boolean
  shuffleTips?: boolean
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。