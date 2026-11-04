<a href="https://www.cult-ui.com">
  <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/og.png" alt="Cult UI:Shadcn 的扩展。免费、开源的 shadcn/ui 动画组件。" width="100%">
</a>

# Cult UI

**150+ 个动画组件,全部免费。** 包括刚刚新增的 58 个。开源,可直接嵌入任何 shadcn/ui 项目。

[浏览组件](https://www.cult-ui.com/docs/components/dynamic-island) · [文档](https://www.cult-ui.com/docs) · [安装](https://www.cult-ui.com/docs/installation) · [更新日志](https://www.cult-ui.com/docs/changelog)

## 安装

每个组件都是一个 shadcn/ui registry 项。CLI 会把源码复制到你的项目中,代码完全归你所有。

```bash
npx shadcn@latest add https://www.cult-ui.com/r/shift-card.json
```

或者在 `components.json` 中一次性注册命名空间,之后按名称安装:

```json
{
  "registries": {
    "@cult-ui": "https://www.cult-ui.com/r/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @cult-ui/shift-card
```

组件使用 Tailwind CSS v4 和 shadcn 主题令牌,大多数组件借助 [Motion](https://motion.dev) 实现动画。每个文档页面都列出了各自的依赖。

## 最新新增

**58 个新组件。** 插画、设备样机、卡片等,与 Cult UI 其他组件一样拥有完善的文档和一行式安装。

<table>
  <tr>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/globe">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/globe-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/globe-demo-light.png" alt="Globe 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/globe">Globe</a>
    </td>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/kanban-board">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/kanban-board-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/kanban-board-demo-light.png" alt="Kanban board 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/kanban-board">Kanban board</a>
    </td>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/fluted-glass">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/fluted-glass-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/fluted-glass-demo-light.png" alt="Fluted glass 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/fluted-glass">Fluted glass</a>
    </td>
  </tr>
  <tr>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/mac-screen">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/mac-screen-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/mac-screen-demo-light.png" alt="Mac screen 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/mac-screen">Mac screen</a>
    </td>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/analytics-chart">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/analytics-chart-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/analytics-chart-demo-light.png" alt="Analytics chart 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/analytics-chart">Analytics chart</a>
    </td>
    <td width="33%">
      <a href="https://www.cult-ui.com/docs/components/folded-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/folded-card-demo-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/cult-pro-component-images/folded-card-demo-light.png" alt="Folded card 组件预览">
        </picture>
      </a>
      <br><a href="https://www.cult-ui.com/docs/components/folded-card">Folded card</a>
    </td>
  </tr>
</table>

[浏览全部组件 →](https://www.cult-ui.com/docs/components/dynamic-island)

## 基于 Cult UI 构建

**组件是免费的。基于它们构建的全栈 AI 应用是 [AI SDK Agents](https://aisdkagents.com/?utm_source=cult-ui&utm_medium=github&utm_content=readme-section-link)。** 基于 Vercel AI SDK 的 Agent 模式,附带实时预览。可通过 shadcn 安装、下载 Next.js 应用,或在 v0 中打开。

<table>
  <tr>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/example-agent-competitor?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-competitor-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-competitor-light.png" alt="竞品调研 Agent 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/example-agent-competitor?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>竞品调研 Agent</b></a>
      <br><sub>粘贴竞争对手网址,即可获得定位、定价和销售作战卡。</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/example-agent-data-analysis?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-data-analysis-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-data-analysis-light.png" alt="数据分析 Agent 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/example-agent-data-analysis?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>数据分析 Agent</b></a>
      <br><sub>上传 CSV 或 JSON,即可获得图表、异常值以及带置信度的洞察。</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/example-agent-a11y-audit?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-a11y-audit-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-a11y-audit-light.png" alt="无障碍审计 Agent 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/example-agent-a11y-audit?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>无障碍审计 Agent</b></a>
      <br><sub>对任意网站进行 WCAG 2.1 审计,并给出按优先级排序的修复计划。</sub>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/ai-artifact-table?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/ai-artifact-table-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/ai-artifact-table-light.png" alt="表格编辑器 Artifact 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/ai-artifact-table?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>表格编辑器 Artifact</b></a>
      <br><sub>通过对话即可编辑的电子表格。</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/example-agent-branding?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-branding-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/example-agent-branding-light.png" alt="品牌设计 Agent 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/example-agent-branding?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>品牌设计 Agent</b></a>
      <br><sub>提取任意网站的设计系统:设计令牌、配色和品牌个性。</sub>
    </td>
    <td width="33%" valign="top">
      <a href="https://aisdkagents.com/patterns/ai-artifact-chart?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/ai-artifact-chart-dark.png">
          <img src="https://raw.githubusercontent.com/nolly-studio/cult-ui/main/apps/www/public/migrate/blocks/ai-artifact-chart-light.png" alt="图表生成 Artifact 预览">
        </picture>
      </a>
      <br><a href="https://aisdkagents.com/patterns/ai-artifact-chart?utm_source=cult-ui&utm_medium=github&utm_content=readme-pattern-card"><b>图表生成 Artifact</b></a>
      <br><sub>通过一段对话生成烧钱率图表和财务分析。</sub>
    </td>
  </tr>
</table>

[浏览 100+ 个模式 →](https://aisdkagents.com/directory?utm_source=cult-ui&utm_medium=github&utm_content=readme-directory)

## 面向 AI Agent

这些文档既写给人看,也写给编码 Agent 看。

- [`llms.txt`](https://www.cult-ui.com/llms.txt) 索引了所有页面,[`llms-full.txt`](https://www.cult-ui.com/llms-full.txt) 则将完整文档汇总在一个文件中。
- 在任何文档 URL 后加上 `.md` 即可获得干净的 Markdown,例如 [`/docs/components/dock.md`](https://www.cult-ui.com/docs/components/dock.md)。
- [shadcn MCP 服务器](https://www.cult-ui.com/docs/mcp-server) 让 Cursor、Claude Code 和 VS Code 可以直接通过提示词搜索并安装 Cult UI 组件。

## Cult UI 永久免费

**MIT 许可证,全职维护。** AI SDK Agents 是它的收入来源。如果你在开发 AI 功能,订阅它就是支持这个库持续发展的最佳方式。也欢迎[在 GitHub 上点 Star](https://github.com/nolly-studio/cult-ui)。

工作室的更多产品:

- [AI SDK Agents](https://aisdkagents.com/?utm_source=cult-ui&utm_medium=github&utm_content=readme-studio) – 100+ 个 Vercel AI SDK Agent 模式,附带实时预览和全栈模板。
- [Newcopy](https://www.newcopy.ai) – 深懂你品牌的 AI 联合创始人,产出高转化率的营销文案。
- [Best Models](https://www.bestmodels.dev/) – Vercel AI Gateway 上最佳模型的独立排名,每日更新。
- [Eve Directory](https://www.evedirectory.com/) – Eve Agent 的开放注册表,安装前可逐一检查每个文件。

需要团队?[Nolly Studio](https://www.nolly.studio/) 是一家 AI 原生产品工作室:Agent 系统与设计工程化 UI,数周内交付。

## 贡献

阅读[贡献指南](https://github.com/nolly-studio/cult-ui/blob/main/CONTRIBUTING.md),在本地运行本仓库并添加组件。

## 许可证

[MIT](https://github.com/nolly-studio/cult-ui/blob/main/LICENSE.md) © Nolly Studio。由 [@nolansym](https://x.com/nolansym) 打造。
