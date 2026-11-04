# Globe 部署插画 (Illustration Globe Vercel)

> 展示部署中、已部署与失败状态的 Globe 动画。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/illustration-globe-vercel
- 官方文档:https://www.cult-ui.com/docs/components/illustration-globe-vercel
- 源码位置:`src/components/ui/illustration-globe-vercel.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/illustration-globe-vercel
~~~

## 用法

~~~tsx
import { BuiltInNodeIcon } from "@/components/ui/illustration-globe-vercel"

export function Example() {
  return (
    <BuiltInNodeIcon />
  )
}
~~~

## 导出部件

- `BuiltInNodeIcon`
- `CustomNodeIcon`
- `DEFAULT_NODES`
- `DemoGlobeVercel`
- `DemoGlobeVercelControls`
- `DeployGlobe`
- `DeployGlobeStatusBadge`
- `DeployGlobeSvg`
- `DeployNode`
- `DeployNodeData`
- `DeployPath`
- `DeployStatus`

## 依赖

- 无额外依赖

## 源码属性定义

### DeployGlobeProps

~~~ts
export type DeployGlobeProps = {
  status?: DeployStatus
  nodes?: DeployNode[]
  accentColor?: string
  duration?: number
  className?: string
  onReplay?: () => void
}
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。