# 像素标题(逐字) (Pixel Heading Character)

> 逐字符动画的像素字体标题,提供四种动画模式。

- 分类:文字与排版
- 本站页面:https://cult-ui.ndjp.net/docs/components/pixel-heading-character
- 官方文档:https://www.cult-ui.com/docs/components/pixel-heading-character
- 源码位置:`src/components/ui/pixel-heading-character.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/pixel-heading-character
~~~

## 用法

~~~tsx
import { PixelHeading, PixelHeadingMode } from "@/components/ui/pixel-heading-character"

export function Example() {
  return (
    <PixelHeading>
      <PixelHeadingMode />
    </PixelHeading>
  )
}
~~~

## 导出部件

- `PixelHeading`
- `PixelHeadingMode`

## 依赖

- `geist`
---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。