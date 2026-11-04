import { useEffect, useState } from "react"

export type ComponentApiTypeDef = {
  name: string
  code: string
}

export type ComponentApi = {
  usage: string
  typeDefs: ComponentApiTypeDef[]
  parts: string[]
}

let cache: Promise<Record<string, ComponentApi>> | null = null

/** 按需加载构建时生成的用法与源码属性定义,避免进入主 bundle。 */
export function loadComponentApi() {
  if (!cache) {
    cache = fetch("/docs/component-api.json")
      .then((response) => (response.ok ? response.json() : {}))
      .catch(() => ({}))
  }
  return cache
}

export function useComponentApi(slug: string | undefined) {
  const [api, setApi] = useState<ComponentApi | null>(null)

  useEffect(() => {
    if (!slug) return
    let alive = true
    loadComponentApi().then((map) => {
      if (alive) setApi(map[slug] ?? null)
    })
    return () => {
      alive = false
    }
  }, [slug])

  return api
}
