import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

export const THEME_STORAGE_KEY = "cult-ui-cn-theme"

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark"
  } catch {
    return "dark"
  }
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
})

/** 与 next-themes 同名 API 的轻量实现,适用于 Vite SPA。 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // 隐私模式下 localStorage 不可写,主题仍在本会话内生效。
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme: theme, setTheme: setThemeState }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
