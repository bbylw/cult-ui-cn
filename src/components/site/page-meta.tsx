import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { canonicalUrl, resolveMeta } from "@/lib/site-meta"

/** 路由级标题与描述。构建后由 prerender-meta.mjs 写入静态 HTML。 */
export function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = resolveMeta(pathname)
    const url = canonicalUrl(pathname)

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
