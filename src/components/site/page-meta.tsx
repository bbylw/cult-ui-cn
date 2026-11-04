import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { getCatalogEntry } from "@/lib/component-catalog"
import { getComponentDoc } from "@/lib/docs-data"

const SITE_NAME = "Cult UI 中文站"
const SITE_URL = "https://cult-ui.ndjp.net"
const DEFAULT_DESCRIPTION =
  "Cult UI 中文站:137 个免费开源的 shadcn/ui 动画组件,带中文简介、实时演示与一行式安装命令,基于 Tailwind CSS v4 与 Motion。"

const STATIC_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Cult UI — 免费开源的 shadcn/ui 动画组件",
    description: DEFAULT_DESCRIPTION,
  },
  "/docs": {
    title: `介绍 · ${SITE_NAME}`,
    description:
      "Cult UI 是一套 150+ 个免费开源的 shadcn/ui 动画组件,本站收录 137 个组件的源码、中文简介与在线演示。",
  },
  "/docs/components": {
    title: `组件总览 · ${SITE_NAME}`,
    description:
      "浏览 Cult UI 全部 137 个组件,按分类筛选,每页提供实时演示、中文说明与安装命令。",
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

function resolveMeta(pathname: string) {
  if (pathname.startsWith("/docs/components/")) {
    const slug = pathname.slice("/docs/components/".length)
    const doc = getComponentDoc(slug) ?? getCatalogEntry(slug)
    if (doc) {
      return {
        title: `${doc.zhName} · ${SITE_NAME}`,
        description: doc.description,
      }
    }
  }

  return (
    STATIC_META[pathname] ?? {
      title: `页面不存在 · ${SITE_NAME}`,
      description: "页面不存在或已被移动。",
    }
  )
}

/** 路由级标题与描述,弥补 SPA 只有一个 index.html head 的缺口。 */
export function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolveMeta(pathname)
    const url = `${SITE_URL}${pathname}`

    document.title = meta.title

    const setMeta = (selector: string, value: string) => {
      document.querySelector(selector)?.setAttribute("content", value)
    }

    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.append(canonical)
    }
    canonical.href = url
  }, [pathname])

  return null
}
