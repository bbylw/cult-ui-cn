import { Route, Routes } from "react-router-dom"

import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { ScrollToTop } from "@/components/site/scroll-to-top"
import { DocsLayout } from "@/pages/docs/layout"
import { ComponentDocPage } from "@/pages/docs/component-doc"
import { DocsOverviewPage } from "@/pages/docs/overview"
import { InstallationPage } from "@/pages/docs/installation"
import { ThemingPage } from "@/pages/docs/theming"
import { HomePage } from "@/pages/home"
import { NotFoundPage } from "@/pages/not-found"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsOverviewPage />} />
            <Route path="installation" element={<InstallationPage />} />
            <Route path="theming" element={<ThemingPage />} />
            <Route path="components/:slug" element={<ComponentDocPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  )
}
