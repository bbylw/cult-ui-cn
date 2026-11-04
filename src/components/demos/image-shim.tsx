import type { ImgHTMLAttributes } from "react"

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  unoptimized?: boolean
  quality?: number
  placeholder?: string
  blurDataURL?: string
}

/** next/image 的轻量替代:在 Vite 下把图片渲染成普通 img。 */
export default function Image({
  fill,
  className,
  style,
  alt = "",
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt}
      className={className}
      style={
        fill
          ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              ...style,
            }
          : style
      }
      {...props}
    />
  )
}
