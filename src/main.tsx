import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme"
import "./index.css"
import App from "./App.tsx"

/* 上游移植组件保留了开发期调试日志;生产构建统一静音,不污染线上控制台。 */
if (import.meta.env.PROD) {
  console.log = () => {}
}

const root = document.getElementById("root")
if (!root) throw new Error("缺少 #root 挂载点")

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
