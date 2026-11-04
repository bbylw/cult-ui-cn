import { Preview } from "@/components/site/preview"
import { CodeBlock } from "@/components/ui/code-block"

export default function CodeBlockDemo() {
  return (
    <Preview className="w-full items-stretch">
      <CodeBlock
        className="w-full"
        tabs={[
          {
            label: "npm",
            code: "npx shadcn@latest add @cult-ui/globe",
            language: "bash",
          },
          {
            label: "bun",
            code: "bunx shadcn@latest add @cult-ui/globe",
            language: "bash",
          },
        ]}
      />
    </Preview>
  )
}
