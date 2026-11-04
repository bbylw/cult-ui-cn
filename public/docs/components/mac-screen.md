# Mac 屏幕 (Mac Screen)

> 经典 Macintosh CRT 显示器样机,在复古屏幕框内展示图片或 GIF,响应式且零外部依赖。

- 分类:样机
- 本站页面:https://cult-ui.ndjp.net/docs/components/mac-screen
- 官方文档:https://www.cult-ui.com/docs/components/mac-screen
- 源码位置:`src/components/ui/mac-screen.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/mac-screen
~~~

## 用法

~~~tsx
import { MacScreen } from "@/components/ui/mac-screen"

<MacScreen
  gifUrl="https://example.com/preview.png"
  alt="产品截图"
/>
~~~

## 导出部件

- `MacScreen`

## 依赖

- 无额外依赖

## 源码属性定义

### MacScreenProps

~~~ts
interface MacScreenProps {
  gifUrl?: string
  alt?: string
}
~~~

## 备注

屏幕框图片位于 public/component-frames/apple-computer-img.png,本站已随项目提供。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `gifUrl` | `string` | `Giphy 默认图` | 屏幕内展示的图片或 GIF 地址。 |
| `alt` | `string` | `"Screen content"` | 图片替代文本。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。