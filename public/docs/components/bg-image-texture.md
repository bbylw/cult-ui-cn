# 图片纹理背景 (Background Image Texture)

> 织物、网格噪点、纸张等纹理,可调不透明度。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/bg-image-texture
- 官方文档:https://www.cult-ui.com/docs/components/bg-image-texture
- 源码位置:`src/components/ui/bg-image-texture.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/bg-image-texture
~~~

## 用法

~~~tsx
import { BackgroundImageTexture } from "@/components/ui/bg-image-texture"

export function Example() {
  return (
    <BackgroundImageTexture />
  )
}
~~~

## 导出部件

- `BackgroundImageTexture`
- `TextureVariant`

## 依赖

- 无额外依赖

## 源码属性定义

### BackgroundImageTextureProps

~~~ts
interface BackgroundImageTextureProps {
  variant?: TextureVariant
  opacity?: number
  className?: string
  children?: React.ReactNode
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。