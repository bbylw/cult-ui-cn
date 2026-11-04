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

export function McpServerPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">MCP 服务器</h1>
      <P>
        把{" "}
        <a
          href="https://ui.shadcn.com/docs/mcp"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          shadcn MCP 服务器
        </a>{" "}
        接入编辑器后,AI agent 就能搜索 Cult UI registry、读取组件示例,并直接把组件装进你的项目。你只需用自然语言说出需求,例如「把 cult-ui 的 Prompt Composer 换到聊天输入框」,agent
        会自己执行对应的 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">shadcn add</code> 命令。
      </P>

      <H2>在 components.json 中列出 Cult UI</H2>
      <P>
        MCP 服务器只会搜索{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>{" "}
        里登记过的 registry。第一次执行{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          npx shadcn@latest add @cult-ui/&lt;name&gt;
        </code>{" "}
        时 CLI 会自动写入;如果还没装过任何组件,请手动添加:
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
      <P>
        默认的 <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@shadcn</code>{" "}
        registry 始终可用,无需登记。
      </P>

      <H2>连接编辑器</H2>
      <P>在项目根目录执行对应客户端的 init 命令:</P>

      <H3>Cursor</H3>
      <CodeBlock
        code="npx shadcn@latest mcp init --client cursor"
        language="bash"
        className="mt-3"
      />
      <P>
        会生成{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">.cursor/mcp.json</code>。
        打开 Cursor 设置 → MCP,启用 shadcn 服务器,出现绿点即表示连接成功。
      </P>

      <H3>Claude Code</H3>
      <CodeBlock
        code="npx shadcn@latest mcp init --client claude"
        language="bash"
        className="mt-3"
      />
      <P>
        会生成{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">.mcp.json</code>。
        重启 Claude Code 后执行{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">/mcp</code>,shadcn
        服务器应显示为已连接。
      </P>

      <H3>VS Code</H3>
      <CodeBlock
        code="npx shadcn@latest mcp init --client vscode"
        language="bash"
        className="mt-3"
      />
      <P>
        会生成{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">.vscode/mcp.json</code>。
        打开该文件,点击 shadcn 服务器旁的「Start」,然后使用 agent 模式的 GitHub
        Copilot。
      </P>

      <H3>手动配置</H3>
      <P>也可以直接把这个服务器写进客户端的 MCP 配置文件:</P>
      <CodeBlock
        code={`{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}`}
        language="json"
        className="mt-3"
      />

      <H2>让 agent 找组件</H2>
      <P>
        提示词里带上「cult-ui」,agent 才会去搜索正确的 registry。例如:
      </P>
      <ul className="text-muted-foreground mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
        <li>列出 cult-ui registry 里的表单控件</li>
        <li>把 cult-ui 的 Halo Select 和 Halo Switch 加到设置页</li>
        <li>用 Halo Card 和 Border Beam Button 搭一个定价区块</li>
        <li>把聊天输入框换成 cult-ui 的 Prompt Composer</li>
      </ul>

      <H2>给 agent 更多上下文</H2>
      <P>
        MCP 服务器会返回组件源码与示例,大多数安装场景已经够用。任务更大时,再把面向
        LLM 的文档指给 agent,并把 Cult UI 规则写进{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">AGENTS.md</code>
        ——两者都见{" "}
        <Link to="/docs/llms" className="underline underline-offset-4">
          LLMs 与 Agent
        </Link>
        页面。
      </P>

      <H2>故障排查</H2>

      <H3>agent 只找到 shadcn 组件,找不到 Cult UI</H3>
      <P>
        确认{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>{" "}
        里有上面的{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">@cult-ui</code>{" "}
        条目,并在提示词里提到了「cult-ui」。修改{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>{" "}
        后需要重启 MCP 服务器。
      </P>

      <H3>客户端显示「No tools or prompts」</H3>
      <P>
        用{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          npx clear-npx-cache
        </code>{" "}
        清理 npx 缓存,然后禁用再重新启用该服务器。Cursor 中可在 View → Output
        里选择{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">MCP: project-*</code>{" "}
        查看日志。
      </P>

      <H3>安装失败或文件写到了错误的目录</H3>
      <P>
        MCP 服务器使用的是与手动安装相同的 CLI 与{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>。
        先在终端执行{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
          npx shadcn@latest add @cult-ui/halo-button
        </code>{" "}
        查看完整报错,并检查{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">components.json</code>{" "}
        中的{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">aliases</code>{" "}
        配置。
      </P>

      <p className="text-muted-foreground mt-8 text-sm">
        完整英文文档见{" "}
        <a
          href="https://www.cult-ui.com/docs/mcp-server"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          cult-ui.com/docs/mcp-server
        </a>
        。
      </p>
    </article>
  )
}
