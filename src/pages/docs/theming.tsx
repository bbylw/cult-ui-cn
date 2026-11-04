import { CodeBlock } from "@/components/ui/code-block"

const TOKENS: Array<[string, string, string]> = [
  ["--card", "卡片与面板表面", "FoldedCard、图表 tooltip、代码块"],
  ["--border / --input", "细边框、输入框描边、控件轨道", "看板列、Dock 分隔线"],
  [
    "--muted / --muted-foreground",
    "次级表面、占位符、说明文字与图标",
    "预览区底色、表头、注释",
  ],
  ["--foreground / --background", "正文文字与页面底色", "全站"],
  ["--ring", "焦点环", "所有交互组件的键盘焦点"],
  ["--accent / --destructive", "悬停态与错误态", "侧边栏选中、按钮悬停"],
  ["--chart-1 … --chart-5", "数据可视化配色", "Globe 标记点与弧线、分析图表"],
  ["--radius", "圆角", "卡片、弹层、按钮等跟随主题圆角"],
]

export function ThemingPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">主题定制</h1>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        Cult UI 组件不自带颜色,而是消费 shadcn/ui 的 CSS
        变量令牌。你改一处令牌,所有组件同时换肤。Tailwind CSS v4 下,令牌在{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src/index.css</code>{" "}
        中以 oklch 定义,并通过 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@theme inline</code>{" "}
        映射为 Tailwind 工具类。
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">核心令牌</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b text-left">
              <th className="px-4 py-3 font-medium">令牌</th>
              <th className="px-4 py-3 font-medium">含义</th>
              <th className="px-4 py-3 font-medium">典型使用场景</th>
            </tr>
          </thead>
          <tbody>
            {TOKENS.map(([token, meaning, usage]) => (
              <tr key={token} className="border-b last:border-0">
                <td className="px-4 py-3 font-mono text-xs">{token}</td>
                <td className="px-4 py-3">{meaning}</td>
                <td className="text-muted-foreground px-4 py-3">{usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">深色模式</h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        在 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">&lt;html&gt;</code>{" "}
        上切换 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">dark</code>{" "}
        类即可整站换肤。Vite 项目没有 next-themes,用几行代码就能实现同样的效果:
      </p>
      <CodeBlock
        code={`// 初始化:读取系统偏好或 localStorage
const saved = localStorage.getItem("theme")
const dark = saved
  ? saved === "dark"
  : window.matchMedia("(prefers-color-scheme: dark)").matches
document.documentElement.classList.toggle("dark", dark)

// 切换按钮
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
}`}
        language="ts"
        className="mt-4"
      />

      <h2 className="mt-12 text-2xl font-bold tracking-tight">自定义品牌色</h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        把 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--primary</code>{" "}
        换成你的品牌色即可全局生效。例如把主色改为 Cult UI 首屏的琥珀色系:
      </p>
      <CodeBlock
        code={`:root {
  --primary: oklch(0.78 0.15 75);        /* 琥珀色 */
  --primary-foreground: oklch(0.15 0 0);
}

.dark {
  --primary: oklch(0.82 0.14 75);
  --primary-foreground: oklch(0.15 0 0);
}`}
        language="css"
        className="mt-4"
      />
      <h2 className="mt-12 text-2xl font-bold tracking-tight">
        单独调整某个实例
      </h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        每个组件都接受{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">className</code>
        ,并在最后通过{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">cn</code>{" "}
        合并,所以你的类名会覆盖默认样式:
      </p>
      <CodeBlock
        code={`<FoldedCard className="max-w-sm rounded-3xl" />
<BorderBeamCard className="w-lg" beamSize="line" />`}
        language="tsx"
        className="mt-4"
      />
      <p className="text-muted-foreground mt-4 leading-relaxed">
        有些组件的配色不走主题令牌,而是由组件自己的属性控制。例如流光边框的光束由{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">border-beam</code>{" "}
        包提供,改{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">theme</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">beamSize</code>{" "}
        即可换色换粗细;
        Globe 的标记点与弧线颜色来自{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--chart-1</code> 到{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--chart-5</code>。
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight">新增令牌</h2>
      <p className="text-muted-foreground mt-4 leading-relaxed">
        想新增一个供自己组件共用的颜色,请在明暗两种模式下各定义一次,再用{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@theme inline</code>{" "}
        暴露给 Tailwind:
      </p>
      <CodeBlock
        code={`:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}`}
        language="css"
        className="mt-4"
      />
      <p className="text-muted-foreground mt-4 leading-relaxed">
        之后就能在任意位置使用{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">bg-warning</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          text-warning-foreground
        </code>
        。
      </p>

      <p className="text-muted-foreground mt-4 leading-relaxed">
        更多令牌与高级定制(圆角、字体、侧边栏等)请参考{" "}
        <a
          href="https://www.cult-ui.com/docs/theming"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          官方主题文档
        </a>
        。
      </p>
    </article>
  )
}
