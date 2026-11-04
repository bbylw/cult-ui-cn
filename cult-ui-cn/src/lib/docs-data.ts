export type PropRow = {
  name: string
  type: string
  default?: string
  desc: string
}

export type ComponentDocData = {
  slug: string
  name: string
  zhName: string
  category: string
  description: string
  install: string
  usage: string
  props: PropRow[]
  dependencies: string[]
  notes?: string
}

const OG_IMAGE =
  "https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/og.png"

export const componentDocs: ComponentDocData[] = [
  {
    slug: "globe",
    name: "Globe",
    zhName: "3D 地球",
    category: "动效",
    description:
      "基于 cobe 构建的交互式 3D WebGL 地球组件,支持拖拽旋转、明暗主题自适应、标记点与飞行弧线,适合营销页首屏与仪表盘。",
    install: "npx shadcn@latest add @cult-ui/globe",
    usage: `import { DefaultShowcaseGlobe } from "@/components/ui/globe"

<DefaultShowcaseGlobe globeSize={520} title="CULT PRO" />`,
    props: [
      {
        name: "className",
        type: "string",
        desc: "附加到根元素的类名。",
      },
      {
        name: "globeSize",
        type: "number",
        default: "520",
        desc: "地球渲染尺寸(px)。",
      },
      {
        name: "title",
        type: "string",
        default: `"CULT PRO"`,
        desc: "中心标题贴纸文字。",
      },
      {
        name: "orbitPhrase",
        type: "string",
        default: `"Ship-ready sections · "`,
        desc: "环绕轨道循环滚动的文字短语。",
      },
      {
        name: "hideCenterTitle",
        type: "boolean",
        default: "false",
        desc: "隐藏中心标题。",
      },
    ],
    dependencies: ["cobe(WebGL 渲染)", "motion(动画、useInView)"],
    notes:
      "标记点与弧线标签使用 CSS 锚点定位。组件同时导出 DefaultShowcaseGlobe 与 MarketingHeroGlobe 两个变体,以及 CDN、航班、卫星、分析等多种示例数据配置。",
  },
  {
    slug: "text-animate",
    name: "Text Animate",
    zhName: "文字动画",
    category: "动效",
    description:
      "动画文字组件,提供 8 种入场效果(fadeIn、rollIn、whipIn 等),支持逐词/逐字符交错动画,适合标题与口号。",
    install: "npx shadcn@latest add @cult-ui/text-animate",
    usage: `import TextAnimate from "@/components/ui/text-animate"

<TextAnimate text="让界面动起来" type="rollIn" />`,
    props: [
      { name: "text", type: "string", desc: "要展示的文字内容。" },
      {
        name: "type",
        type: `"fadeIn" | "fadeInUp" | "popIn" | "shiftInUp" | "rollIn" | "whipIn" | "whipInUp" | "calmInUp"`,
        desc: "入场动画类型。",
      },
      { name: "delay", type: "number", desc: "动画延迟(秒)。" },
      { name: "duration", type: "number", desc: "动画时长(秒)。" },
    ],
    dependencies: ["motion"],
    notes: "中文没有空格分隔,组件会按字符逐个交错动画,效果同样自然。",
  },
  {
    slug: "border-beam-card",
    name: "Border Beam Card",
    zhName: "流光边框卡片",
    category: "卡片",
    description:
      "带有一道沿边缘循环流动光束的卡片组件,基于 shadcn Card 封装,常用于功能亮点展示与定价卡。",
    install: "npx shadcn@latest add @cult-ui/border-beam-card",
    usage: `import {
  BorderBeamCard,
  BorderBeamCardHeader,
  BorderBeamCardTitle,
  BorderBeamCardDescription,
  BorderBeamCardContent,
} from "@/components/ui/border-beam-card"

<BorderBeamCard className="w-sm">
  <BorderBeamCardHeader>
    <BorderBeamCardTitle>流光边框</BorderBeamCardTitle>
    <BorderBeamCardDescription>一道光束沿卡片边缘循环流动。</BorderBeamCardDescription>
  </BorderBeamCardHeader>
  <BorderBeamCardContent>内容区</BorderBeamCardContent>
</BorderBeamCard>`,
    props: [
      { name: "children", type: "React.ReactNode", desc: "卡片内容。" },
      {
        name: "size",
        type: `"default" | "sm"`,
        default: `"default"`,
        desc: "卡片布局密度,与 shadcn Card 的 size 一致。",
      },
      {
        name: "beamSize",
        type: `"sm" | "md" | "line"`,
        default: `"md"`,
        desc: "光束粗细预设。",
      },
      { name: "cardClassName", type: "string", desc: "合并到内部 Card 的类名。" },
      {
        name: "theme",
        type: `"auto" | ...`,
        default: `"auto"`,
        desc: "光束配色主题,auto 跟随明暗模式。",
      },
      { name: "borderRadius", type: "string | number", desc: "覆盖圆角。" },
    ],
    dependencies: ["motion", "shadcn/ui Card"],
  },
  {
    slug: "folded-card",
    name: "Folded Card",
    zhName: "折角卡片",
    category: "卡片",
    description:
      "可组合的折角卡片组件,右上角带真实翻折效果,适合模板集市、博客索引、资源目录等场景。",
    install: "npx shadcn@latest add @cult-ui/folded-card",
    usage: `import {
  FoldedCard, FoldedCardFold, FoldedCardLink, FoldedCardBorder,
  FoldedCardPreview, FoldedCardGrid, FoldedCardFooter,
  FoldedCardHeading, FoldedCardTitle, FoldedCardBadge,
  FoldedCardDescription,
} from "@/components/ui/folded-card"

<FoldedCard>
  <FoldedCardFold />
  <FoldedCardLink href="/docs/components/folded-card">
    <FoldedCardBorder />
    <FoldedCardPreview>
      <FoldedCardGrid />
    </FoldedCardPreview>
    <FoldedCardFooter>
      <FoldedCardHeading>
        <FoldedCardTitle>折角卡片</FoldedCardTitle>
        <FoldedCardBadge>新</FoldedCardBadge>
      </FoldedCardHeading>
      <FoldedCardDescription>右上角带折角的卡片。</FoldedCardDescription>
    </FoldedCardFooter>
  </FoldedCardLink>
</FoldedCard>`,
    props: [
      { name: "FoldedCard", type: "div props", desc: "根容器,默认 max-w-sm 并应用折角裁剪路径。" },
      { name: "FoldedCardFold", type: "div props", desc: "右上角 40×40px 的翻折角。" },
      { name: "FoldedCardLink", type: "a props", desc: "链接包装器(Vite 环境渲染为 <a>)。" },
      { name: "FoldedCardPreview", type: "div props", desc: "预览区,默认高 228px。" },
      { name: "FoldedCardGrid", type: "rows?, columns?", desc: "装饰网格,默认 4×4。" },
      { name: "FoldedCardTitle", type: "h3 props", desc: "卡片标题。" },
      { name: "FoldedCardBadge", type: "span props", desc: "小徽章。" },
      { name: "FoldedCardDescription", type: "p props", desc: "描述,默认 line-clamp-3。" },
    ],
    dependencies: ["lucide-react(示例中)"],
    notes:
      "原组件基于 Next.js Link,本站已将其适配为标准 <a> 标签,可在 Vite 中直接使用。",
  },
  {
    slug: "analytics-chart",
    name: "Analytics Chart",
    zhName: "分析图表",
    category: "图表",
    description:
      "Vercel 风格的 SVG 折线图组件,渐变描边、悬浮 tooltip 卡片,纯 SVG 实现无第三方图表库,适合分析仪表盘。",
    install: "npx shadcn@latest add @cult-ui/analytics-chart",
    usage: `import { AnalyticsLineChart } from "@/components/ui/analytics-chart"

<AnalyticsLineChart
  data={[
    { date: "2024-01-07", label: "organic", value: 340 },
    { date: "2024-01-14", label: "organic", value: 520 },
  ]}
  valueLabel="注册量"
/>`,
    props: [
      { name: "data", type: "AnalyticsDataPoint[]", desc: "数据点数组 {date, label, value}。" },
      { name: "gradientStops", type: "AnalyticsGradientStop[]", desc: "渐变描边的色标。" },
      { name: "dotColors", type: "string[]", desc: "按索引覆盖数据点颜色。" },
      { name: "gridLines", type: "number", default: "5", desc: "网格线数量。" },
      { name: "height", type: "number", default: "280", desc: "viewBox 高度。" },
      { name: "pinnedIndices", type: "number[]", desc: "常显 tooltip 的索引,默认最后两个点。" },
      { name: "valueLabel", type: "string", default: `"clicks"`, desc: "tooltip 中数值的标签。" },
    ],
    dependencies: ["纯 SVG,无第三方图表库"],
  },
  {
    slug: "mac-screen",
    name: "Mac Screen",
    zhName: "Mac 屏幕",
    category: "样机",
    description:
      "经典 Macintosh CRT 显示器样机,在复古屏幕框内展示图片或 GIF,响应式且零外部依赖。",
    install: "npx shadcn@latest add @cult-ui/mac-screen",
    usage: `import { MacScreen } from "@/components/ui/mac-screen"

<MacScreen
  gifUrl="https://example.com/preview.png"
  alt="产品截图"
/>`,
    props: [
      {
        name: "gifUrl",
        type: "string",
        default: "Giphy 默认图",
        desc: "屏幕内展示的图片或 GIF 地址。",
      },
      { name: "alt", type: "string", default: `"Screen content"`, desc: "图片替代文本。" },
    ],
    dependencies: ["无外部库,纯 Tailwind 样式"],
    notes: "屏幕框图片位于 public/component-frames/apple-computer-img.png,本站已随项目提供。",
  },
  {
    slug: "dynamic-island",
    name: "Dynamic Island",
    zhName: "灵动岛",
    category: "动效",
    description:
      "iPhone 灵动岛组件,提供 14 种尺寸预设之间流畅的弹簧过渡,适合通知、播放器、通话等状态演示。",
    install: "npx shadcn@latest add @cult-ui/dynamic-island",
    usage: `import {
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

<DynamicIsland id="island-demo"><Demo /></DynamicIsland>`,
    props: [
      { name: "id", type: "string", desc: "DynamicIsland 根节点必填的唯一标识。" },
      {
        name: "size 预设",
        type: `"compact" | "medium" | "large" | "tall" | "long" | "ultra" | "massive" 等 14 种`,
        desc: "通过 useDynamicIslandSize().setSize() 或 useScheduledAnimations 切换。",
      },
    ],
    dependencies: ["motion"],
    notes:
      "需要配合 DynamicContainer / DynamicTitle / DynamicDescription 使用;useScheduledAnimations 可按时间表自动轮播尺寸。",
  },
  {
    slug: "dock",
    name: "Dock",
    zhName: "程序坞",
    category: "导航",
    description:
      "macOS 风格的底部程序坞,鼠标靠近时图标放大、点击弹出动效,适合作品集与工具栏场景。",
    install: "npx shadcn@latest add @cult-ui/dock",
    usage: `import { Dock, DockCard, DockCardInner, DockDivider } from "@/components/ui/dock"

<Dock className="fixed bottom-4 left-1/2 -translate-x-1/2">
  <DockCard id="1">
    <DockCardInner src="/icons/figma.svg" id="1" />
  </DockCard>
  <DockDivider />
</Dock>`,
    props: [
      { name: "Dock", type: "className, children", desc: "根容器,管理悬停与缩放状态。" },
      { name: "DockCard", type: "children, id", desc: "单个图标卡,点击触发布局动画。" },
      { name: "DockCardInner", type: "src, id, children", desc: "图标图片(必须有 src)。" },
      { name: "DockDivider", type: "—", desc: "分隔线。" },
    ],
    dependencies: ["motion"],
    notes: "图标通过 DockCardInner 的 src 传入,任意图片皆可。",
  },
  {
    slug: "code-block",
    name: "Code Block",
    zhName: "代码块",
    category: "工具",
    description:
      "带复制按钮与可切换标签页的代码块组件,内置轻量语法着色,适合文档与安装说明。",
    install: "npx shadcn@latest add @cult-ui/code-block",
    usage: `import { CodeBlock } from "@/components/ui/code-block"

<CodeBlock
  tabs={[
    { label: "npm", code: "npx shadcn add @cult-ui/globe" },
    { label: "bun", code: "bunx shadcn add @cult-ui/globe" },
  ]}
/>

// 或单段代码
<CodeBlock code="bun run dev" language="bash" />`,
    props: [
      { name: "tabs", type: "CodeTab[]", desc: "标签页数组 {label, code, language?}。" },
      { name: "code", type: "string", desc: "单段代码内容(与 tabs 二选一)。" },
      { name: "language", type: "string", default: `"bash"`, desc: "默认语言。" },
    ],
    dependencies: ["motion", "lucide-react"],
  },
  {
    slug: "copy-button",
    name: "Copy Button",
    zhName: "复制按钮",
    category: "工具",
    description:
      "复制到剪贴板按钮,复制成功后图标切换为对勾并显示提示,提供 inline 与 overlay 两种布局。",
    install: "npx shadcn@latest add @cult-ui/copy-button",
    usage: `import { CopyButton } from "@/components/ui/copy-button"

<CopyButton value="npx shadcn@latest add @cult-ui/globe" tooltip="复制安装命令" />`,
    props: [
      { name: "value", type: "string", desc: "要复制的文本。" },
      { name: "layout", type: `"inline" | "overlay"`, default: `"inline"`, desc: "布局模式。" },
      { name: "tooltip", type: "string", desc: "提示文字。" },
      { name: "variant", type: "Button variant", default: `"ghost"`, desc: "按钮样式变体。" },
    ],
    dependencies: ["shadcn/ui Button", "lucide-react", "motion"],
  },
  {
    slug: "kanban-board",
    name: "Kanban Board",
    zhName: "看板",
    category: "交互",
    description:
      "拖拽看板组件,卡片可在列之间拖动,支持标签、负责人头像与 Motion 布局动画,使用原生 HTML 拖放 API。",
    install: "npx shadcn@latest add @cult-ui/kanban-board",
    usage: `import { Column, gentleSpring } from "@/components/ui/kanban-board"
import { MotionConfig } from "motion/react"

<MotionConfig transition={gentleSpring}>
  {columns.map((col) => (
    <Column
      key={col.id}
      column={col}
      dragState={dragState}
      setDragState={setDragState}
      onDrop={(cardId, from, to) => moveCard(cardId, from, to)}
    />
  ))}
</MotionConfig>`,
    props: [
      { name: "column", type: "ColumnData", desc: "列数据 {id, title, status, cards}。" },
      {
        name: "onDrop",
        type: "(cardId, fromColumnId, toColumnId) => void",
        desc: "卡片落下的回调,在此更新状态。",
      },
      { name: "dragState", type: "DragState | null", desc: "当前拖拽中的卡片与来源列。" },
      { name: "setDragState", type: "React.Dispatch<SetStateAction<DragState>>", desc: "拖拽状态更新器。" },
    ],
    dependencies: ["motion(布局动画)", "原生 HTML 拖放 API"],
    notes:
      "CardData 支持 { id, title, tags?, assignee?, date? };标签变体有 feature / bug / design / improvement / docs / done 六种配色。原组件的 next/image 头像已适配为标准 <img>。",
  },
  {
    slug: "fluted-glass",
    name: "Fluted Glass",
    zhName: "竖纹玻璃",
    category: "特效",
    description:
      "WebGL 竖纹(凹槽)玻璃图像着色器,来自 Paper Design,可调纹理形状、棱镜畸变、高光阴影等参数。",
    install: "npx shadcn@latest add @cult-ui/fluted-glass",
    usage: `import { FlutedGlass } from "@/components/ui/fluted-glass"

<div className="relative aspect-video w-full overflow-hidden rounded-2xl">
  <FlutedGlass
    className="absolute inset-0 size-full"
    image={imageUrl}
    width={1280}
    height={720}
  />
</div>`,
    props: [
      { name: "image", type: "string", desc: "应用玻璃效果的图片地址。" },
      { name: "width / height", type: "number", default: "1280 / 720", desc: "着色器画布尺寸。" },
      { name: "shape", type: `"lines" | "linesIrregular" | "wave" | "zigzag" | "pattern"`, default: `"lines"`, desc: "纹理形状。" },
      { name: "distortionShape", type: `"prism" | "lens" | "contour" | "cascade" | "flat"`, default: `"prism"`, desc: "畸变形状。" },
      { name: "distortion", type: "number", default: "0.5", desc: "畸变强度。" },
      { name: "angle", type: "number", default: "0", desc: "纹理角度(0–180°)。" },
      { name: "fit", type: `"cover" | "contain" | "none"`, default: `"cover"`, desc: "图像填充方式。" },
      { name: "edges", type: "number", default: "0.25", desc: "边缘柔化。" },
    ],
    dependencies: ["@paper-design/shaders-react(WebGL 着色器)"],
    notes: "需要浏览器支持 WebGL;所有视觉参数均可在运行时平滑过渡。",
  },
]

export const docCategories = ["新晋组件", "动效", "卡片", "图表", "样机", "交互", "特效", "导航", "工具"]

export function getComponentDoc(slug: string | undefined) {
  return componentDocs.find((doc) => doc.slug === slug)
}

export { OG_IMAGE }
