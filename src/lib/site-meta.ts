import { componentCatalog, getCatalogEntry } from "./component-catalog"
import { getComponentDoc } from "./docs-data"

export const SITE_NAME = "Cult UI 中文站"
export const SITE_URL = "https://cult-ui.ndjp.net"
export const DEFAULT_DESCRIPTION = `Cult UI 中文站:${componentCatalog.length} 个免费开源的 shadcn/ui 动画组件,带中文简介、实时演示与一行式安装命令,基于 Tailwind CSS v4 与 Motion。`

export type PageMetaInfo = {
  title: string
  description: string
}

export const STATIC_META: Record<string, PageMetaInfo> = {
  "/": {
    title: "Cult UI — 免费开源的 shadcn/ui 动画组件",
    description: DEFAULT_DESCRIPTION,
  },
  "/docs": {
    title: `介绍 · ${SITE_NAME}`,
    description: `Cult UI 是一套 150+ 个免费开源的 shadcn/ui 动画组件,本站收录 ${componentCatalog.length} 个组件的源码、中文简介与在线演示。`,
  },
  "/docs/components": {
    title: `组件总览 · ${SITE_NAME}`,
    description: `浏览 Cult UI 全部 ${componentCatalog.length} 个组件,按分类筛选,每页提供实时演示、中文说明与安装命令。`,
  },
  "/docs/installation": {
    title: `安装(Vite + bun) · ${SITE_NAME}`,
    description:
      "用 bun 从零搭建 Vite + React + Tailwind CSS v4 项目,并通过 shadcn CLI 安装 Cult UI 组件。",
  },
  "/docs/installation/manual": {
    title: `手动安装 · ${SITE_NAME}`,
    description:
      "逐项配置 components.json、cn 工具函数与 Tailwind CSS v4,再复制 Cult UI 组件源码。",
  },
  "/docs/theming": {
    title: `主题定制 · ${SITE_NAME}`,
    description:
      "通过 shadcn 主题令牌与 .dark 类定制 Cult UI 的配色、圆角与暗色模式。",
  },
  "/docs/mcp-server": {
    title: `MCP 服务器 · ${SITE_NAME}`,
    description:
      "配置 shadcn MCP 服务器,让 Cursor、Claude Code 等编码 Agent 搜索并安装 Cult UI 组件。",
  },
  "/docs/llms": {
    title: `LLMs 与 Agent · ${SITE_NAME}`,
    description:
      "Cult UI 的机器可读文档:llms.txt、llms-full.txt、组件 Markdown 与 Agent 使用规则。",
  },
}

/**
 * 静态页由 <route>/index.html 提供,GitHub Pages 会把不带尾斜杠的地址
 * 301 到带尾斜杠的形式。canonical / og:url / sitemap 必须直接写最终地址。
 */
export function canonicalUrl(pathname: string): string {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`
  return `${SITE_URL}${normalized}`
}

/** 路由级标题与描述,浏览器与预渲染脚本共用。 */
export function resolveMeta(pathname: string): PageMetaInfo {
  // GitHub Pages 会把目录地址 301 到带尾斜杠的形式,先归一化再匹配。
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname

  if (normalized.startsWith("/docs/components/")) {
    const slug = normalized.slice("/docs/components/".length)
    const doc = getComponentDoc(slug) ?? getCatalogEntry(slug)
    if (doc) {
      return {
        title: `${doc.zhName} · ${SITE_NAME}`,
        description: doc.description,
      }
    }
  }

  return (
    STATIC_META[normalized] ?? {
      title: `页面不存在 · ${SITE_NAME}`,
      description: "页面不存在或已被移动。",
    }
  )
}
