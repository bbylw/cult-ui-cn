# 网关 SVG 插画 (Gateway SVG Illustration)

> 把多条线汇入中心网关的 SVG 枢纽插画。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/gateway-svg-illustration
- 官方文档:https://www.cult-ui.com/docs/components/gateway-svg-illustration
- 源码位置:`src/components/ui/gateway-svg-illustration.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/gateway-svg-illustration
~~~

## 用法

~~~tsx
import { GatewayOverhead, GatewayOverheadBackground, GatewayOverheadBackgroundGrid } from "@/components/ui/gateway-svg-illustration"

export function Example() {
  return (
    <GatewayOverhead>
      <GatewayOverheadBackground />
    </GatewayOverhead>
  )
}
~~~

## 导出部件

- `GatewayOverhead`
- `GatewayOverheadBackground`
- `GatewayOverheadBackgroundGrid`
- `GatewayOverheadBottomLine`
- `GatewayOverheadCenterIcon`
- `GatewayOverheadCenterLine`
- `GatewayOverheadHub`
- `GatewayOverheadLeftLine`
- `GatewayOverheadNodeBox`
- `GatewayOverheadRightLine`
- `GatewayOverheadScene`
- `GatewayOverheadSvg`

## 依赖

- 无额外依赖

## 源码属性定义

### GatewayOverheadDefsProps

~~~ts
type GatewayOverheadDefsProps = {
  ids: GatewayOverheadIds
  borderColor: string
  backgroundColor: string
}
~~~

### GatewayOverheadGridProps

~~~ts
type GatewayOverheadGridProps = {
  ids: GatewayOverheadIds
  borderColor: string
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。