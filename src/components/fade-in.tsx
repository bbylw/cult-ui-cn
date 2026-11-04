import { motion } from "motion/react"
import type { ReactNode } from "react"

/** 演示用的淡入容器:切换 key 时重新播放淡入。 */
export function FadeIn({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
