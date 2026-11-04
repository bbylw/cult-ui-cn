import { Link } from "react-router-dom"

import { CodeBlock } from "@/components/ui/code-block"

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight">
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground mt-4 leading-relaxed">{children}</p>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 scroll-mt-24 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function InstallationPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">安装(Vite + bun)</h1>
      <P>
        本指南演示如何用 <strong className="text-foreground">bun</strong>{" "}
        从零搭建一个 Vite + React + Tailwind CSS v4 项目,并通过 shadcn CLI
        安装 Cult UI 组件——这正是本站自身使用的技术栈。
      </P>

      <H2>前提条件</H2>
      <ul className="text-muted-foreground mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
        <li>已安装 bun 1.1+(或 Node.js 20+ 与任意包管理器)</li>
        <li>一个 React 18/19 项目(Vite、React Router 等均可)</li>
        <li>Tailwind CSS v4 与 shadcn/ui 主题令牌已配置</li>
      </ul>

      <H2>1. 创建 Vite 项目</H2>
      <CodeBlock
        code={`bun create vite@latest my-app --template react-ts
cd my-app
bun install`}
        language="bash"
        className="mt-4"
      />

      <H2>2. 安装 Tailwind CSS v4</H2>
      <CodeBlock
        code="bun add tailwindcss @tailwindcss/vite"
        language="bash"
        className="mt-4"
      />
      <P>
        在 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">vite.config.ts</code>{" "}
        中注册插件并配置 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@</code>{" "}
        路径别名:
      </P>
      <CodeBlock
        code={`import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})`}
        language="ts"
        className="mt-4"
      />
      <P>
        同时在 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">tsconfig.json</code>{" "}
        与 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">tsconfig.app.json</code>{" "}
        中加入路径别名,让 IDE 与 shadcn CLI 都能解析 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@/</code>{" "}
        导入:
      </P>
      <CodeBlock
        code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
        language="json"
        className="mt-4"
      />

      <H2>3. 引入 Tailwind 与主题令牌</H2>
      <P>
        把 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src/index.css</code>{" "}
        的内容替换为 Tailwind v4 入口与 shadcn 主题变量(完整变量见
        主题定制页面):
      </P>
      <CodeBlock
        code={`@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* …其余浅色变量 */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* …其余深色变量 */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* …其余颜色映射 */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}`}
        language="css"
        className="mt-4"
      />

      <H2>4. 配置 components.json</H2>
      <P>
        在项目根目录创建 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>,
        并注册 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@cult-ui</code>{" "}
        命名空间(也可以用 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">bunx shadcn@latest init</code>{" "}
        交互式生成后追加 registries 字段):
      </P>
      <CodeBlock
        code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide",
  "registries": {
    "@cult-ui": "https://www.cult-ui.com/r/{name}.json"
  }
}`}
        language="json"
        className="mt-4"
      />
      <P>
        还需要 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src/lib/utils.ts</code>{" "}
        中的 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">cn</code>{" "}
        工具函数(<code className="bg-muted rounded px-1.5 py-0.5 text-xs">bun add clsx tailwind-merge</code>):
      </P>
      <CodeBlock
        code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
        language="ts"
        className="mt-4"
      />

      <H2>5. 添加 Cult UI 组件</H2>
      <P>现在可以按名称安装任意组件了:</P>
      <CodeBlock
        code={`# 单个组件
bunx shadcn@latest add @cult-ui/globe

# 多个组件一次装完
bunx shadcn@latest add @cult-ui/text-animate @cult-ui/border-beam-card

