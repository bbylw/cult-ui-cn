import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <main className="bg-grid flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-black tracking-tight">404</p>
      <p className="text-muted-foreground mt-4">
        页面不存在或已被移动。
      </p>
      <Button className="mt-6" asChild>
        <Link to="/">返回首页</Link>
      </Button>
    </main>
  )
}
