import { toast as sonnerToast } from "sonner"

type ToastInput = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

/** shadcn 旧版 use-toast 的兼容层,实际由 sonner 负责渲染。 */
export function useToast() {
  return {
    toast: ({ title, description, variant }: ToastInput) =>
      sonnerToast(title ?? "提示", {
        description,
        className: variant === "destructive" ? "text-destructive" : undefined,
      }),
  }
}

export const toast = (input: ToastInput) => useToast().toast(input)
