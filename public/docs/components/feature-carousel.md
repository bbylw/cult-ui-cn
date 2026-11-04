# 功能轮播 (Feature Carousel)

> 左右并排截图的分步功能轮播,适合落地页与产品导览。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/feature-carousel
- 官方文档:https://www.cult-ui.com/docs/components/feature-carousel
- 源码位置:`src/components/ui/feature-carousel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/feature-carousel
~~~

## 用法

~~~tsx
import { FeatureCarousel } from "@/components/ui/feature-carousel"

export function Example() {
  return (
    <FeatureCarousel>内容</FeatureCarousel>
  )
}
~~~

## 导出部件

- `FeatureCarousel`

## 依赖

- `motion`
- `clsx`
- `react-wrap-balancer`

## 源码属性定义

### CardProps

~~~ts
interface CardProps {
  title: string
  description: string
  bgClass?: string
}
~~~

### StepImageProps

~~~ts
interface StepImageProps {
  src: StaticImageData | string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。