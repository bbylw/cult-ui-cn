import { useState } from "react"
import { MotionConfig } from "motion/react"
import { Rocket } from "lucide-react"

import { AnalyticsLineChart } from "@/components/ui/analytics-chart"
import {
  BorderBeamCard,
  BorderBeamCardContent,
  BorderBeamCardDescription,
  BorderBeamCardHeader,
  BorderBeamCardTitle,
} from "@/components/ui/border-beam-card"
import { CodeBlock } from "@/components/ui/code-block"
import { CopyButton } from "@/components/ui/copy-button"
import {
  Dock,
  DockCard,
  DockCardInner,
  DockDivider,
} from "@/components/ui/dock"
import {
  DynamicContainer,
  DynamicDescription,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicTitle,
  useScheduledAnimations,
} from "@/components/ui/dynamic-island"
import { FlutedGlass } from "@/components/ui/fluted-glass"
import {
  FoldedCard,
  FoldedCardBadge,
  FoldedCardBorder,
  FoldedCardDescription,
  FoldedCardFold,
  FoldedCardFooter,
  FoldedCardGrid,
  FoldedCardHeading,
  FoldedCardLink,
  FoldedCardPreview,
  FoldedCardTitle,
} from "@/components/ui/folded-card"
import { DefaultShowcaseGlobe } from "@/components/ui/globe"
import {
  Column,
  gentleSpring,
  type ColumnData,
  type ColumnStatus,
  type DragState,
} from "@/components/ui/kanban-board"
import { MacScreen } from "@/components/ui/mac-screen"
import TextAnimate from "@/components/ui/text-animate"

import { OG_IMAGE } from "@/lib/docs-data"

