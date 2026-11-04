#!/usr/bin/env bash
# 为示例 demo 生成品牌色占位图,避免缺失资源导致 404。
# 只补齐不存在的文件,不覆盖已有素材。
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

render() {
  local out="$1" w="$2" h="$3" c0="$4" c1="$5"
  if [ -f "$out" ]; then
    return 0
  fi
  mkdir -p "$(dirname "$out")"
  local args=(
    -y -hide_banner -loglevel error
    -f lavfi -i "gradients=s=${w}x${h}:c0=${c0}:c1=${c1}:x0=0:y0=0:x1=${w}:y1=${h}"
    -vf "drawgrid=w=80:h=80:t=1:c=white@0.05"
  )
  case "$out" in
    *.jpg|*.jpeg) args+=(-q:v 3) ;;
  esac
  ffmpeg "${args[@]}" -frames:v 1 "$out"
  echo "generated $out"
}

# Globe 城市卡片
render public/beijing.jpg 800 600 0x7f1d1d 0xf59e0b
render public/egypt.jpg 800 600 0x78350f 0xfbbf24
render public/nyc.jpg 800 600 0x1e293b 0x64748b
render public/pisa.jpg 800 600 0x065f46 0x34d399
render public/sf.jpg 800 600 0x7c2d12 0xfb923c
render public/singapore.jpg 800 600 0x0c4a6e 0x38bdf8
render public/sydney.jpg 800 600 0x1e3a8a 0x60a5fa
render public/tokyo.jpg 800 600 0x831843 0xf472b6

# Feature 截图
render public/feature-1.png 1440 900 0x0f172a 0x2563eb
render public/feature-2.png 1440 900 0x111827 0x7c3aed
render public/feature-3.png 1440 900 0x0b1120 0x0891b2
render public/feature-4.png 1440 900 0x1e1b4b 0x4f46e5
render public/feature-5.png 1440 900 0x0f172a 0x0ea5e9

# Onboarding 步骤图
render public/component-images/onboarding/onboarding-source-code.png 1200 800 0x064e3b 0x10b981
render public/component-images/onboarding/onboarding-skills.png 1200 800 0x134e4a 0x14b8a6
render public/component-images/onboarding/onboarding-nextjs.png 1200 800 0x0f172a 0x334155
render public/component-images/onboarding/onboarding-tip1.png 1200 800 0x1e293b 0x0ea5e9

# Terminal 背景
render public/component-images/terminal-animation/terminal-animation-bg-2.png 1600 900 0x0a0a0a 0x262626

# Feature sticky 终端截图
render public/images/vite-terminal.jpg 1400 900 0x1e1b4b 0x8b5cf6
render public/images/vitest-terminal.jpg 1400 900 0x14532d 0x22c55e
render public/images/rolldown-terminal.jpg 1400 900 0x7c2d12 0xf97316
render public/images/oxc-terminal.jpg 1400 900 0x0c4a6e 0x0ea5e9

# 纹理
render public/textures/debut-light.png 800 800 0x27272a 0x52525b
render public/textures/fabric-of-squares.png 800 800 0x3f3f46 0x71717a
render public/textures/grid-noise.png 800 800 0x18181b 0x3f3f46
render public/textures/groovepaper.png 800 800 0x292524 0x57534e
render public/textures/inflicted.png 800 800 0x1c1917 0x44403c

# 产品与占位图
render public/basic-img.png 800 600 0x1e293b 0x475569
render public/cults.png 1200 800 0x0f172a 0x6366f1
render public/product-images/apple-wallpaper.jpg 1600 1000 0x0f172a 0x1d4ed8
render public/placeholders/apple-wallpaper.jpg 1200 800 0x1e293b 0x0ea5e9
render public/placeholders/cult-dir.png 1200 800 0x312e81 0x6366f1
render public/placeholders/cult-manifest.png 1200 800 0x0f766e 0x2dd4bf
render public/placeholders/cult-rune.png 1200 800 0x701a75 0xd946ef
render public/placeholders/cult-seo.png 1200 800 0x7c2d12 0xfb923c
render public/placeholders/cult-snips.png 1200 800 0x164e63 0x22d3ee
render public/placeholders/newcopy-thumbnail.png 1200 800 0x4c1d95 0xa78bfa

echo "placeholder assets ready"
