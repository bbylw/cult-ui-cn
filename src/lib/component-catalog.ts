/* 由官方 registry(https://www.cult-ui.com/r/registry.json)整理生成,
   覆盖 154 个 registry:ui 条目中除 18 个已废弃别名之外的 137 个组件。
   导出部件与依赖取自各组件 registry JSON。 */

export type ComponentCatalogEntry = {
  slug: string
  name: string
  zhName: string
  category: string
  description: string
  install: string
  parts: string[]
  dependencies: string[]
  /** 本站是否提供了实时演示与逐项 Props 文档 */
  ported: boolean
}

export const componentCatalog: ComponentCatalogEntry[] = [
  {
    slug: "agent-suggest-card-stack",
    name: "Agent Suggest Card Stack",
    zhName: "建议卡堆叠",
    category: "AI 组件",
    description: "AI 助手回复用的一叠建议卡,带进度条、成功与失败状态以及提交按钮。",
    install: "npx shadcn@latest add @cult-ui/agent-suggest-card-stack",
    parts: [
      "AgentSuggestBotBadge",
      "AgentSuggestCardFrame",
      "AgentSuggestCardStack",
      "AgentSuggestCommitButton",
      "SuggestionItem",
      "VercelLogo"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "ai-blob-warp",
    name: "AI Blob Warp",
    zhName: "AI 光斑头像",
    category: "AI 组件",
    description: "圆形 AI 助手头像,内部是 Paper Design Warp 着色器,遵循减弱动效设置。",
    install: "npx shadcn@latest add @cult-ui/ai-blob-warp",
    parts: [
      "AiBlobWarpAvatar"
    ],
    dependencies: [
      "@paper-design/shaders-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "ai-instructions",
    name: "AI Instructions",
    zhName: "AI 指令管理",
    category: "AI 组件",
    description: "在弹出层里搜索、开关、新建自定义 AI 指令的组合式组件。",
    install: "npx shadcn@latest add @cult-ui/ai-instructions",
    parts: [
      "Instruction",
      "Instructions",
      "InstructionsContent",
      "InstructionsCreateDialog",
      "InstructionsCreateTrigger",
      "InstructionsEmpty",
      "InstructionsFooter",
      "InstructionsGroup",
      "InstructionsHoverCard",
      "InstructionsItem",
      "InstructionsItemDescription",
      "InstructionsItemTitle"
    ],
    dependencies: [
      "@hugeicons/core-free-icons",
      "@hugeicons/react"
    ],
    ported: true
  },
  {
    slug: "prompt-composer",
    name: "Prompt Composer",
    zhName: "提示词输入器",
    category: "AI 组件",
    description: "多行提示词输入框,带着色器头像、交错占位符、加载线与发送/附件按钮。",
    install: "npx shadcn@latest add @cult-ui/prompt-composer",
    parts: [
      "AiBlobWarpAvatar",
      "PromptComposer",
      "PromptTextarea"
    ],
    dependencies: [
      "@base-ui/react",
      "@paper-design/shaders-react",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "prompt-library",
    name: "Prompt Library",
    zhName: "提示词库",
    category: "AI 组件",
    description: "按分类浏览、插入和管理提示词模板,支持自定义提示词。",
    install: "npx shadcn@latest add @cult-ui/prompt-library",
    parts: [
      "Prompt",
      "PromptLibrary",
      "PromptLibraryContent",
      "PromptLibraryCreateDialog",
      "PromptLibraryCreateTrigger",
      "PromptLibraryEmpty",
      "PromptLibraryFooter",
      "PromptLibraryGroup",
      "PromptLibraryHoverCard",
      "PromptLibraryItem",
      "PromptLibraryItemDescription",
      "PromptLibraryItemTitle"
    ],
    dependencies: [
      "@hugeicons/core-free-icons",
      "@hugeicons/react"
    ],
    ported: true
  },
  {
    slug: "bg-animate-button",
    name: "Background Animate Button",
    zhName: "渐变背景按钮",
    category: "按钮",
    description: "背景为旋转圆锥渐变的按钮,内置预设渐变、CVA 变体与 asChild。",
    install: "npx shadcn@latest add @cult-ui/bg-animate-button",
    parts: [
      "BgAnimateButton"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "border-beam-button",
    name: "Border Beam Button",
    zhName: "流光边框按钮",
    category: "按钮",
    description: "shadcn 按钮外包一圈流动光束,提供文字与图标两种变体。",
    install: "npx shadcn@latest add @cult-ui/border-beam-button",
    parts: [
      "BorderBeamButton",
      "BorderBeamIconButton"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "cosmic-button",
    name: "Cosmic Button",
    zhName: "宇宙按钮",
    category: "按钮",
    description: "带光晕宇宙渐变边框的链接或按钮,悬停时边框扩大,适合首屏 CTA。",
    install: "npx shadcn@latest add @cult-ui/cosmic-button",
    parts: [
      "CosmicButton"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "family-button",
    name: "Family Button",
    zhName: "Family 浮动按钮",
    category: "按钮",
    description: "从加号展开成内容面板的浮动按钮,灵感来自 Family 应用。",
    install: "npx shadcn@latest add @cult-ui/family-button",
    parts: [
      "FamilyButton"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "gradient-button-group",
    name: "Gradient Button Group",
    zhName: "渐变按钮组",
    category: "按钮",
    description: "分层图标按钮组,带流动的激活光环与内置明暗主题切换。",
    install: "npx shadcn@latest add @cult-ui/gradient-button-group",
    parts: [
      "GradientButtonGroup"
    ],
    dependencies: [
      "motion",
      "next-themes"
    ],
    ported: true
  },
  {
    slug: "halo-button",
    name: "Halo Button",
    zhName: "Halo 按钮",
    category: "按钮",
    description: "带流动渐变边框、磨砂填充与交错文字的主动作按钮,内置加载态。",
    install: "npx shadcn@latest add @cult-ui/halo-button",
    parts: [
      "HaloButton"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "metal-button",
    name: "Metal Button",
    zhName: "金属按钮",
    category: "按钮",
    description: "shadcn 按钮外包 MetalFx 液态金属光环,有文字与图标变体。",
    install: "npx shadcn@latest add @cult-ui/metal-button",
    parts: [
      "MetalButton",
      "MetalIconButton"
    ],
    dependencies: [
      "metal-fx",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "neumorph-button",
    name: "Neumorph Button",
    zhName: "新拟态按钮",
    category: "按钮",
    description: "柔光阴影的新拟态按钮,按下带触感回弹。",
    install: "npx shadcn@latest add @cult-ui/neumorph-button",
    parts: [],
    dependencies: [
      "class-variance-authority",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "organic-button",
    name: "Organic Button",
    zhName: "有机形状按钮",
    category: "按钮",
    description: "两端固定 SVG 端帽的链接式 CTA,通过 CSS 变量共享表面配色。",
    install: "npx shadcn@latest add @cult-ui/organic-button",
    parts: [
      "OrganicButton"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "texture-button",
    name: "Texture Button",
    zhName: "纹理按钮",
    category: "按钮",
    description: "带纹理叠加层的按钮,提供多种预设变体。",
    install: "npx shadcn@latest add @cult-ui/texture-button",
    parts: [
      "TextureButton"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "border-beam-card",
    name: "Border Beam Card",
    zhName: "流光边框卡片",
    category: "卡片",
    description: "一道光束沿卡片边缘循环流动,基于 shadcn Card 的组合式 API。",
    install: "npx shadcn@latest add @cult-ui/border-beam-card",
    parts: [
      "BorderBeamCard",
      "BorderBeamCardAction",
      "BorderBeamCardContent",
      "BorderBeamCardDescription",
      "BorderBeamCardFooter",
      "BorderBeamCardHeader",
      "BorderBeamCardTitle"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "cutout-card",
    name: "Cutout Card",
    zhName: "切角图片卡",
    category: "卡片",
    description: "带切角装饰、内嵌标签、图钉与悬停操作按钮的图片卡片。",
    install: "npx shadcn@latest add @cult-ui/cutout-card",
    parts: [
      "CutoutCard",
      "CutoutCardAction",
      "CutoutCardContent",
      "CutoutCardFooter",
      "CutoutCardImage",
      "CutoutCardInsetLabel",
      "CutoutCardMedia",
      "CutoutCardOverlay",
      "CutoutCardPin",
      "CutoutCorner",
      "cutoutCardSurfaceClassName",
      "cutoutCardSurfaceShadowClassName"
    ],
    dependencies: [
      "motion",
      "@radix-ui/react-use-controllable-state"
    ],
    ported: true
  },
  {
    slug: "expandable",
    name: "Expandable",
    zhName: "可展开卡片",
    category: "卡片",
    description: "在收起与展开状态间平滑动画,展开后显示更多细节。",
    install: "npx shadcn@latest add @cult-ui/expandable",
    parts: [
      "Expandable",
      "ExpandableCard",
      "ExpandableCardContent",
      "ExpandableCardFooter",
      "ExpandableCardHeader",
      "ExpandableContent",
      "ExpandableTrigger",
      "useExpandable"
    ],
    dependencies: [
      "motion",
      "react-use-measure"
    ],
    ported: true
  },
  {
    slug: "folded-card",
    name: "Folded Card",
    zhName: "折角卡片",
    category: "卡片",
    description: "右上角带真实翻折效果的卡片,适合模板集市与资源目录。",
    install: "npx shadcn@latest add @cult-ui/folded-card",
    parts: [
      "ChatTail",
      "FoldedCard",
      "FoldedCardBadge",
      "FoldedCardBorder",
      "FoldedCardDescription",
      "FoldedCardFold",
      "FoldedCardFooter",
      "FoldedCardGrid",
      "FoldedCardHeading",
      "FoldedCardLink",
      "FoldedCardPreview",
      "FoldedCardTitle"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "halo-card",
    name: "Halo Card",
    zhName: "Halo 卡片",
    category: "卡片",
    description: "带流动渐变边框、磨砂表面与页眉/内容/页脚插槽的卡片。",
    install: "npx shadcn@latest add @cult-ui/halo-card",
    parts: [
      "HaloCard",
      "HaloCardAction",
      "HaloCardButton",
      "HaloCardContent",
      "HaloCardDescription",
      "HaloCardFooter",
      "HaloCardHeader",
      "HaloCardTitle"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "minimal-card",
    name: "Minimal Card",
    zhName: "极简卡片",
    category: "卡片",
    description: "干净克制的卡片,只有细微边框与悬停阴影。",
    install: "npx shadcn@latest add @cult-ui/minimal-card",
    parts: [
      "MinimalCard",
      "MinimalCardContent",
      "MinimalCardDescription",
      "MinimalCardFooter",
      "MinimalCardImage",
      "MinimalCardTitle"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "organic-card",
    name: "Organic Card",
    zhName: "有机卡片",
    category: "卡片",
    description: "营销用组合卡片:图片插槽、眉标、标题、正文、强调色带与底部 CTA。",
    install: "npx shadcn@latest add @cult-ui/organic-card",
    parts: [
      "OrganicCard",
      "OrganicCardBand",
      "OrganicCardBody",
      "OrganicCardDescription",
      "OrganicCardEyebrow",
      "OrganicCardFooter",
      "OrganicCardFooterIcon",
      "OrganicCardFooterLabel",
      "OrganicCardImage",
      "OrganicCardTitle"
    ],
    dependencies: [
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "organic-card-small",
    name: "Organic Card Small",
    zhName: "有机小卡片",
    category: "卡片",
    description: "带 SVG 轮廓的小卡片,展示分类与日期,悬停时有形变动画。",
    install: "npx shadcn@latest add @cult-ui/organic-card-small",
    parts: [
      "OrganicCardSmall"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "shadow-card",
    name: "Shadow Card",
    zhName: "阴影卡片",
    category: "卡片",
    description: "L 形成型阴影的营销卡片,可选像素渐变网格与链接根节点。",
    install: "npx shadcn@latest add @cult-ui/shadow-card",
    parts: [
      "ShadowCard",
      "ShadowCardBackdrop",
      "ShadowCardBevel",
      "ShadowCardFooter",
      "ShadowCardGlow",
      "ShadowCardPixelGradient",
      "ShadowCardVerticalText"
    ],
    dependencies: [
      "@radix-ui/react-slot"
    ],
    ported: true
  },
  {
    slug: "shift-card",
    name: "Shift Card",
    zhName: "位移动画卡片",
    category: "卡片",
    description: "悬停时内部图层错位滑动的卡片。",
    install: "npx shadcn@latest add @cult-ui/shift-card",
    parts: [
      "ShiftCard",
      "ShiftCardContent",
      "ShiftCardHeader"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "texture-card",
    name: "Texture Card",
    zhName: "纹理卡片",
    category: "卡片",
    description: "带纹理背景与多种样式预设的卡片。",
    install: "npx shadcn@latest add @cult-ui/texture-card",
    parts: [
      "TextureCard",
      "TextureCardContent",
      "TextureCardDescription",
      "TextureCardFooter",
      "TextureCardHeader",
      "TextureCardStyled",
      "TextureCardTitle",
      "TextureSeparator"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "base-select",
    name: "Base Select",
    zhName: "Base UI 选择器",
    category: "表单与输入",
    description: "Halo Select 底层的 Base UI 选择器原语(Select、Item、Group 等)。",
    install: "npx shadcn@latest add @cult-ui/base-select",
    parts: [
      "Select",
      "SelectContent",
      "SelectGroup",
      "SelectItem",
      "SelectLabel",
      "SelectScrollDownButton",
      "SelectScrollUpButton",
      "SelectSeparator",
      "SelectTrigger",
      "SelectValue"
    ],
    dependencies: [
      "@base-ui/react",
      "@hugeicons/react",
      "@hugeicons/core-free-icons"
    ],
    ported: true
  },
  {
    slug: "border-beam-input",
    name: "Border Beam Input",
    zhName: "流光输入框",
    category: "表单与输入",
    description: "Base UI 输入框与输入组上加流动光束,可选底边或整圈。",
    install: "npx shadcn@latest add @cult-ui/border-beam-input",
    parts: [
      "BorderBeamInput",
      "BorderBeamInputGroup",
      "BorderBeamInputGroupAddon",
      "BorderBeamInputGroupButton",
      "BorderBeamInputGroupInput",
      "BorderBeamInputGroupText",
      "BorderBeamInputGroupTextarea"
    ],
    dependencies: [
      "@base-ui/react"
    ],
    ported: true
  },
  {
    slug: "color-picker",
    name: "Color Picker",
    zhName: "颜色选择器",
    category: "表单与输入",
    description: "HLS 滑杆、HEX 输入与预设色板组成的取色器。",
    install: "npx shadcn@latest add @cult-ui/color-picker",
    parts: [
      "ColorPicker"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "halo-dropzone",
    name: "Halo Dropzone",
    zhName: "Halo 拖放上传",
    category: "表单与输入",
    description: "带动画虚线边框与文件类型图标的拖放上传区,支持键盘操作。",
    install: "npx shadcn@latest add @cult-ui/halo-dropzone",
    parts: [
      "DropzoneFileTypeGlyph",
      "DropzoneUploadFileList",
      "DropzoneUploadFileRow",
      "FilePlaceholderKind",
      "FileTypePlaceholder",
      "HaloDropzone",
      "QueuedFile",
      "fileKey",
      "formatFileBytes",
      "inferPlaceholderKind"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-field",
    name: "Halo Field",
    zhName: "Halo 表单字段",
    category: "表单与输入",
    description: "为 Halo Input 与 Textarea 提供的标签、描述与错误提示布局。",
    install: "npx shadcn@latest add @cult-ui/halo-field",
    parts: [
      "HaloField",
      "HaloFieldContent",
      "HaloFieldDescription",
      "HaloFieldError",
      "HaloFieldLabel",
      "HaloFieldTitle"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "halo-input",
    name: "Halo Input",
    zhName: "Halo 输入框",
    category: "表单与输入",
    description: "单行与多行输入框,磨砂填充加渐变边框,含错误态。",
    install: "npx shadcn@latest add @cult-ui/halo-input",
    parts: [
      "HaloInput",
      "HaloTextarea"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-search",
    name: "Halo Search",
    zhName: "Halo 搜索框",
    category: "表单与输入",
    description: "带流动渐变边框、交错占位符、清除与加载态的搜索框。",
    install: "npx shadcn@latest add @cult-ui/halo-search",
    parts: [
      "AiBlobWarpAvatar",
      "DeletedTextBlurReveal",
      "HaloSearchInput"
    ],
    dependencies: [
      "@paper-design/shaders-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-select",
    name: "Halo Select",
    zhName: "Halo 选择器",
    category: "表单与输入",
    description: "组合式动画下拉选择器,渐变边框、磨砂填充与交错标签。",
    install: "npx shadcn@latest add @cult-ui/halo-select",
    parts: [
      "HaloSelect",
      "HaloSelectContent",
      "HaloSelectGroup",
      "HaloSelectItem",
      "HaloSelectLabel",
      "HaloSelectScrollDownButton",
      "HaloSelectScrollUpButton",
      "HaloSelectSeparator",
      "HaloSelectTrailingIndicator",
      "HaloSelectTrigger",
      "HaloSelectValue",
      "PolishedSelectItem"
    ],
    dependencies: [
      "@base-ui/react",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-segmented",
    name: "Halo Segmented",
    zhName: "Halo 分段控件",
    category: "表单与输入",
    description: "磨砂轨道加弹簧滑块的分段控件。",
    install: "npx shadcn@latest add @cult-ui/halo-segmented",
    parts: [
      "HaloSegmented",
      "HaloSegmentedItem"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-switch",
    name: "Halo Switch",
    zhName: "Halo 开关",
    category: "表单与输入",
    description: "弹簧滑块、磨砂轨道并扩大触控热区的开关。",
    install: "npx shadcn@latest add @cult-ui/halo-switch",
    parts: [
      "HaloSwitch"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-toggle-group",
    name: "Halo Toggle Group",
    zhName: "Halo 切换组",
    category: "表单与输入",
    description: "单选切换组,磨砂轨道加弹簧滑块,用于视图与对齐切换。",
    install: "npx shadcn@latest add @cult-ui/halo-toggle-group",
    parts: [
      "HaloToggleGroup",
      "HaloToggleGroupItem"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "direction-aware-tabs",
    name: "Direction Aware Tabs",
    zhName: "方向感知标签页",
    category: "导航与标签页",
    description: "内容按方向左右滑动切换,并随内容平滑改变尺寸。",
    install: "npx shadcn@latest add @cult-ui/direction-aware-tabs",
    parts: [
      "DirectionAwareTabs"
    ],
    dependencies: [
      "motion",
      "react-use-measure"
    ],
    ported: true
  },
  {
    slug: "dock",
    name: "Dock",
    zhName: "程序坞",
    category: "导航与标签页",
    description: "macOS 风格程序坞,鼠标靠近时图标放大,点击弹出动效。",
    install: "npx shadcn@latest add @cult-ui/dock",
    parts: [
      "Dock",
      "DockCard",
      "DockCardInner",
      "DockDivider",
      "useDock",
      "useMousePosition"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-tabs",
    name: "Halo Tabs",
    zhName: "Halo 标签页",
    category: "导航与标签页",
    description: "Base UI 标签页,带下滑线或胶囊指示器与渐变配色。",
    install: "npx shadcn@latest add @cult-ui/halo-tabs",
    parts: [
      "HaloTabs",
      "HaloTabsContent",
      "HaloTabsIndicator",
      "HaloTabsList",
      "HaloTabsTrigger",
      "HaloTabsVariant"
    ],
    dependencies: [
      "@base-ui/react"
    ],
    ported: true
  },
  {
    slug: "tabs-illustration-vercel",
    name: "Tabs Illustration (Vercel)",
    zhName: "Vercel 风格标签页",
    category: "导航与标签页",
    description: "切换时展示 Vercel 风格插画的标签页。",
    install: "npx shadcn@latest add @cult-ui/tabs-illustration-vercel",
    parts: [],
    dependencies: [],
    ported: true
  },
  {
    slug: "toolbar-expandable",
    name: "Toolbar Expandable",
    zhName: "可扩展工具栏",
    category: "导航与标签页",
    description: "分步展开的工具栏,带动画与增强滚动。",
    install: "npx shadcn@latest add @cult-ui/toolbar-expandable",
    parts: [],
    dependencies: [
      "motion",
      "@radix-ui/react-scroll-area"
    ],
    ported: true
  },
  {
    slug: "family-drawer",
    name: "Family Drawer",
    zhName: "多视图抽屉",
    category: "浮层与抽屉",
    description: "基于 Vaul 的底部多视图抽屉,切换视图时平滑改变高度。",
    install: "npx shadcn@latest add @cult-ui/family-drawer",
    parts: [
      "FamilyDrawerAnimatedContent",
      "FamilyDrawerAnimatedWrapper",
      "FamilyDrawerButton",
      "FamilyDrawerClose",
      "FamilyDrawerContent",
      "FamilyDrawerDescription",
      "FamilyDrawerHeader",
      "FamilyDrawerOverlay",
      "FamilyDrawerPortal",
      "FamilyDrawerRoot",
      "FamilyDrawerSecondaryButton",
      "FamilyDrawerTitle"
    ],
    dependencies: [
      "motion",
      "react-use-measure",
      "vaul",
      "@radix-ui/react-slot"
    ],
    ported: true
  },
  {
    slug: "floating-panel",
    name: "Floating Panel",
    zhName: "浮动面板",
    category: "浮层与抽屉",
    description: "从触发器位置形变展开的浮动面板,含表单与文本域部件。",
    install: "npx shadcn@latest add @cult-ui/floating-panel",
    parts: [
      "FloatingPanelBody",
      "FloatingPanelButton",
      "FloatingPanelCloseButton",
      "FloatingPanelContent",
      "FloatingPanelFooter",
      "FloatingPanelForm",
      "FloatingPanelHeader",
      "FloatingPanelLabel",
      "FloatingPanelRoot",
      "FloatingPanelSubmitButton",
      "FloatingPanelTextarea",
      "FloatingPanelTrigger"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "halo-notification",
    name: "Halo Notification",
    zhName: "Halo 通知",
    category: "浮层与抽屉",
    description: "行内通知卡片,多种边框风格与交错文字动画,可关闭。",
    install: "npx shadcn@latest add @cult-ui/halo-notification",
    parts: [
      "HaloPolishedNotification",
      "HaloPolishedToastSurface",
      "RimVariant"
    ],
    dependencies: [
      "@base-ui/react",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-toast",
    name: "Halo Toast",
    zhName: "Halo Toast",
    category: "浮层与抽屉",
    description: "基于 Sonner 的 Halo 风格 Toast,支持操作按钮,需在根布局挂载一次。",
    install: "npx shadcn@latest add @cult-ui/halo-toast",
    parts: [
      "PolishedToastOptions",
      "PolishedToastSurface",
      "PolishedToaster",
      "RimVariant",
      "showPolishedToast"
    ],
    dependencies: [
      "lucide-react",
      "motion",
      "sonner"
    ],
    ported: true
  },
  {
    slug: "intro-disclosure",
    name: "Intro Disclosure",
    zhName: "新手引导",
    category: "浮层与抽屉",
    description: "桌面用 Dialog、移动端用 Drawer 的多步引导,记录已关闭状态。",
    install: "npx shadcn@latest add @cult-ui/intro-disclosure",
    parts: [
      "IntroDisclosure"
    ],
    dependencies: [
      "motion",
      "react-use-measure",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "popover",
    name: "Popover",
    zhName: "弹出层",
    category: "浮层与抽屉",
    description: "带表单支持与流畅过渡的动画弹出层。",
    install: "npx shadcn@latest add @cult-ui/popover",
    parts: [
      "PopoverBody",
      "PopoverButton",
      "PopoverCloseButton",
      "PopoverContent",
      "PopoverFooter",
      "PopoverForm",
      "PopoverHeader",
      "PopoverLabel",
      "PopoverRoot",
      "PopoverSubmitButton",
      "PopoverTextarea",
      "PopoverTrigger"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "popover-form",
    name: "Popover Form",
    zhName: "表单弹出层",
    category: "浮层与抽屉",
    description: "带成功态与动画过渡的表单弹出层。",
    install: "npx shadcn@latest add @cult-ui/popover-form",
    parts: [
      "PopoverForm",
      "PopoverFormButton",
      "PopoverFormCutOutLeftIcon",
      "PopoverFormCutOutRightIcon",
      "PopoverFormSeparator",
      "PopoverFormSuccess"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "side-panel",
    name: "Side Panel",
    zhName: "侧边面板",
    category: "浮层与抽屉",
    description: "可从任意方向滑入的侧边面板。",
    install: "npx shadcn@latest add @cult-ui/side-panel",
    parts: [
      "SidePanel"
    ],
    dependencies: [
      "motion",
      "react-use-measure"
    ],
    ported: true
  },
  {
    slug: "gradient-heading",
    name: "Gradient Heading",
    zhName: "渐变标题",
    category: "文字与排版",
    description: "渐变文字标题,提供颜色、字号、字重的 CVA 变体与 asChild。",
    install: "npx shadcn@latest add @cult-ui/gradient-heading",
    parts: [
      "GradientHeading",
      "Size",
      "Variant",
      "Weight",
      "headingVariants"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "neumorph-eyebrow",
    name: "Neumorph Eyebrow",
    zhName: "新拟态眉标",
    category: "文字与排版",
    description: "柔光阴影的新拟态小标题。",
    install: "npx shadcn@latest add @cult-ui/neumorph-eyebrow",
    parts: [
      "NeumorphEyebrow"
    ],
    dependencies: [
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "pixel-heading-character",
    name: "Pixel Heading Character",
    zhName: "像素标题(逐字)",
    category: "文字与排版",
    description: "逐字符动画的像素字体标题,提供四种动画模式。",
    install: "npx shadcn@latest add @cult-ui/pixel-heading-character",
    parts: [
      "PixelHeading",
      "PixelHeadingMode"
    ],
    dependencies: [
      "geist"
    ],
    ported: true
  },
  {
    slug: "pixel-heading-word",
    name: "Pixel Heading Word",
    zhName: "像素标题(整词)",
    category: "文字与排版",
    description: "整词切换像素字体的标题,悬停可换体或循环。",
    install: "npx shadcn@latest add @cult-ui/pixel-heading-word",
    parts: [
      "PixelHeading"
    ],
    dependencies: [
      "geist"
    ],
    ported: true
  },
  {
    slug: "pixel-paragraph-words",
    name: "Pixel Paragraph Words",
    zhName: "像素段落",
    category: "文字与排版",
    description: "段落中指定单词渲染为可交互的像素字体,悬停切换。",
    install: "npx shadcn@latest add @cult-ui/pixel-paragraph-words",
    parts: [
      "PixelParagraph"
    ],
    dependencies: [
      "geist"
    ],
    ported: true
  },
  {
    slug: "pixel-paragraph-words-inverse",
    name: "Pixel Paragraph Words Inverse",
    zhName: "反相像素段落",
    category: "文字与排版",
    description: "整段像素字体,只有指定单词逃逸为可交互的无衬线或等宽字体。",
    install: "npx shadcn@latest add @cult-ui/pixel-paragraph-words-inverse",
    parts: [
      "PixelParagraphInverse"
    ],
    dependencies: [
      "geist"
    ],
    ported: true
  },
  {
    slug: "text-animate",
    name: "Text Animate",
    zhName: "文字动画",
    category: "文字与排版",
    description: "8 种入场效果的文字动画,支持按词或按字符交错。",
    install: "npx shadcn@latest add @cult-ui/text-animate",
    parts: [
      "TextAnimate"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "text-gif",
    name: "Text GIF",
    zhName: "GIF 文字",
    category: "文字与排版",
    description: "模拟 GIF 循环跳动的文字效果。",
    install: "npx shadcn@latest add @cult-ui/text-gif",
    parts: [
      "TextGif"
    ],
    dependencies: [
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "typewriter",
    name: "Typewriter",
    zhName: "打字机",
    category: "文字与排版",
    description: "可调打字速度与光标动画的打字机文字。",
    install: "npx shadcn@latest add @cult-ui/typewriter",
    parts: [
      "Typewriter"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "bg-animated-fractal-dot-grid",
    name: "Background Animated Fractal Dot Grid",
    zhName: "分形点阵背景",
    category: "背景与纹理",
    description: "带性能优化与响应式处理的分形点阵动画背景。",
    install: "npx shadcn@latest add @cult-ui/bg-animated-fractal-dot-grid",
    parts: [
      "FractalDotGrid"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "bg-animated-gradient",
    name: "Background Animated Gradient",
    zhName: "渐变背景",
    category: "背景与纹理",
    description: "颜色过渡可自定义的动画渐变背景。",
    install: "npx shadcn@latest add @cult-ui/bg-animated-gradient",
    parts: [
      "GradientAnimation"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "bg-image-texture",
    name: "Background Image Texture",
    zhName: "图片纹理背景",
    category: "背景与纹理",
    description: "织物、网格噪点、纸张等纹理,可调不透明度。",
    install: "npx shadcn@latest add @cult-ui/bg-image-texture",
    parts: [
      "BackgroundImageTexture",
      "TextureVariant"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "bg-media",
    name: "Background Media",
    zhName: "背景媒体",
    category: "背景与纹理",
    description: "全屏图片或视频背景,带明暗遮罩与播放/暂停按钮。",
    install: "npx shadcn@latest add @cult-ui/bg-media",
    parts: [
      "BackgroundMedia"
    ],
    dependencies: [
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "canvas-fractal-grid",
    name: "Canvas Fractal Grid",
    zhName: "画布分形网格",
    category: "背景与纹理",
    description: "跟随鼠标的分形点阵画布,带波浪与光晕,适合首屏。",
    install: "npx shadcn@latest add @cult-ui/canvas-fractal-grid",
    parts: [
      "CanvasFractalGrid"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "grid-beam",
    name: "Grid Beam",
    zhName: "网格光束",
    category: "背景与纹理",
    description: "网格上流动的光束画布,提供调色板预设、SVG 分隔与 useGridBeam。",
    install: "npx shadcn@latest add @cult-ui/grid-beam",
    parts: [
      "BeamCanvasRuntimeConfig",
      "GridBeam",
      "GridBeamCanvas",
      "GridBeamColorScheme",
      "GridBeamContent",
      "GridBeamDividers",
      "GridBeamPaletteKey",
      "GridBeamPaletteLayers",
      "GridBeamThemeProp",
      "PALETTES",
      "PaletteBand",
      "RGB"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "stripe-bg-guides",
    name: "Stripe BG Guides",
    zhName: "参考线背景",
    category: "背景与纹理",
    description: "Stripe 风格的背景参考线与动画图案。",
    install: "npx shadcn@latest add @cult-ui/stripe-bg-guides",
    parts: [
      "StripeBgGuides"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "svg-bands",
    name: "SVG Bands",
    zhName: "SVG 分段带",
    category: "背景与纹理",
    description: "宽幅分段带、城垛与锯齿边缘、陡峭首屏切角与装饰框。",
    install: "npx shadcn@latest add @cult-ui/svg-bands",
    parts: [
      "AngledCornerPanelSvg",
      "ArrowChevronBandSvg",
      "BandShape",
      "BandShapeFlip",
      "BottomBandSteepRightSvg",
      "CastleWallBandSvg",
      "CenterTabBandSvg",
      "CenterTabTopBandSvg",
      "DiagonalSlashBandSvg",
      "DualSideNotchFrameSvg",
      "FlatSingleAngleBandSvg",
      "NotchedTopBandSvg"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "svg-shapes",
    name: "SVG Shapes",
    zhName: "SVG 形状面板",
    category: "背景与纹理",
    description: "宽幅 SVG 形状与面板,用于背景和首屏装饰。",
    install: "npx shadcn@latest add @cult-ui/svg-shapes",
    parts: [
      "ArrowPentagonShapeSvg",
      "CircleShapeSvg",
      "CubeWireshapeSvg",
      "DodecahedronWireshapeSvg",
      "EllipseShapeSvg",
      "FlowerOfLifeSvg",
      "GoldenSpiralSvg",
      "GothicArchPanelSvg",
      "IcosahedronWireshapeSvg",
      "KiteShapeSvg",
      "MetatronsCubeSvg",
      "OctahedronWireshapeSvg"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "svg-shapes-animated",
    name: "SVG Shapes Animated",
    zhName: "滚动描边 SVG",
    category: "背景与纹理",
    description: "滚动触发的描边绘制动画,配合宽幅 SVG 形状使用。",
    install: "npx shadcn@latest add @cult-ui/svg-shapes-animated",
    parts: [
      "ArrowPentagonShapeSvg",
      "ChevronShapeSvg",
      "CircleShapeSvg",
      "CrossShapeSvg",
      "CubeWireframeSvg",
      "DiamondShapeSvg",
      "DodecahedronWireframeSvg",
      "DoubleNotchTechShapeSvg",
      "EllipseShapeSvg",
      "FlowerOfLifeSvg",
      "GoldenSpiralSvg",
      "GothicArchPanelSvg"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "texture-overlay",
    name: "Texture Overlay",
    zhName: "纹理叠加",
    category: "背景与纹理",
    description: "多种 CSS 渐变图案叠加层,给背景增加质感。",
    install: "npx shadcn@latest add @cult-ui/texture-overlay",
    parts: [
      "TextureOverlay",
      "TextureType"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "circuit-board",
    name: "Circuit Board",
    zhName: "电路板插画",
    category: "插画",
    description: "发光走线与中心芯片的 SVG 电路动画,适合 AI 与开发者工具。",
    install: "npx shadcn@latest add @cult-ui/circuit-board",
    parts: [
      "CircuitBoard"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "fluid-ai-workloads",
    name: "Fluid AI Workloads",
    zhName: "AI 负载插画",
    category: "插画",
    description: "用分叉连线连接卡片的 SVG 插画,展示 AI 负载与算力。",
    install: "npx shadcn@latest add @cult-ui/fluid-ai-workloads",
    parts: [
      "FluidAIWorkloads",
      "FluidAIWorkloadsBranchLines",
      "FluidAIWorkloadsCenterCard",
      "FluidAIWorkloadsLeftCard",
      "FluidAIWorkloadsRightCards",
      "FluidAIWorkloadsShadowLayer"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "gateway-endpoint-illustration",
    name: "Gateway Endpoint Illustration",
    zhName: "网关端点插画",
    category: "插画",
    description: "一个 API 端点扇出到四个模型提供商的 SVG 插画。",
    install: "npx shadcn@latest add @cult-ui/gateway-endpoint-illustration",
    parts: [
      "AnthropicIcon",
      "GatewayEndpoint",
      "GatewayEndpointBackground",
      "GatewayEndpointCenter",
      "GatewayEndpointConnectionLines",
      "GatewayEndpointIconBubble",
      "GatewayEndpointInputLine",
      "GatewayEndpointRadialCircles",
      "GatewayEndpointScene",
      "GatewayEndpointSvg",
      "MoreIcon",
      "OpenAIIcon"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "gateway-route-illustration",
    name: "Gateway Route Illustration",
    zhName: "网关路由插画",
    category: "插画",
    description: "用弧线与圆环表现网关在多个模型提供商之间路由请求。",
    install: "npx shadcn@latest add @cult-ui/gateway-route-illustration",
    parts: [
      "AnthropicIcon",
      "CohereIcon",
      "GatewayRouting",
      "GatewayRoutingArcs",
      "GatewayRoutingBackground",
      "GatewayRoutingCenter",
      "GatewayRoutingGradientRing",
      "GatewayRoutingIconBubble",
      "GatewayRoutingScene",
      "GatewayRoutingSvg",
      "GeminiIcon"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "gateway-svg-illustration",
    name: "Gateway SVG Illustration",
    zhName: "网关 SVG 插画",
    category: "插画",
    description: "把多条线汇入中心网关的 SVG 枢纽插画。",
    install: "npx shadcn@latest add @cult-ui/gateway-svg-illustration",
    parts: [
      "GatewayOverhead",
      "GatewayOverheadBackground",
      "GatewayOverheadBackgroundGrid",
      "GatewayOverheadBottomLine",
      "GatewayOverheadCenterIcon",
      "GatewayOverheadCenterLine",
      "GatewayOverheadHub",
      "GatewayOverheadLeftLine",
      "GatewayOverheadNodeBox",
      "GatewayOverheadRightLine",
      "GatewayOverheadScene",
      "GatewayOverheadSvg"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-card-grid",
    name: "Illustration Card Grid",
    zhName: "插画卡片网格",
    category: "插画",
    description: "带内置 AI 网关插画的功能卡片网格。",
    install: "npx shadcn@latest add @cult-ui/illustration-card-grid",
    parts: [
      "DEFAULT_ILLUSTRATION_CARD_GRID_ITEMS",
      "IllustrationCardGrid",
      "IllustrationCardGridItem"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-comment-bubble",
    name: "Illustration Comment Bubble",
    zhName: "评论气泡插画",
    category: "插画",
    description: "含头像、行内代码与光标的评论气泡,用于评审与聊天。",
    install: "npx shadcn@latest add @cult-ui/illustration-comment-bubble",
    parts: [
      "Code",
      "CommentBubble",
      "CommentBubbleDemo"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-cursor",
    name: "Illustration Cursor",
    zhName: "多人光标插画",
    category: "插画",
    description: "带名字标签与配色的协作光标动画。",
    install: "npx shadcn@latest add @cult-ui/illustration-cursor",
    parts: [
      "Cursor",
      "CursorDemo",
      "CursorSide",
      "CursorSvg"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-fluid-rendering",
    name: "Illustration Fluid Rendering",
    zhName: "流体渲染插画",
    category: "插画",
    description: "把浏览器连接到电商与 CMS 平台的 SVG 插画。",
    install: "npx shadcn@latest add @cult-ui/illustration-fluid-rendering",
    parts: [
      "FluidRendering",
      "FluidRenderingBigCommerceIcon",
      "FluidRenderingContentfulIcon",
      "FluidRenderingShopifyIcon",
      "FluidRenderingStoreIcon"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-globe-vercel",
    name: "Illustration Globe Vercel",
    zhName: "Globe 部署插画",
    category: "插画",
    description: "展示部署中、已部署与失败状态的 Globe 动画。",
    install: "npx shadcn@latest add @cult-ui/illustration-globe-vercel",
    parts: [
      "BuiltInNodeIcon",
      "CustomNodeIcon",
      "DEFAULT_NODES",
      "DemoGlobeVercel",
      "DemoGlobeVercelControls",
      "DeployGlobe",
      "DeployGlobeStatusBadge",
      "DeployGlobeSvg",
      "DeployNode",
      "DeployNodeData",
      "DeployPath",
      "DeployStatus"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "illustration-graph",
    name: "Illustration Graph",
    zhName: "图表插画",
    category: "插画",
    description: "带数据点、坐标标签与错误区域高亮的折线插画。",
    install: "npx shadcn@latest add @cult-ui/illustration-graph",
    parts: [
      "DataPoint",
      "IllustrationGraph",
      "IllustrationGraphChart",
      "IllustrationGraphFooter",
      "IllustrationGraphLines",
      "defaultDataPoints"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "merging-bubbles",
    name: "Merging Bubbles",
    zhName: "融合气泡插画",
    category: "插画",
    description: "多个气泡相互融合的可视化插画。",
    install: "npx shadcn@latest add @cult-ui/merging-bubbles",
    parts: [
      "MergingBubbles",
      "NextLogo",
      "VercelLogo"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "security-checkpoint",
    name: "Security Checkpoint",
    zhName: "安全检查点插画",
    category: "插画",
    description: "表现安全检查点流程的插画组件。",
    install: "npx shadcn@latest add @cult-ui/security-checkpoint",
    parts: [
      "CHECKPOINT_LINES",
      "CheckpointLine",
      "SecurityCheckpoint",
      "SecurityCheckpointBlueLines",
      "SecurityCheckpointCard",
      "SecurityCheckpointRedLines"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "speech-bubble",
    name: "Speech Bubble",
    zhName: "对话气泡",
    category: "插画",
    description: "带方向与配色变体的对话气泡。",
    install: "npx shadcn@latest add @cult-ui/speech-bubble",
    parts: [
      "SpeechBubble",
      "SpeechBubbleBody",
      "SpeechBubbleCursor",
      "SpeechBubbleRoot",
      "SpeechBubbleTail",
      "SpeechBubbleText"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "apple-iphone-17-pro",
    name: "Apple iPhone 17 Pro Max",
    zhName: "iPhone 17 Pro 样机",
    category: "样机",
    description: "带灵动岛、状态栏与四种边框配色的 iPhone 17 Pro 外壳。",
    install: "npx shadcn@latest add @cult-ui/apple-iphone-17-pro",
    parts: [
      "DynamicIslandSize",
      "IPhone17ProMax"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "apple-keyboard",
    name: "Apple Keyboard",
    zhName: "苹果键盘",
    category: "样机",
    description: "带标注按键与媒体键行的 Apple Magic Keyboard 插画,可演示快捷键。",
    install: "npx shadcn@latest add @cult-ui/apple-keyboard",
    parts: [
      "AppleKeyboard"
    ],
    dependencies: [
      "@tabler/icons-react"
    ],
    ported: true
  },
  {
    slug: "apple-pro-display-xdr",
    name: "Apple Pro Display XDR",
    zhName: "Pro Display XDR 样机",
    category: "样机",
    description: "铝制边框、屏幕模式与可交互 macOS 程序坞的显示器样机。",
    install: "npx shadcn@latest add @cult-ui/apple-pro-display-xdr",
    parts: [
      "AppleProDisplayXDR",
      "StudioScreenMode"
    ],
    dependencies: [
      "@tabler/icons-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "apple-watch-ultra",
    name: "Apple Watch Ultra",
    zhName: "Apple Watch Ultra 样机",
    category: "样机",
    description: "表壳、复杂功能、表冠与操作按钮俱全的 Watch Ultra 样机。",
    install: "npx shadcn@latest add @cult-ui/apple-watch-ultra",
    parts: [
      "AppleWatchUltra"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "mac-screen",
    name: "Mac Screen",
    zhName: "Mac 屏幕",
    category: "样机",
    description: "经典 Macintosh CRT 显示器样机,可把图片或 GIF 合成进屏幕。",
    install: "npx shadcn@latest add @cult-ui/mac-screen",
    parts: [
      "MacScreen"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "mock-browser-window",
    name: "Mock Browser Window",
    zhName: "浏览器窗口",
    category: "样机",
    description: "可定制的浏览器窗口样机,支持 Chrome、Safari 与通用样式和侧边栏。",
    install: "npx shadcn@latest add @cult-ui/mock-browser-window",
    parts: [
      "BrowserWindow"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "feature-carousel",
    name: "Feature Carousel",
    zhName: "功能轮播",
    category: "展示区块",
    description: "左右并排截图的分步功能轮播,适合落地页与产品导览。",
    install: "npx shadcn@latest add @cult-ui/feature-carousel",
    parts: [
      "FeatureCarousel"
    ],
    dependencies: [
      "motion",
      "clsx",
      "react-wrap-balancer"
    ],
    ported: true
  },
  {
    slug: "feature-sticky-section",
    name: "Feature Sticky Section",
    zhName: "吸顶功能区块",
    category: "展示区块",
    description: "滚动吸顶的功能区块,把触发器与内容面板配对并跟踪当前面板。",
    install: "npx shadcn@latest add @cult-ui/feature-sticky-section",
    parts: [
      "OSSProject",
      "OSSSection",
      "OSSSectionComponents",
      "StickySection",
      "defaultOSSSectionProjects"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "@radix-ui/react-use-controllable-state"
    ],
    ported: true
  },
  {
    slug: "hero-color-panel",
    name: "Hero Color Panel",
    zhName: "Hero 色彩面板",
    category: "展示区块",
    description: "左右分栏首屏,右侧为 ColorPanels 着色器视觉,含 CTA 与技术栈徽章。",
    install: "npx shadcn@latest add @cult-ui/hero-color-panel",
    parts: [
      "AISDKIcon",
      "HeroColorPanels",
      "HeroColorPanelsActions",
      "HeroColorPanelsBadges",
      "HeroColorPanelsCTA",
      "HeroColorPanelsContainer",
      "HeroColorPanelsContent",
      "HeroColorPanelsDescription",
      "HeroColorPanelsHeading",
      "HeroColorPanelsMobileVisual",
      "HeroColorPanelsRoot",
      "HeroColorPanelsTechItem"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "hero-dithering",
    name: "Hero Dithering",
    zhName: "Hero 抖动",
    category: "展示区块",
    description: "左右分栏首屏,右侧为抖动着色器视觉。",
    install: "npx shadcn@latest add @cult-ui/hero-dithering",
    parts: [
      "AISDKIcon",
      "HeroDithering",
      "HeroDitheringActions",
      "HeroDitheringBadges",
      "HeroDitheringCTA",
      "HeroDitheringContainer",
      "HeroDitheringContent",
      "HeroDitheringDescription",
      "HeroDitheringHeading",
      "HeroDitheringMobileVisual",
      "HeroDitheringRoot",
      "HeroDitheringTechItem"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "hero-heatmap",
    name: "Hero Heatmap",
    zhName: "Hero 热力图",
    category: "展示区块",
    description: "左右分栏首屏,右侧为发光热力着色器视觉。",
    install: "npx shadcn@latest add @cult-ui/hero-heatmap",
    parts: [
      "AISDKIcon",
      "HeroHeatmap",
      "HeroHeatmapActions",
      "HeroHeatmapBadges",
      "HeroHeatmapCTA",
      "HeroHeatmapContainer",
      "HeroHeatmapContent",
      "HeroHeatmapDescription",
      "HeroHeatmapHeading",
      "HeroHeatmapMobileVisual",
      "HeroHeatmapRoot",
      "HeroHeatmapShaderOverrides"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "hero-liquid-metal",
    name: "Hero Liquid Metal",
    zhName: "Hero 液态金属",
    category: "展示区块",
    description: "左右分栏首屏,右侧为铬金属液态着色器视觉。",
    install: "npx shadcn@latest add @cult-ui/hero-liquid-metal",
    parts: [
      "AISDKIcon",
      "HeroLiquidMetal",
      "HeroLiquidMetalActions",
      "HeroLiquidMetalBadges",
      "HeroLiquidMetalCTA",
      "HeroLiquidMetalContainer",
      "HeroLiquidMetalContent",
      "HeroLiquidMetalDescription",
      "HeroLiquidMetalHeading",
      "HeroLiquidMetalMobileVisual",
      "HeroLiquidMetalRoot",
      "HeroLiquidMetalShaderOverrides"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "hero-static-radial-gradient",
    name: "Hero Static Radial Gradient",
    zhName: "Hero 径向渐变",
    category: "展示区块",
    description: "左右分栏首屏,右侧为静态径向渐变色视觉。",
    install: "npx shadcn@latest add @cult-ui/hero-static-radial-gradient",
    parts: [
      "AISDKIcon",
      "HeroStaticRadialGradient",
      "HeroStaticRadialGradientActions",
      "HeroStaticRadialGradientBadges",
      "HeroStaticRadialGradientCTA",
      "HeroStaticRadialGradientContainer",
      "HeroStaticRadialGradientContent",
      "HeroStaticRadialGradientDescription",
      "HeroStaticRadialGradientHeading",
      "HeroStaticRadialGradientMobileVisual",
      "HeroStaticRadialGradientRoot",
      "HeroStaticRadialGradientTechItem"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "loading-carousel",
    name: "Loading Carousel",
    zhName: "加载轮播",
    category: "展示区块",
    description: "基于 Embla 的自动播放提示轮播,适合加载态展示。",
    install: "npx shadcn@latest add @cult-ui/loading-carousel",
    parts: [
      "LoadingCarousel"
    ],
    dependencies: [
      "embla-carousel-autoplay",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "logo-carousel",
    name: "Logo Carousel",
    zhName: "Logo 轮播",
    category: "展示区块",
    description: "按列交错展示品牌 SVG 的 Logo 轮播。",
    install: "npx shadcn@latest add @cult-ui/logo-carousel",
    parts: [
      "LogoCarousel"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "marketing-feature-code",
    name: "Marketing Feature Code",
    zhName: "功能代码区块",
    category: "展示区块",
    description: "面向代码或网络策略功能的营销区块。",
    install: "npx shadcn@latest add @cult-ui/marketing-feature-code",
    parts: [
      "NetworkPolicy",
      "NetworkPolicyCode",
      "NetworkPolicyCodeBlock",
      "NetworkPolicyCodeLine",
      "NetworkPolicyComment",
      "NetworkPolicyContainer",
      "NetworkPolicyDescription",
      "NetworkPolicyEyebrow",
      "NetworkPolicyFeatureDescription",
      "NetworkPolicyFeatureIcon",
      "NetworkPolicyFeatureItem",
      "NetworkPolicyFeatureText"
    ],
    dependencies: [
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "marketing-hero-analytics",
    name: "Marketing Hero Analytics",
    zhName: "分析首屏",
    category: "展示区块",
    description: "营销页用的分析风格首屏区块。",
    install: "npx shadcn@latest add @cult-ui/marketing-hero-analytics",
    parts: [
      "ANALYTICS_HERO_CHART_DATA",
      "ANALYTICS_HERO_ICONS",
      "ANALYTICS_HERO_LOGS",
      "ANALYTICS_HERO_SOURCES",
      "ANALYTICS_HERO_STOPS",
      "AnalyticsHero",
      "AnalyticsHeroAppLogs",
      "AnalyticsHeroChart",
      "AnalyticsHeroChartDatum",
      "AnalyticsHeroCopy",
      "AnalyticsHeroCrosshair",
      "AnalyticsHeroGithubIcon"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "three-d-carousel",
    name: "Three D Carousel",
    zhName: "3D 轮播",
    category: "展示区块",
    description: "带透视效果的三维轮播,项目之间平滑切换。",
    install: "npx shadcn@latest add @cult-ui/three-d-carousel",
    parts: [
      "useIsomorphicLayoutEffect",
      "useMediaQuery"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "tweet-grid",
    name: "Tweet Grid",
    zhName: "推文网格",
    category: "展示区块",
    description: "展示推文式内容卡片的网格布局。",
    install: "npx shadcn@latest add @cult-ui/tweet-grid",
    parts: [
      "TweetGrid"
    ],
    dependencies: [
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "analytics-chart",
    name: "Analytics Chart",
    zhName: "分析图表",
    category: "数据展示",
    description: "Vercel 风格 SVG 折线图,渐变描边加悬浮提示卡。",
    install: "npx shadcn@latest add @cult-ui/analytics-chart",
    parts: [
      "AnalyticsDataPoint",
      "AnalyticsGradientStop",
      "AnalyticsLineChart",
      "AnalyticsTooltip",
      "AnalyticsTooltipPoint",
      "DEFAULT_DATA",
      "DEFAULT_GRADIENT",
      "EASE_OUT",
      "PALETTE",
      "dotColor",
      "fmtDate",
      "fmtNum"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "choice-poll",
    name: "Choice Poll",
    zhName: "选择投票",
    category: "数据展示",
    description: "单选或多选投票,带百分比结果条与键盘导航。",
    install: "npx shadcn@latest add @cult-ui/choice-poll",
    parts: [
      "ChoicePoll",
      "ChoicePollDescription",
      "ChoicePollFooter",
      "ChoicePollHeader",
      "ChoicePollIndicator",
      "ChoicePollLabel",
      "ChoicePollOption",
      "ChoicePollOptions",
      "ChoicePollPercentage",
      "ChoicePollProgress",
      "ChoicePollRoot",
      "ChoicePollTitle"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state",
      "lucide-react",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "feature-poll",
    name: "Feature Poll",
    zhName: "功能投票",
    category: "数据展示",
    description: "功能投票的组合式实现,支持单选、多选与结果条。",
    install: "npx shadcn@latest add @cult-ui/feature-poll",
    parts: [
      "FeaturePoll",
      "FeaturePollDescription",
      "FeaturePollFooter",
      "FeaturePollHeader",
      "FeaturePollIndicator",
      "FeaturePollLabel",
      "FeaturePollOption",
      "FeaturePollOptions",
      "FeaturePollPercentage",
      "FeaturePollProgress",
      "FeaturePollRoot",
      "FeaturePollTitle"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state",
      "lucide-react",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "feature-voting",
    name: "Feature Voting",
    zhName: "功能投票列表",
    category: "数据展示",
    description: "带点赞的功能请求列表,可按票数排序。",
    install: "npx shadcn@latest add @cult-ui/feature-voting",
    parts: [
      "FeatureVoting",
      "FeatureVotingCount",
      "FeatureVotingDescription",
      "FeatureVotingGroup",
      "FeatureVotingItem",
      "FeatureVotingRoot",
      "FeatureVotingTitle",
      "FeatureVotingTrigger",
      "FeatureVotingValue",
      "useFeatureVoting"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state"
    ],
    ported: true
  },
  {
    slug: "halo-badge",
    name: "Halo Badge",
    zhName: "Halo 徽章",
    category: "数据展示",
    description: "带渐变边框、闪烁状态点与等宽数字的徽章,数字变化不抖动。",
    install: "npx shadcn@latest add @cult-ui/halo-badge",
    parts: [
      "HaloBadge"
    ],
    dependencies: [
      "class-variance-authority",
      "motion"
    ],
    ported: true
  },
  {
    slug: "halo-progress",
    name: "Halo Progress",
    zhName: "Halo 进度条",
    category: "数据展示",
    description: "弹簧驱动的确定型进度条,以及滑动的非确定型光带。",
    install: "npx shadcn@latest add @cult-ui/halo-progress",
    parts: [
      "HaloProgress"
    ],
    dependencies: [
      "@base-ui/react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "poll-widget",
    name: "Poll Widget",
    zhName: "投票组件",
    category: "数据展示",
    description: "行内、弹出层、对话框三种形态的投票组件。",
    install: "npx shadcn@latest add @cult-ui/poll-widget",
    parts: [
      "PollOption",
      "PollWidget",
      "PollWidgetAnimationPhase",
      "PollWidgetContent",
      "PollWidgetDialog",
      "PollWidgetIndicator",
      "PollWidgetLabel",
      "PollWidgetMode",
      "PollWidgetOption",
      "PollWidgetOptions",
      "PollWidgetPercentage",
      "PollWidgetQuestion"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state",
      "class-variance-authority",
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "rolling-number",
    name: "Rolling Number",
    zhName: "滚动数字",
    category: "数据展示",
    description: "数字滚动计数,可自定义格式化。",
    install: "npx shadcn@latest add @cult-ui/rolling-number",
    parts: [
      "RollingNumber"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "vote-tally",
    name: "Vote Tally",
    zhName: "投票计数",
    category: "数据展示",
    description: "带点赞的票数统计列表,可按票数排序。",
    install: "npx shadcn@latest add @cult-ui/vote-tally",
    parts: [
      "VoteTally",
      "VoteTallyCount",
      "VoteTallyDescription",
      "VoteTallyGroup",
      "VoteTallyItem",
      "VoteTallyRoot",
      "VoteTallyTitle",
      "VoteTallyTrigger",
      "VoteTallyValue",
      "useVoteTally"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state"
    ],
    ported: true
  },
  {
    slug: "kanban-board",
    name: "Kanban Board",
    zhName: "看板",
    category: "交互",
    description: "原生拖放的看板,卡片可在列间拖动,带标签与负责人头像。",
    install: "npx shadcn@latest add @cult-ui/kanban-board",
    parts: [
      "Assignee",
      "CardData",
      "CardTag",
      "Column",
      "ColumnData",
      "ColumnStatus",
      "DragState",
      "TagVariant",
      "gentleSpring"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "onboarding",
    name: "Onboarding",
    zhName: "多步引导原语",
    category: "交互",
    description: "组合式多步引导:根组件、步骤导航、功能轮播、选择组、提示列表与步骤指示器。",
    install: "npx shadcn@latest add @cult-ui/onboarding",
    parts: [
      "ChoiceGroup",
      "FeatureCarousel",
      "Onboarding",
      "StepIndicator",
      "TipsList",
      "useOnboarding"
    ],
    dependencies: [
      "@radix-ui/react-use-controllable-state",
      "class-variance-authority"
    ],
    ported: true
  },
  {
    slug: "sortable-list",
    name: "Sortable List",
    zhName: "可排序列表",
    category: "交互",
    description: "拖放排序的列表,带布局动画。",
    install: "npx shadcn@latest add @cult-ui/sortable-list",
    parts: [
      "Item",
      "SortableList",
      "SortableListItem"
    ],
    dependencies: [
      "motion",
      "react-use-measure",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "wizard-expandable",
    name: "Wizard Expandable",
    zhName: "可扩展向导",
    category: "交互",
    description: "可展开的多步向导,支持前进校验、可滚动步骤轨与高度过渡。",
    install: "npx shadcn@latest add @cult-ui/wizard-expandable",
    parts: [
      "WizardStep",
      "useWizardExpandable"
    ],
    dependencies: [
      "@base-ui/react",
      "@radix-ui/react-use-controllable-state",
      "motion"
    ],
    ported: true
  },
  {
    slug: "distorted-glass",
    name: "Distorted Glass",
    zhName: "扭曲玻璃",
    category: "特效",
    description: "用 SVG 分形噪点位移做出玻璃分隔效果,适合区块过渡。",
    install: "npx shadcn@latest add @cult-ui/distorted-glass",
    parts: [
      "DistortedGlass"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "dither-image",
    name: "Dither Image",
    zhName: "抖动图片",
    category: "特效",
    description: "用 CSS Bayer 抖动插件处理图片,支持局部揭示遮罩。",
    install: "npx shadcn@latest add @cult-ui/dither-image",
    parts: [
      "DitherAspectRatio",
      "DitherImage",
      "DitherImageCaption",
      "DitherImageContent",
      "DitherImageFrame",
      "DitherImageOverlay",
      "DitherImageReveal",
      "DitherRevealDirection",
      "DitherSize"
    ],
    dependencies: [
      "dither-plugin"
    ],
    ported: true
  },
  {
    slug: "dynamic-island",
    name: "Dynamic Island",
    zhName: "灵动岛",
    category: "特效",
    description: "iOS 灵动岛组合组件,14 种尺寸之间弹簧过渡。",
    install: "npx shadcn@latest add @cult-ui/dynamic-island",
    parts: [
      "DynamicContainer",
      "DynamicDescription",
      "DynamicDiv",
      "DynamicIsland",
      "DynamicIslandProvider",
      "DynamicIslandSizePresets",
      "DynamicTitle",
      "SIZE_PRESETS",
      "SizePresets",
      "damping",
      "stiffness",
      "useDynamicIslandSize"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "edge-blur",
    name: "Edge Blur",
    zhName: "边缘模糊",
    category: "特效",
    description: "多层遮罩 backdrop-filter 堆叠,让内容在页眉页脚处渐隐。",
    install: "npx shadcn@latest add @cult-ui/edge-blur",
    parts: [
      "BottomBlur",
      "EdgeBlur",
      "TopBlur"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "expandable-screen",
    name: "Expandable Screen",
    zhName: "全屏展开",
    category: "特效",
    description: "用共享布局动画把卡片或按钮形变成全屏视图。",
    install: "npx shadcn@latest add @cult-ui/expandable-screen",
    parts: [
      "ExpandableScreen",
      "ExpandableScreenBackground",
      "ExpandableScreenContent",
      "ExpandableScreenTrigger",
      "useExpandableScreen"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "fluted-glass",
    name: "Fluted Glass",
    zhName: "竖纹玻璃",
    category: "特效",
    description: "Paper Design WebGL 竖纹玻璃着色器,给图片加上棱纹扭曲。",
    install: "npx shadcn@latest add @cult-ui/fluted-glass",
    parts: [
      "FlutedGlass"
    ],
    dependencies: [
      "@paper-design/shaders-react"
    ],
    ported: true
  },
  {
    slug: "globe",
    name: "Globe (COBE)",
    zhName: "3D 地球",
    category: "特效",
    description: "基于 cobe 的交互式 3D 地球,可拖拽旋转,支持标记点与飞行弧线。",
    install: "npx shadcn@latest add @cult-ui/globe",
    parts: [
      "DefaultShowcaseGlobe",
      "MarketingHeroGlobe",
      "ShowcaseConfig",
      "ShowcaseKey",
      "analyticsMarkers",
      "barMarkers",
      "cdnArcs",
      "cdnMarkers",
      "flightArcs",
      "flightMarkers",
      "getShowcaseArcs",
      "getShowcaseMarkers"
    ],
    dependencies: [
      "cobe",
      "motion",
      "next-themes"
    ],
    ported: true
  },
  {
    slug: "lightboard",
    name: "Lightboard",
    zhName: "LED 灯板",
    category: "特效",
    description: "由灯点组成的滚动 LED 字幕板,含七段字体与手绘。",
    install: "npx shadcn@latest add @cult-ui/lightboard",
    parts: [
      "LightBoard",
      "PatternCell"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "morph-surface",
    name: "Morph Surface",
    zhName: "形变面板",
    category: "特效",
    description: "可平滑形变、尺寸与内容可配置的面板。",
    install: "npx shadcn@latest add @cult-ui/morph-surface",
    parts: [
      "MorphSurface"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "shader-lens-blur",
    name: "Shader Lens Blur",
    zhName: "镜头模糊",
    category: "特效",
    description: "带镜头模糊与鼠标交互的 WebGL 着色器组件。",
    install: "npx shadcn@latest add @cult-ui/shader-lens-blur",
    parts: [
      "ShaderLensBlur",
      "configAtom"
    ],
    dependencies: [
      "motion",
      "three",
      "jotai",
      "next-themes"
    ],
    ported: true
  },
  {
    slug: "terminal-animation",
    name: "Terminal Animation",
    zhName: "终端动画",
    category: "特效",
    description: "可组合的终端动画原语:按类型回放的命令、标签页场景与输出渲染。",
    install: "npx shadcn@latest add @cult-ui/terminal-animation",
    parts: [
      "TabContent",
      "TerminalAnimationBackgroundGradient",
      "TerminalAnimationBlinkingCursor",
      "TerminalAnimationCommandBar",
      "TerminalAnimationContainer",
      "TerminalAnimationContent",
      "TerminalAnimationOutput",
      "TerminalAnimationOutputLine",
      "TerminalAnimationRoot",
      "TerminalAnimationTabList",
      "TerminalAnimationTabTrigger",
      "TerminalAnimationTrailingPrompt"
    ],
    dependencies: [
      "@radix-ui/react-slot",
      "@radix-ui/react-use-controllable-state"
    ],
    ported: true
  },
  {
    slug: "code-block",
    name: "Code Block",
    zhName: "代码块",
    category: "工具",
    description: "带标签页、复制按钮与动画切换的代码块。",
    install: "npx shadcn@latest add @cult-ui/code-block",
    parts: [
      "CodeBlock"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "copy-button",
    name: "Copy Button",
    zhName: "复制按钮",
    category: "工具",
    description: "复制到剪贴板并给出反馈的按钮。",
    install: "npx shadcn@latest add @cult-ui/copy-button",
    parts: [
      "CopyButton",
      "copyToClipboardWithMeta"
    ],
    dependencies: [
      "lucide-react",
      "motion"
    ],
    ported: true
  },
  {
    slug: "file-icons",
    name: "File Icons",
    zhName: "文件图标",
    category: "工具",
    description: "npm、pnpm、Yarn、React、Tailwind 等文件类型与工具图标集。",
    install: "npx shadcn@latest add @cult-ui/file-icons",
    parts: [
      "Icons",
      "getIconForLanguageExtension"
    ],
    dependencies: [
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "timer",
    name: "Timer",
    zhName: "倒计时",
    category: "工具",
    description: "可设置时长与视觉样式的倒计时器。",
    install: "npx shadcn@latest add @cult-ui/timer",
    parts: [
      "Timer",
      "TimerDisplay",
      "TimerIcon",
      "TimerRoot",
      "UseTimerOptions",
      "UseTimerReturn",
      "useTimer"
    ],
    dependencies: [
      "class-variance-authority",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "collab-avatar",
    name: "Collab Avatar",
    zhName: "协作头像",
    category: "协作",
    description: "用姓名首字母与配色渐变表示在线成员的头像。",
    install: "npx shadcn@latest add @cult-ui/collab-avatar",
    parts: [
      "CollabAvatar"
    ],
    dependencies: [
      "motion"
    ],
    ported: true
  },
  {
    slug: "collab-toolbar",
    name: "Collab Toolbar",
    zhName: "协作工具栏",
    category: "协作",
    description: "把图标按钮与协作者头像分组的编辑器工具栏。",
    install: "npx shadcn@latest add @cult-ui/collab-toolbar",
    parts: [
      "CollabToolbar",
      "CollabToolbarDivider",
      "CollabToolbarIcon",
      "Collaborator",
      "IconKey",
      "ToolbarGroup"
    ],
    dependencies: [],
    ported: true
  },
  {
    slug: "base-tooltip",
    name: "Base Tooltip",
    zhName: "Base UI 提示",
    category: "浮层与抽屉",
    description: "Apple Pro Display XDR 等组件用到的 Base UI 提示原语(Tooltip、Trigger、Content)。",
    install: "npx shadcn@latest add @cult-ui/base-tooltip",
    parts: [
      "Tooltip",
      "TooltipContent",
      "TooltipProvider",
      "TooltipTrigger"
    ],
    dependencies: [
      "@base-ui/react",
      "@radix-ui/react-slot"
    ],
    ported: true
  },
  {
    slug: "hover-video-player",
    name: "Hover Video Player",
    zhName: "悬停视频播放器",
    category: "展示区块",
    description: "悬停即播放的视频播放器,带懒加载、封面、画中画与触屏支持。",
    install: "npx shadcn@latest add @cult-ui/hover-video-player",
    parts: [
      "HoverVideoPaddingWrapper",
      "HoverVideoPlayer",
      "HoverVideoPlayerControls",
      "HoverVideoPlayerHoverOverlay",
      "HoverVideoPlayerLoadingOverlay",
      "HoverVideoPlayerPausedOverlay",
      "HoverVideoPlayerPiPButton",
      "HoverVideoPlayerPlayPauseButton",
      "HoverVideoPlayerProgressBar",
      "HoverVideoPlayerVolumeControl"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "youtube-video-player",
    name: "YouTube Video Player",
    zhName: "YouTube 播放器",
    category: "展示区块",
    description: "带自定义控制与动画过渡的 YouTube 播放器。",
    install: "npx shadcn@latest add @cult-ui/youtube-video-player",
    parts: [
      "YouTubePlayer",
      "YouTubePlayerControls"
    ],
    dependencies: [
      "motion",
      "lucide-react"
    ],
    ported: true
  },
  {
    slug: "squiggle-arrow",
    name: "Squiggle Arrow",
    zhName: "波浪箭头",
    category: "插画",
    description: "手绘风格波浪箭头,可设方向、尺寸与变体。",
    install: "npx shadcn@latest add @cult-ui/squiggle-arrow",
    parts: [],
    dependencies: [],
    ported: true
  }
]

export const catalogCategories = ["AI 组件","按钮","卡片","表单与输入","导航与标签页","浮层与抽屉","文字与排版","背景与纹理","插画","样机","展示区块","数据展示","交互","特效","工具","协作"]

export function getCatalogEntry(slug: string | undefined) {
  if (!slug) return undefined
  return componentCatalog.find((entry) => entry.slug === slug)
}

export function catalogByCategory() {
  return catalogCategories.map((category) => ({
    category,
    items: componentCatalog.filter((entry) => entry.category === category),
  }))
}
