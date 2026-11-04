"use client"

import {
  AISDKIcon,
  HeroHeatmap,
  HeroHeatmapActions,
  HeroHeatmapBadges,
  HeroHeatmapContainer,
  HeroHeatmapContent,
  HeroHeatmapDescription,
  HeroHeatmapHeading,
  HeroHeatmapMobileVisual,
  HeroHeatmapRoot,
  HeroHeatmapVisual,
  NextjsIcon,
} from "../ui/hero-heatmap"

/** 内联菱形纹理,避免远程 logo 在 WebGL 纹理加载时失败。 */
const DIAMOND_TEXTURE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><path d="M50 2 98 50 50 98 2 50Z" fill="white"/></svg>'
  )

export default function HeroHeatmapDemo() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h3 className="flex items-center justify-center text-lg font-medium">
          Default
        </h3>
        <HeroHeatmap />
      </div>

      <div className="space-y-4">
        <h3 className="flex items-center justify-center text-lg font-medium">
          Root-level shader props
        </h3>
        <HeroHeatmap
          angle={45}
          colorBack="#0a0a0a"
          colors={[
            "#112069",
            "#1f3ca3",
            "#367c66",
            "#adfa1e",
            "#ffe77a",
            "#ff9a1f",
            "#ed40b3",
          ]}
          contour={0.6}
          image={DIAMOND_TEXTURE}
          innerGlow={0.6}
          noise={0.1}
          outerGlow={0.4}
          scale={0.8}
          speed={1.2}
          width={1280}
          height={720}
        />
      </div>

      <div className="space-y-4">
        <h3 className="flex items-center justify-center text-lg font-medium">
          Configured via props
        </h3>
        <HeroHeatmapRoot
          ctaProps={{
            href: "#",
            label: "Try NewCopy for marketing",
          }}
          description="Human-in-the-loop marketing copy software that helps teams draft, review, and ship high-converting campaigns with confidence."
          desktopShaderProps={{
            scale: 0.8,
            speed: 0.7,
            innerGlow: 0.6,
            outerGlow: 0.4,
          }}
          image={DIAMOND_TEXTURE}
          mobileShaderProps={{
            speed: 0.65,
          }}
          srTitle="Composable hero"
          subtitle="Marketing"
          techStack={[
            { name: "Next.js", version: "v16" },
            { name: "AI SDK", version: "v6" },
            { name: "Tailwind", version: "v4" },
          ]}
          title="Cursor for"
        >
          <HeroHeatmapContainer>
            <HeroHeatmapContent>
              <HeroHeatmapHeading />
              <HeroHeatmapDescription />
              <HeroHeatmapActions />
              <div
                className="hidden justify-center lg:flex lg:justify-start"
                data-slot="hero-heatmap-badges-wrap"
              >
                <HeroHeatmapBadges
                  techStack={[
                    { name: "Next.js", version: "v16", icon: NextjsIcon },
                    { name: "AI SDK", version: "v6", icon: AISDKIcon },
                  ]}
                />
              </div>
            </HeroHeatmapContent>
            <HeroHeatmapVisual />
          </HeroHeatmapContainer>
          <HeroHeatmapMobileVisual />
        </HeroHeatmapRoot>
      </div>
    </div>
  )
}
