# Logo 轮播 (Logo Carousel)

> 按列交错展示品牌 SVG 的 Logo 轮播。

- 分类:展示区块
- 本站页面:https://cult-ui.ndjp.net/docs/components/logo-carousel
- 官方文档:https://www.cult-ui.com/docs/components/logo-carousel
- 源码位置:`src/components/ui/logo-carousel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/logo-carousel
~~~

## 用法

~~~tsx
import { LogoCarousel } from "@/components/ui/logo-carousel"

export function Example() {
  return (
    <LogoCarousel />
  )
}
~~~

## 导出部件

- `LogoCarousel`

## 依赖

- `motion`

## 源码属性定义

### LogoColumnProps

~~~ts
interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。