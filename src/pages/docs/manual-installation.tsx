import { Link } from "react-router-dom"

import { CodeBlock } from "@/components/ui/code-block"

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight">
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 scroll-mt-24 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground mt-4 leading-relaxed">{children}</p>
  )
}

export function ManualInstallationPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">手动安装</h1>
      <P>
        当你无法运行 shadcn CLI,或想在组件进入项目前先看清它究竟添加了什么时,可以用手动方式。项目需要的东西与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">shadcn init</code>{" "}
        建立的完全一致,之后每个组件就是一份需要你复制的文件。
      </P>

      <H2>一次性配置</H2>

      <H3>Tailwind CSS v4</H3>
      <P>
        按 Tailwind 官方安装指南配置你的框架。组件使用 Tailwind v4
        的工具类与任意值,少数组件还用到{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          tw-animate-css
        </code>{" "}
        提供的{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">animate-in</code>{" "}
        之类的进出场类名:
      </P>
      <CodeBlock
        code="npm install tw-animate-css"
        language="bash"
        className="mt-4"
      />
      <CodeBlock
        code={`@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));`}
        language="css"
        className="mt-3"
      />

      <H3>主题令牌</H3>
      <P>
        组件读取标准的 shadcn 令牌:
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--background</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--foreground</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--card</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--muted</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          --muted-foreground
        </code>
        、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--border</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--input</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--ring</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--accent</code>、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--destructive</code>
        、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--chart-1</code> 到{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--chart-5</code>,
        以及{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">--radius</code>。
        可参考{" "}
        <a
          href="https://ui.shadcn.com/docs/installation/manual"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          shadcn 手动安装指南
        </a>{" "}
        取得完整的{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">:root</code> 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">.dark</code>{" "}
        令牌集,并在{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@theme inline</code>{" "}
        中映射。各令牌的具体作用见{" "}
        <Link to="/docs/theming" className="underline underline-offset-4">
          主题定制
        </Link>
        。
      </P>

      <H3>cn 工具函数</H3>
      <CodeBlock
        code="npm install clsx tailwind-merge"
        language="bash"
        className="mt-4"
      />
      <CodeBlock
        code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
        language="ts"
        className="mt-3"
      />

      <H3>@/ 导入别名</H3>
      <P>
        组件会从{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@/lib/utils</code>{" "}
        与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          @/components/ui/*
        </code>{" "}
        导入。请在{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">tsconfig.json</code>{" "}
        中把{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@/*</code>{" "}
        指向源码根目录;若打包器不读取 tsconfig 的 paths,也要在打包器配置里加上:
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
      <P>
        如果没有{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">src</code>{" "}
        目录,把值改成{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">["./*"]</code>。
      </P>

      <H2>添加组件</H2>
      <P>
        每个组件页的「安装」区域都有一份源码。手动添加一个组件分三步:
      </P>
      <ol className="text-muted-foreground mt-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed">
        <li>
          <strong className="text-foreground">安装它的 npm 依赖。</strong>
          大多数动画组件需要{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">motion</code>,
          Halo 系列与较新的表单控件还会用到{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
            @base-ui/react
          </code>
          。
        </li>
        <li>
          <strong className="text-foreground">
            补上它所依赖的 shadcn/ui 或 Cult UI 组件
          </strong>
          ,例如{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">button</code> 或{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">badge</code>。
        </li>
        <li>
          <strong className="text-foreground">复制源码</strong>到{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
            components/ui/&lt;name&gt;.tsx
          </code>
          ,如果你的别名不同,记得调整导入路径。
        </li>
      </ol>
      <P>
        组件的 registry 文件就是第 1、2 步的完整清单:它会列出{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">dependencies</code>
        (npm 包)、
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          registryDependencies
        </code>
        (它依赖的组件)以及完整源码:
      </P>
      <CodeBlock
        code="https://www.cult-ui.com/r/halo-select.json"
        language="txt"
        className="mt-4"
      />

      <p className="text-muted-foreground mt-8 text-sm">
        完整英文文档见{" "}
        <a
          href="https://www.cult-ui.com/docs/installation/manual"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          cult-ui.com/docs/installation/manual
        </a>
        。
      </p>
    </article>
  )
}
