# 文字动画 (Text Animate)

> 动画文字组件,提供 8 种入场效果(fadeIn、rollIn、whipIn 等),支持逐词/逐字符交错动画,适合标题与口号。

- 分类:文字与排版
- 本站页面:https://cult-ui.ndjp.net/docs/components/text-animate
- 官方文档:https://www.cult-ui.com/docs/components/text-animate
- 源码位置:`src/components/ui/text-animate.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/text-animate
~~~

## 用法

~~~tsx
import TextAnimate from "@/components/ui/text-animate"

<TextAnimate text="让界面动起来" type="rollIn" />
~~~

## 导出部件

- `TextAnimate`

## 依赖

- `motion`
## 备注

中文没有空格分隔,组件会按字符逐个交错动画,效果同样自然。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | — | 要展示的文字内容。 |
| `type` | `"fadeIn" \| "fadeInUp" \| "popIn" \| "shiftInUp" \| "rollIn" \| "whipIn" \| "whipInUp" \| "calmInUp"` | — | 入场动画类型。 |
| `delay` | `number` | — | 动画延迟(秒)。 |
| `duration` | `number` | — | 动画时长(秒)。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。