import { CodeBlock } from "@/components/ui/code-block"

const TOKENS: Array<[string, string, string]> = [
  ["--background", "页面背景色", "body 的底色"],
  ["--foreground", "默认文字色", "与背景搭配的主文字"],
  ["--card / --card-foreground", "卡片", "FoldedCard、图表 tooltip 等"],
  ["--border", "边框", "看板列、代码块等描边"],
  ["--muted / --muted-foreground", "弱化内容", "说明文字、预览区底色"],
  ["--primary / --primary-foreground", "主色", "按钮、徽章"],
  ["--accent / --accent-foreground", "强调色", "侧边栏选中态、悬停"],
  ["--ring", "焦点环", "键盘导航的可视焦点"],
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
