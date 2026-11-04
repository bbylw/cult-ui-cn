import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { PageMeta } from "@/components/site/page-meta"
import { ScrollToTop } from "@/components/site/scroll-to-top"

const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({ default: module.HomePage }))
)
const DocsLayout = lazy(() =>
  import("@/pages/docs/layout").then((module) => ({
    default: module.DocsLayout,
  }))
)
const ComponentDocPage = lazy(() =>
  import("@/pages/docs/component-doc").then((module) => ({
    default: module.ComponentDocPage,
  }))
)
const ComponentsPage = lazy(() =>
  import("@/pages/docs/components").then((module) => ({
    default: module.ComponentsPage,
  }))
)
const DocsOverviewPage = lazy(() =>
  import("@/pages/docs/overview").then((module) => ({
    default: module.DocsOverviewPage,
  }))
)
const InstallationPage = lazy(() =>
  import("@/pages/docs/installation").then((module) => ({
    default: module.InstallationPage,
  }))
)
const ManualInstallationPage = lazy(() =>
  import("@/pages/docs/manual-installation").then((module) => ({
    default: module.ManualInstallationPage,
  }))
)
const McpServerPage = lazy(() =>
  import("@/pages/docs/mcp-server").then((module) => ({
    default: module.McpServerPage,
  }))
)
const LlmsPage = lazy(() =>
  import("@/pages/docs/llms").then((module) => ({ default: module.LlmsPage }))
)
const ThemingPage = lazy(() =>
  import("@/pages/docs/theming").then((module) => ({
    default: module.ThemingPage,
  }))
)
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
)

function PageFallback() {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6"
    >
      <span className="sr-only">正在加载页面</span>
      <div className="bg-muted h-8 w-1/3 rounded-md motion-safe:animate-pulse" />
      <div className="mt-6 space-y-3">
        <div className="bg-muted h-4 w-full rounded motion-safe:animate-pulse" />
        <div className="bg-muted h-4 w-5/6 rounded motion-safe:animate-pulse" />
        <div className="bg-muted h-4 w-2/3 rounded motion-safe:animate-pulse" />
      </div>
      <div className="bg-muted mt-10 h-64 w-full rounded-xl motion-safe:animate-pulse" />
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster position="top-center" />
      <ScrollToTop />
      <PageMeta />
      <SiteHeader />
      <div className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<DocsOverviewPage />} />
              <Route path="installation" element={<InstallationPage />} />
              <Route
                path="installation/manual"
                element={<ManualInstallationPage />}
              />
              <Route path="theming" element={<ThemingPage />} />
              <Route path="mcp-server" element={<McpServerPage />} />
              <Route path="llms" element={<LlmsPage />} />
              <Route path="components" element={<ComponentsPage />} />
              <Route path="components/:slug" element={<ComponentDocPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <SiteFooter />
    </div>
  )
}
