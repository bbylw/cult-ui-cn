# Cult UI 中文站

基于 [Cult UI](https://www.cult-ui.com) 官方 README 与文档构建的中文落地页 + 文档站。

## 技术栈

- **Bun** 1.4 — 包管理与运行时
- **Vite** 8 + **React** 19(TS 模板)
- **Tailwind CSS** v4(`@tailwindcss/vite` 插件)
- **shadcn/ui** 组件与主题令牌(new-york 风格,oklch 变量)
- **Cult UI 组件** — 通过 `@cult-ui` registry 由 shadcn CLI 安装,源码位于 `src/components/ui/`
- **Motion**(Framer Motion)动画
- **React Router** v7(SPA 路由)

## 运行

```bash
bun install
bun run dev       # 开发服务器
bun run build     # 类型检查 + 产物构建(tsc -b && vite build)
bun run preview   # 预览 dist 产物
```

## 已安装的 Cult UI 组件(12 个)

globe、text-animate、border-beam-card、folded-card、analytics-chart、mac-screen、dynamic-island、dock、code-block、copy-button、kanban-board、fluted-glass

安装方式:

```bash
bunx shadcn@latest add @cult-ui/<名称>
```

## 对上游组件的适配(非 Next.js 环境)

| 上游写法 | 本站适配 |
|---|---|
| `next/image`(kanban-board 头像) | 标准 `<img>` |
| `next/link`(folded-card) | 标准 `<a>` |
| `next-themes`(globe) | MutationObserver 监听 `<html>` 的 `.dark` 类(`src/components/ui/globe.tsx` 内) |

另有上游小修复:`button.tsx` / `card.tsx` 的 `cn` 导入路径改为 `@/lib/utils`;`text-animate.tsx` / `dock.tsx` / `dynamic-island.tsx` 满足 `verbatimModuleSyntax` 的类型导入要求;`code-block.tsx` 修复长代码行与复制按钮重叠——`pre` 加 `pr-24` 预留按钮空间,右缘加与背景同色的渐变遮罩,溢出文字滚过按钮下方时自然淡出,复制按钮底色改为不透明。

## 目录结构

```
src/
├── components/
│   ├── site/       # 站点级组件(页头、页脚、各组件实时演示、滚动复位)
│   └── ui/         # shadcn CLI 安装的 Cult UI 组件源码
├── lib/
│   └── docs-data.ts  # 12 个组件的中文文档数据(描述/用法/Props/依赖)
└── pages/
    ├── home.tsx        # 落地页(Hero + 3D 地球 + 演示 + 特性 + 安装 + AI + CTA)
    ├── not-found.tsx
    └── docs/           # 文档区(侧边栏布局/介绍/安装/主题/组件文档页)
```

mac-screen 的屏幕框图片位于 `public/component-frames/apple-computer-img.png`,来自上游仓库。
