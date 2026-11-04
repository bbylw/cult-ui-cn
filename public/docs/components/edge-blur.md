# 边缘模糊 (Edge Blur)

> 多层遮罩 backdrop-filter 堆叠,让内容在页眉页脚处渐隐。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/edge-blur
- 官方文档:https://www.cult-ui.com/docs/components/edge-blur
- 源码位置:`src/components/ui/edge-blur.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/edge-blur
~~~

## 用法

~~~tsx
import { BottomBlur } from "@/components/ui/edge-blur"

export function Example() {
  return (
    <BottomBlur />
  )
}
~~~

## 导出部件

- `BottomBlur`
- `EdgeBlur`
- `TopBlur`

## 依赖

- 无额外依赖

## 源码属性定义

### EdgeBlurProps

~~~ts
interface EdgeBlurProps {
  position?: "top" | "bottom"
  height?: number
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。