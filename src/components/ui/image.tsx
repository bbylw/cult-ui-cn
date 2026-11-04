import type { ComponentPropsWithRef, CSSProperties } from "react"

/** next/image 的静态导入形状,移植到 Vite 后仅保留 src 与尺寸信息。 */
export type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export type StaticImport = string | StaticImageData

export type ImageProps = Omit<
  ComponentPropsWithRef<"img">,
  "src" | "width" | "height"
> & {
  src: StaticImport
  width?: number | string
  height?: number | string
  /** 绝对定位铺满父容器,等价于 next/image 的 fill。 */
  fill?: boolean
  /** 以下为 next/image 专有属性,在标准 img 上静默忽略。 */
  priority?: boolean
  unoptimized?: boolean
  quality?: number
  placeholder?: string
  blurDataURL?: string
  sizes?: string
}

/**
 * Vite 下 next/image 的轻量替代:忽略 Next 专有属性,把静态导入解析成 URL,
 * 其余属性原样透传给标准 img。
 */
export default function Image({
  src,
  fill,
  priority,
  unoptimized,
  quality,
  placeholder,
  blurDataURL,
  className,
  style,
  alt = "",
  ref,
  ...props
}: ImageProps) {
  const resolvedSrc = typeof src === "string" ? src : src.src

  const fillStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : style

  return (
    <img
      alt={alt}
      src={resolvedSrc}
      className={className}
      style={fillStyle}
      ref={ref}
      {...props}
    />
  )
}

export { Image }
