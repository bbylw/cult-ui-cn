# 安全检查点插画 (Security Checkpoint)

> 表现安全检查点流程的插画组件。

- 分类:插画
- 本站页面:https://cult-ui.ndjp.net/docs/components/security-checkpoint
- 官方文档:https://www.cult-ui.com/docs/components/security-checkpoint
- 源码位置:`src/components/ui/security-checkpoint.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/security-checkpoint
~~~

## 用法

~~~tsx
import { CHECKPOINT_LINES } from "@/components/ui/security-checkpoint"

export function Example() {
  return (
    <CHECKPOINT_LINES />
  )
}
~~~

## 导出部件

- `CHECKPOINT_LINES`
- `CheckpointLine`
- `SecurityCheckpoint`
- `SecurityCheckpointBlueLines`
- `SecurityCheckpointCard`
- `SecurityCheckpointRedLines`

## 依赖

- 无额外依赖

## 源码属性定义

### SecurityCheckpointBlueLines

~~~ts
export function SecurityCheckpointBlueLines({
lines,
  mounted,
  cardLeft: _cardLeft,
  className,
  ...props
}: SecurityCheckpointLineLayerProps)
~~~

### SecurityCheckpointRedLines

~~~ts
export function SecurityCheckpointRedLines({
lines,
  mounted,
  cardLeft,
  className,
  ...props
}: SecurityCheckpointLineLayerProps)
~~~

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。