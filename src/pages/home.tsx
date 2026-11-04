import { Link } from "react-router-dom"
import {
  Bot,
  Code2,
  Copy,
  Layers,
  Palette,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react"

import { CodeBlock } from "@/components/ui/code-block"
import {
  BorderBeamCard,
  BorderBeamCardDescription,
  BorderBeamCardHeader,
  BorderBeamCardTitle,
} from "@/components/ui/border-beam-card"
import TextAnimate from "@/components/ui/text-animate"

import { ComponentDemo } from "@/components/site/demos"
import { Button } from "@/components/ui/button"
import { getComponentDoc } from "@/lib/docs-data"

/* ── 顶部 Hero ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      {/* 顶部光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, var(--hero-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-8 text-center sm:px-6">
        <div className="bg-background/60 mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="size-3.5 text-amber-400" />
          Tailwind CSS v4 · Motion · MIT 许可
        </div>

        <h1 className="mt-5 text-[2.55rem] leading-[1.06] font-black tracking-[-0.035em] text-balance sm:text-[4.1rem]">
          <TextAnimate
            as="span"
            text="让 shadcn/ui 动起来"
            type="rollIn"
            className="inline-flex flex-wrap justify-center"
          />
        </h1>

        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base text-pretty leading-relaxed sm:text-[17px]">
          <strong className="text-foreground block">
            官方 150+ 个免费 shadcn/ui 动画组件。
          </strong>
          <span className="mt-1 block">
            本站收录 137 个,一行命令即可安装。
          </span>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/docs/components">浏览组件</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/docs/installation">安装指南</Link>
          </Button>
        </div>

        {/* 统计条 */}
        <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border shadow-sm sm:grid-cols-4">
          {[
            ["137", "本站收录"],
            ["12", "含 Props 文档"],
            ["100%", "免费开源"],
            ["MIT", "许可证"],
          ].map(([value, label]) => (
            <div key={label} className="bg-background/80 px-4 py-4 backdrop-blur">
              <dd className="text-[26px] leading-none font-bold tracking-tight">
                {value}
              </dd>
              <dt className="text-muted-foreground mt-1.5 text-xs">{label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* 3D 地球 */}
      <div className="relative mx-auto max-w-4xl px-4 pb-8 sm:px-6">
        <ComponentDemo slug="globe" />
      </div>
    </section>
  )
}

/* ── 最新新增:6 个新组件演示 ───────────────────────────── */
const FEATURED = [
  { slug: "analytics-chart", previewHeight: "h-[340px]" },
  { slug: "folded-card", previewHeight: "h-[340px]" },
  { slug: "dynamic-island", previewHeight: "h-[300px]" },
  { slug: "kanban-board", previewHeight: "h-[300px]" },
  { slug: "mac-screen", previewHeight: "h-[360px]" },
  { slug: "fluted-glass", previewHeight: "h-[360px]" },
] as const

function FeaturedSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Just added</p>
          <h2 className="mt-1.5 text-[28px] font-bold tracking-tight">最新新增</h2>
          <p className="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed">
            插画、设备样机、卡片与图表,58 个新组件全部实时渲染,文档与安装命令齐全。
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/docs/components">
            浏览全部组件
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {FEATURED.map(({ slug, previewHeight }) => {
          const doc = getComponentDoc(slug)
          if (!doc) return null
          return (
            <div key={slug} className="flex h-full flex-col gap-2.5">
              <div
                className={`relative overflow-hidden rounded-xl ${previewHeight} [&>div]:h-full [&>div]:min-h-0`}
              >
                <ComponentDemo slug={slug} />
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <Link
                  to={`/docs/components/${slug}`}
                  className="hover:underline"
                >
                  <span className="font-semibold">{doc.zhName}</span>
                  <span className="text-muted-foreground ml-2 font-mono text-xs">
                    {doc.name}
                  </span>
                </Link>
                <Link
                  to={`/docs/components/${slug}`}
                  className="text-muted-foreground hover:text-foreground text-xs"
                >
                  文档
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ── 为什么选择 Cult UI ────────────────────────────────── */
const FEATURES = [
  {
    icon: Code2,
    title: "源码归你所有",
    desc: "每个组件都是 shadcn/ui registry 项。CLI 把源码直接复制进你的项目,没有黑盒依赖,想改就改。",
  },
  {
    icon: Zap,
    title: "Motion 驱动动画",
    desc: "大多数组件基于 Motion 实现物理弹簧与交错动画,流畅、可中断、尊重系统减弱动效设置。",
  },
  {
    icon: Palette,
    title: "shadcn 主题令牌",
    desc: "基于 Tailwind CSS v4 与 shadcn 主题变量(--card、--border、--muted-foreground),装进任何主题即用。",
  },
  {
    icon: Bot,
    title: "为 AI Agent 优化",
    desc: "提供 llms.txt 全量索引,任意文档 URL 加 .md 即得干净 Markdown,支持 shadcn MCP 服务器。",
  },
] as const

function FeaturesSection() {
  return (
    <section className="border-y bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">为什么选择 Cult UI</h2>
        <p className="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed">
          不是又一个 npm 包,而是一套你可以完全掌控的动画组件源码。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <BorderBeamCard key={feature.title} className="h-full" beamSize="sm">
              <BorderBeamCardHeader>
                <feature.icon className="size-5 text-amber-400" />
                <BorderBeamCardTitle className="mt-2">
                  {feature.title}
                </BorderBeamCardTitle>
                <BorderBeamCardDescription className="leading-relaxed">
                  {feature.desc}
                </BorderBeamCardDescription>
              </BorderBeamCardHeader>
            </BorderBeamCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 三步安装 ──────────────────────────────────────────── */
function InstallSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Install</p>
          <h2 className="mt-1.5 text-[28px] font-bold tracking-tight">三步安装</h2>
          <ol className="mt-7 space-y-5">
            {[
              {
                icon: Layers,
                title: "初始化 shadcn/ui",
                desc: "确保项目已包含 components.json、cn 工具函数与 @/ 导入别名。",
              },
              {
                icon: Wand2,
                title: "注册命名空间",
                desc: "在 components.json 中加入 @cult-ui registry,之后即可按名称安装。",
              },
              {
                icon: Copy,
                title: "添加组件",
                desc: "一条命令,源码进入你的项目。npm、pnpm、yarn、bun 皆可。",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <div className="bg-muted text-foreground flex size-9 shrink-0 items-center justify-center rounded-lg border text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <step.icon className="size-4 text-amber-400" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Button className="mt-8" variant="outline" asChild>
            <Link to="/docs/installation">查看完整安装文档</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <CodeBlock
            tabs={[
              {
                label: "直接安装",
                code: "npx shadcn@latest add https://www.cult-ui.com/r/shift-card.json",
                language: "bash",
              },
              {
                label: "bun",
                code: "bunx shadcn@latest add @cult-ui/shift-card",
                language: "bash",
              },
            ]}
          />
          <CodeBlock
            code={`{
  "registries": {
    "@cult-ui": "https://www.cult-ui.com/r/{name}.json"
  }
}`}
            language="json"
          />
          <p className="text-muted-foreground text-xs leading-relaxed">
            组件使用 Tailwind CSS v4 与 shadcn 主题令牌,大多数组件借助 Motion
            实现动画。每个文档页面都列出了各自的依赖。
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── AI Agent 区块 ─────────────────────────────────────── */
function AiSection() {
  return (
    <section className="border-y bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-sm font-medium">For AI Agents</p>
            <h2 className="mt-1.5 text-[28px] font-bold tracking-tight">面向 AI Agent</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              这些文档既写给人看,也写给编码 Agent 看。让 Cursor、Claude Code
              或你自己的 Agent 直接检索并安装 Cult UI 组件。
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                {
                  href: "/llms.txt",
                  label: "llms.txt",
                  desc: "索引本站全部 137 个组件",
                },
                {
                  href: "/llms-full.txt",
                  label: "llms-full.txt",
                  desc: "完整文档汇总在一个文件中",
                },
                {
                  href: "/docs/components/dock.md",
                  label: "任意页面 + .md",
                  desc: "获得干净的 Markdown 版本",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <Code2 className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                  <span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono underline underline-offset-4"
                    >
                      {item.label}
                    </a>
                    <span className="text-muted-foreground"> — {item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CodeBlock
            tabs={[
              {
                label: "shadcn MCP",
                code: `{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}`,
                language: "json",
              },
              {
                label: "Agent 提示词",
                code: `使用 shadcn MCP 服务器,从 @cult-ui registry
搜索并安装一个带流光边框的卡片组件,
要求适配现有的 shadcn 主题令牌。`,
                language: "text",
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

/* ── 底部 CTA ──────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 80% at 50% 100%, oklch(0.75 0.15 85 / 0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Cult UI 永久免费
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-pretty leading-relaxed">
          MIT 许可证,全职维护。AI SDK Agents 是它的收入来源——如果你在开发 AI
          功能,订阅它就是支持这个库持续发展的最佳方式。也欢迎在 GitHub 上点 Star。
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a
              href="https://github.com/nolly-studio/cult-ui"
              target="_blank"
              rel="noreferrer"
            >
              在 GitHub 上点 Star
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/docs">阅读文档</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedSection />
      <FeaturesSection />
      <InstallSection />
      <AiSection />
      <CtaSection />
    </main>
  )
}
