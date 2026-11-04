# 灵动岛 (Dynamic Island)

> iPhone 灵动岛组件,提供 14 种尺寸预设之间流畅的弹簧过渡,适合通知、播放器、通话等状态演示。

- 分类:特效
- 本站页面:https://cult-ui.ndjp.net/docs/components/dynamic-island
- 官方文档:https://www.cult-ui.com/docs/components/dynamic-island
- 源码位置:`src/components/ui/dynamic-island.tsx`

## 安装

~~~bash
npx shadcn@latest add @cult-ui/dynamic-island
~~~

## 用法

~~~tsx
import {
  DynamicIsland, DynamicContainer, DynamicTitle,
  useScheduledAnimations,
} from "@/components/ui/dynamic-island"

function Demo() {
  useScheduledAnimations([
    { size: "compact", delay: 1000 },
    { size: "large", delay: 2400 },
    { size: "tall", delay: 3800 },
  ])
  return (
    <DynamicContainer className="flex h-full w-full items-center justify-center">
      <DynamicTitle className="text-white">正在播放</DynamicTitle>
    </DynamicContainer>
  )
}

<DynamicIsland id="island-demo"><Demo /></DynamicIsland>
~~~

## 导出部件

- `DynamicContainer`
- `DynamicDescription`
- `DynamicDiv`
- `DynamicIsland`
- `DynamicIslandProvider`
- `DynamicIslandSizePresets`
- `DynamicTitle`
- `SIZE_PRESETS`
- `SizePresets`
- `damping`
- `stiffness`
- `useDynamicIslandSize`

## 依赖

- `motion`

## 源码属性定义

### DynamicIslandProviderProps

~~~ts
interface DynamicIslandProviderProps {
  children: React.ReactNode
  initialSize?: SizePresets
  initialAnimation?: Array<{ size: SizePresets; delay: number }>
}
~~~

### DynamicContainerProps

~~~ts
type DynamicContainerProps = {
  className?: string
  children?: React.ReactNode
}
~~~

## 备注

需要配合 DynamicContainer / DynamicTitle / DynamicDescription 使用;useScheduledAnimations 可按时间表自动轮播尺寸。

## 属性(Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | `string` | — | DynamicIsland 根节点必填的唯一标识。 |
| `size 预设` | `"compact" \| "medium" \| "large" \| "tall" \| "long" \| "ultra" \| "massive" 等 14 种` | — | 通过 useDynamicIslandSize().setSize() 或 useScheduledAnimations 切换。 |

---

由 Cult UI 中文站生成。组件版权归 Nolly Studio,遵循 MIT 许可证。