# 或者直接用完整 registry 地址,无需注册命名空间
bunx shadcn@latest add https://www.cult-ui.com/r/shift-card.json`}
        language="bash"
        className="mt-4"
      />
      <P>
        CLI 会自动安装每个组件的 npm 依赖(如 motion、cobe),并把源码写入{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src/components/ui/</code>。
      </P>
      <P>
        不方便使用 CLI?可以按{" "}
        <Link
          to="/docs/installation/manual"
          className="underline underline-offset-4"
        >
          手动安装
        </Link>{" "}
        指南逐项配置,再复制组件源码。
      </P>

      <H2>6. 适配说明(非 Next.js 项目)</H2>
      <P>
        部分组件基于 Next.js 编写,从官方 registry 安装后需要替换以下导入
        (Vite 项目没有 Next 运行时):
      </P>
      <ul className="text-muted-foreground mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
        <li>
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">next/image</code>{" "}
          改为标准 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">&lt;img&gt;</code>,
          或使用本站的 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@/components/ui/image</code> 兼容层;
        </li>
        <li>
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">next/link</code>{" "}
          改为 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">&lt;a&gt;</code>,
          或你所用路由的 Link;
        </li>
        <li>
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">next-themes</code>{" "}
          改为项目内的主题 context,本站实现见{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src/lib/theme.tsx</code>。
        </li>
      </ul>
      <P>
        完成上述替换后即可在页面里导入组件,例如{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          import {"{"} DefaultShowcaseGlobe {"}"} from "@/components/ui/globe"
        </code>
        。
      </P>

      <H2>从终端查找组件</H2>
      <P>先搜索 registry、预览组件,再决定是否安装:</P>
      <CodeBlock
        code={`npx shadcn@latest search @cult-ui --query card
npx shadcn@latest view @cult-ui/globe`}
        language="bash"
        className="mt-4"
      />
      <P>
        想让 AI Agent 代劳,请配置{" "}
        <Link to="/docs/mcp-server" className="underline underline-offset-4">
          MCP 服务器
        </Link>
        。
      </P>

      <H2>固定 registry 地址</H2>
      <P>
        只有在使用 3.0 之前的 shadcn CLI、所处环境访问不到 shadcn registry
        目录,或希望在团队内明确写出 registry URL 时才需要这一步:
      </P>
      <CodeBlock
        code={`{
  "registries": {
    "@cult-ui": "https://www.cult-ui.com/r/{name}.json"
  }
}`}
        language="json"
        className="mt-4"
      />
      <P>任何 CLI 版本也都可以通过 URL 直接安装单个组件:</P>
      <CodeBlock
        code="npx shadcn@latest add https://www.cult-ui.com/r/globe.json"
        language="bash"
        className="mt-4"
      />

      <H2>更新组件</H2>
      <P>
        组件就是你自己的代码,更新完全可选。加上{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--overwrite</code>{" "}
        重新添加,即可替换为最新版本;执行后请检查 diff,保留你想留下的本地改动:
      </P>
      <CodeBlock
        code="npx shadcn@latest add @cult-ui/globe --overwrite"
        language="bash"
        className="mt-4"
      />

      <H2>故障排查</H2>

      <H3>CLI 提示 @cult-ui registry 未知</H3>
      <P>
        请使用最新的 CLI({" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">npx shadcn@latest</code>
        ),而不是全局安装或锁定版本的旧版本。若仍然失败,请把上面的{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">registries</code>{" "}
        条目写进{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>
        。
      </P>

      <H3>Cannot find module @/lib/utils</H3>
      <P>
        项目还没有用 shadcn/ui 初始化。运行{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          npx shadcn@latest init
        </code>
        ,或按{" "}
        <Link
          to="/docs/installation/manual"
          className="underline underline-offset-4"
        >
          手动安装
        </Link>{" "}
        自行添加{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">cn</code> 工具函数与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@/</code> 别名。
      </P>

      <H3>组件能渲染但没有样式或颜色不对</H3>
      <P>
        组件读取 shadcn 的主题令牌,例如{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--card</code>、{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--border</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--muted-foreground</code>
        。请确认全局 CSS 在{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">:root</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">.dark</code>{" "}
        中都定义了这些变量,并让 Tailwind 扫描到{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components</code>{" "}
        目录。详见{" "}
        <Link to="/docs/theming" className="underline underline-offset-4">
          主题定制
        </Link>
        。
      </P>

      <H3>在 Next.js 之外无法解析 next/image 或 next/link</H3>
      <P>
        少数组件使用了 Next.js 的 Image 与 Link 组件,请把它们换成{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">&lt;img&gt;</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">&lt;a&gt;</code>
        ,或你所使用路由的链接组件——本站第 6 步已列出受影响的组件。
      </P>
    </article>
  )
}
