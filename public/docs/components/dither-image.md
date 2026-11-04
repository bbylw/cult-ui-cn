# 抖动图片 (Dither Image)

> 用 CSS Bayer 抖动插件处理图片,支持局部揭示遮罩。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/dither-image
- 官方文档:https://www.cult-ui.com/docs/components/dither-image
- 源码位置:`src/components/ui/dither-image.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/dither-image
~~~

## 用法

~~~tsx
import { DitherAspectRatio } from "@/components/ui/dither-image"

export function Example() {
  return (
    <DitherAspectRatio />
  )
}
~~~

## 导出部件

- `DitherAspectRatio`
- `DitherImage`
- `DitherImageCaption`
- `DitherImageContent`
- `DitherImageFrame`
- `DitherImageOverlay`
- `DitherImageReveal`
- `DitherRevealDirection`
- `DitherSize`

## 依赖

- `dither-plugin`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。