/* 每个 demo 外层的统一预览容器 */
function Preview({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-dots relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border p-6 ${className ?? ""}`}
    >
      {children}
    </div>
  )
}

/* ── Globe ─────────────────────────────────────────────── */
function GlobeDemo() {
  return (
    <Preview className="min-h-[420px]">
      <DefaultShowcaseGlobe
        globeSize={360}
        title="CULT UI"
        orbitPhrase="150+ ANIMATED COMPONENTS · "
      />
    </Preview>
  )
}

/* ── Text Animate ──────────────────────────────────────── */
function TextAnimateDemo() {
  return (
    <Preview className="flex-col gap-4">
      <TextAnimate
        text="让 shadcn/ui 动起来"
        type="rollIn"
        className="text-3xl font-bold tracking-tight"
      />
      <TextAnimate
        text="Free · Open Source · Animated"
        type="calmInUp"
        delay={0.6}
        className="text-muted-foreground text-sm"
      />
    </Preview>
  )
}

/* ── Border Beam Card ──────────────────────────────────── */
function BorderBeamCardDemo() {
  return (
    <Preview>
      <BorderBeamCard className="w-sm">
        <BorderBeamCardHeader>
          <BorderBeamCardTitle>流光边框卡片</BorderBeamCardTitle>
          <BorderBeamCardDescription>
            一道光束沿卡片边缘循环流动,适合功能亮点与定价卡。
          </BorderBeamCardDescription>
        </BorderBeamCardHeader>
        <BorderBeamCardContent>
          <p className="text-muted-foreground text-sm">
            基于 shadcn Card 封装,API 与 Card 完全一致。
          </p>
        </BorderBeamCardContent>
      </BorderBeamCard>
    </Preview>
  )
}

/* ── Folded Card ───────────────────────────────────────── */
function FoldedCardDemo() {
  return (
    <Preview>
      <FoldedCard className="w-xs">
        <FoldedCardFold />
        <FoldedCardLink href="/docs/components/folded-card">
          <FoldedCardBorder />
          <FoldedCardPreview>
            <FoldedCardGrid rows={4} columns={6} />
          </FoldedCardPreview>
          <FoldedCardFooter>
            <FoldedCardHeading>
              <FoldedCardTitle>折角卡片</FoldedCardTitle>
              <FoldedCardBadge>新</FoldedCardBadge>
            </FoldedCardHeading>
            <FoldedCardDescription>
              右上角带真实翻折效果的卡片。
            </FoldedCardDescription>
          </FoldedCardFooter>
        </FoldedCardLink>
      </FoldedCard>
    </Preview>
  )
}

/* ── Analytics Chart ───────────────────────────────────── */
function AnalyticsChartDemo() {
  return (
    <Preview className="w-full flex-col items-stretch">
      <AnalyticsLineChart
        className="w-full"
        valueLabel="注册量"
        data={[
          { date: "2025-01-07", label: "signups", value: 340 },
          { date: "2025-02-07", label: "signups", value: 520 },
          { date: "2025-03-07", label: "signups", value: 890 },
          { date: "2025-04-07", label: "signups", value: 1240 },
          { date: "2025-05-07", label: "signups", value: 1610 },
          { date: "2025-06-07", label: "signups", value: 2380 },
        ]}
      />
    </Preview>
  )
}

/* ── Mac Screen ────────────────────────────────────────── */
function MacScreenDemo() {
  return (
    <Preview className="min-h-[360px]">
      <MacScreen gifUrl={OG_IMAGE} alt="Cult UI 首屏截图" />
    </Preview>
  )
}

/* ── Dynamic Island ────────────────────────────────────── */
function IslandDemo() {
  useScheduledAnimations([
    { size: "compact", delay: 900 },
    { size: "large", delay: 2200 },
    { size: "tall", delay: 3600 },
    { size: "long", delay: 5000 },
    { size: "medium", delay: 6600 },
  ])

  return (
    <DynamicContainer className="flex h-full w-full items-center justify-center">
      <DynamicTitle className="flex items-center gap-2 text-base font-semibold text-white">
        <Rocket className="h-4 w-4 fill-orange-400 text-orange-400" />
        Cult UI 中文站
      </DynamicTitle>
      <DynamicDescription className="text-xs text-white/60">
        灵动岛 · 14 种尺寸预设
      </DynamicDescription>
    </DynamicContainer>
  )
}

function DynamicIslandDemo() {
  return (
    <Preview className="min-h-[360px]">
      <DynamicIslandProvider>
        <DynamicIsland id="landing-island">
          <IslandDemo />
        </DynamicIsland>
      </DynamicIslandProvider>
    </Preview>
  )
}

/* ── Dock ──────────────────────────────────────────────── */
const DOCK_ICONS = [
  "🎨",
  "🧩",
  "⚡",
  "🌙",
  "📦",
  "🛠️",
  "✨",
] as const

function dockIcon(emoji: string) {
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`
}

function DockDemo() {
  return (
    <Preview className="flex-col">
      <p className="text-muted-foreground text-sm">把鼠标移到程序坞上试试</p>
      <Dock className="rounded-2xl border bg-background/80 p-2 shadow-xl backdrop-blur">
        {DOCK_ICONS.map((emoji, i) => (
          <DockCard key={emoji} id={String(i)}>
            <DockCardInner src={dockIcon(emoji)} id={String(i)} />
          </DockCard>
        ))}
        <DockDivider />
        <DockCard id="8">
          <DockCardInner src={dockIcon("🚀")} id="8" />
        </DockCard>
      </Dock>
    </Preview>
  )
}

/* ── Code Block ────────────────────────────────────────── */
function CodeBlockDemo() {
  return (
    <Preview className="w-full items-stretch">
      <CodeBlock
        className="w-full"
        tabs={[
          {
            label: "npm",
            code: "npx shadcn@latest add @cult-ui/globe",
            language: "bash",
          },
          {
            label: "bun",
            code: "bunx shadcn@latest add @cult-ui/globe",
            language: "bash",
          },
        ]}
      />
    </Preview>
  )
}

/* ── Copy Button ───────────────────────────────────────── */
function CopyButtonDemo() {
  return (
    <Preview className="flex-col gap-4">
      <p className="text-muted-foreground text-sm">点击右侧按钮复制命令:</p>
      <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 font-mono text-sm">
        <span>npx shadcn@latest add @cult-ui/globe</span>
        <CopyButton
          value="npx shadcn@latest add @cult-ui/globe"
          tooltip="复制安装命令"
        />
      </div>
    </Preview>
  )
}

/* ── Kanban Board ──────────────────────────────────────── */
const KANBAN_INITIAL: ColumnData[] = [
  {
    id: "todo",
    title: "待办",
    status: "todo",
    cards: [
      {
        id: "k1",
        title: "接入 Tailwind CSS v4",
        tags: [{ label: "feature", variant: "feature" }],
        date: "11月4日",
      },
      {
        id: "k2",
        title: "修复暗色模式令牌",
        tags: [{ label: "bug", variant: "bug" }],
        date: "11月5日",
      },
    ],
  },
  {
    id: "in-progress",
    title: "进行中",
    status: "in-progress",
    cards: [
      {
        id: "k3",
        title: "设计流光边框卡片",
        tags: [{ label: "design", variant: "design" }],
        date: "11月6日",
      },
    ],
  },
  {
    id: "done",
    title: "已完成",
    status: "done",
    cards: [
      {
        id: "k4",
        title: "用 bun 初始化项目",
        tags: [{ label: "docs", variant: "docs" }],
        date: "11月3日",
      },
    ],
  },
]

function KanbanBoardDemo() {
  const [columns, setColumns] = useState<ColumnData[]>(KANBAN_INITIAL)
  const [dragState, setDragState] = useState<DragState>(null)

  const handleDrop = (
    cardId: string,
    fromColumnId: ColumnStatus,
    toColumnId: ColumnStatus
  ) => {
    setColumns((prev) => {
      const card = prev
        .find((c) => c.id === fromColumnId)
        ?.cards.find((card) => card.id === cardId)
      if (!card) return prev
      return prev.map((col) => {
        if (col.id === fromColumnId) {
          return { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
        }
        if (col.id === toColumnId) {
          return { ...col, cards: [...col.cards, card] }
        }
        return col
      })
    })
  }

  return (
    <Preview className="w-full items-stretch bg-transparent border-0 p-0">
      <MotionConfig transition={gentleSpring}>
        <div className="grid w-full gap-4 md:grid-cols-3">
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              dragState={dragState}
              setDragState={setDragState}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </MotionConfig>
    </Preview>
  )
}

/* ── Fluted Glass ──────────────────────────────────────── */
function FlutedGlassDemo() {
  return (
    <Preview className="min-h-[360px] w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border">
        <FlutedGlass
          className="absolute inset-0 size-full"
          image={OG_IMAGE}
          width={1280}
          height={720}
        />
      </div>
    </Preview>
  )
}

/* ── 注册表 ─────────────────────────────────────────────── */
const demoMap: Record<string, () => React.JSX.Element> = {
  globe: GlobeDemo,
  "text-animate": TextAnimateDemo,
  "border-beam-card": BorderBeamCardDemo,
  "folded-card": FoldedCardDemo,
  "analytics-chart": AnalyticsChartDemo,
  "mac-screen": MacScreenDemo,
  "dynamic-island": DynamicIslandDemo,
  dock: DockDemo,
  "code-block": CodeBlockDemo,
  "copy-button": CopyButtonDemo,
  "kanban-board": KanbanBoardDemo,
  "fluted-glass": FlutedGlassDemo,
}

export function ComponentDemo({ slug }: { slug: string }) {
  const Demo = demoMap[slug]
  if (!Demo) {
    return (
      <p className="text-muted-foreground text-sm">该组件暂无在线演示。</p>
    )
  }
  return <Demo />
}

export const demoSlugs = Object.keys(demoMap)
