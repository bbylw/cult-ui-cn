import type { ReactNode } from "react"

/** 每个演示外层的统一预览容器。 */
export function Preview({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-dots relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border p-6 ${className ?? ""}`}
    >
      {children}
    </div>
  )
}
