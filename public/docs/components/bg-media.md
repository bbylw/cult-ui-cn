# 背景媒体 (Background Media)

> 全屏图片或视频背景,带明暗遮罩与播放/暂停按钮。

- 分类:背景与纹理
- 本站页面:https://cult-ui.ndjp.net/docs/components/bg-media
- 官方文档:https://www.cult-ui.com/docs/components/bg-media
- 源码位置:`src/components/ui/bg-media.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/bg-media
~~~

## 用法

~~~tsx
import { BackgroundMedia } from "@/components/ui/bg-media"

export function Example() {
  return (
    <BackgroundMedia>内容</BackgroundMedia>
  )
}
~~~

## 导出部件

- `BackgroundMedia`

## 依赖

- `class-variance-authority`

## 源码属性定义

### BackgroundMediaProps

~~~ts
interface BackgroundMediaProps {
  variant?: OverlayVariant
  type?: MediaType
  src: string
  alt?: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。