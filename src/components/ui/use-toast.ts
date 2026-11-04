import { toast as sonnerToast } from "sonner"

type ToastInput = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

/** 纯函数,不涉及 React 状态,可在事件回调或模块作用域直接调用。 */
function showToast({ title, description, variant }: ToastInput) {
  return sonnerToast(title ?? "提示", {
    description,
    className: variant === "destructive" ? "text-destructive" : undefined,
  })
}

/** shadcn 旧版 use-toast 的兼容层,实际由 sonner 负责渲染。 */
export function useToast() {
  return { toast: showToast }
}

export const toast = (input: ToastInput) => showToast(input)
