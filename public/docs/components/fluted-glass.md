# 竖纹玻璃 (Fluted Glass)

> WebGL 竖纹(凹槽)玻璃图像着色器,来自 Paper Design,可调纹理形状、棱镜畸变、高光阴影等参数。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/fluted-glass
- 官方文档:https://www.cult-ui.com/docs/components/fluted-glass
- 源码位置:`src/components/ui/fluted-glass.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/fluted-glass
~~~

## 用法

~~~tsx
import { FlutedGlass } from "@/components/ui/fluted-glass"

<div className="relative aspect-video w-full overflow-hidden rounded-2xl">
  <FlutedGlass
    className="absolute inset-0 size-full"
    image={imageUrl}
    width={1280}
    height={720}
  />
</div>
~~~

## 导出部件

- `FlutedGlass`

## 依赖

- `@paper-design/shaders-react`
## 备注

需要浏览器支持 WebGL;所有视觉参数均可在运行时平滑过渡。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `image` | `string` | — | 应用玻璃效果的图片地址。 |
| `width / height` | `number` | `1280 / 720` | 着色器画布尺寸。 |
| `shape` | `"lines" \| "linesIrregular" \| "wave" \| "zigzag" \| "pattern"` | `"lines"` | 纹理形状。 |
| `distortionShape` | `"prism" \| "lens" \| "contour" \| "cascade" \| "flat"` | `"prism"` | 畸变形状。 |
| `distortion` | `number` | `0.5` | 畸变强度。 |
| `angle` | `number` | `0` | 纹理角度(0–180°)。 |
| `fit` | `"cover" \| "contain" \| "none"` | `"cover"` | 图像填充方式。 |
| `edges` | `number` | `0.25` | 边缘柔化。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。