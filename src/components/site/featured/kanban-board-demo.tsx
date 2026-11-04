import { useState } from "react"
import { MotionConfig } from "motion/react"
import { Preview } from "@/components/site/preview"
import {
  Column,
  gentleSpring,
  type ColumnData,
  type ColumnStatus,
  type DragState,
} from "@/components/ui/kanban-board"

const KANBAN_INITIAL: ColumnData[] = [
  {
    id: "todo",
    title: "待办",
    status: "todo",
    cards: [
      {
        id: "k1",
        title: "接入 Tailwind CSS v4",
        tags: [{ label: "feature", variant: "feature" }],
        date: "11月4日",
      },
      {
        id: "k2",
        title: "修复暗色模式令牌",
        tags: [{ label: "bug", variant: "bug" }],
        date: "11月5日",
      },
    ],
  },
  {
    id: "in-progress",
    title: "进行中",
    status: "in-progress",
    cards: [
      {
        id: "k3",
        title: "设计流光边框卡片",
        tags: [{ label: "design", variant: "design" }],
        date: "11月6日",
      },
    ],
  },
  {
    id: "done",
    title: "已完成",
    status: "done",
    cards: [
      {
        id: "k4",
        title: "用 bun 初始化项目",
        tags: [{ label: "docs", variant: "docs" }],
        date: "11月3日",
      },
    ],
  },
]

export default function KanbanBoardDemo() {
  const [columns, setColumns] = useState<ColumnData[]>(KANBAN_INITIAL)
  const [dragState, setDragState] = useState<DragState>(null)

  const handleDrop = (
    cardId: string,
    fromColumnId: ColumnStatus,
    toColumnId: ColumnStatus
  ) => {
    setColumns((prev) => {
      const card = prev
        .find((c) => c.id === fromColumnId)
        ?.cards.find((card) => card.id === cardId)
      if (!card) return prev
      return prev.map((col) => {
        if (col.id === fromColumnId) {
          return { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
        }
        if (col.id === toColumnId) {
          return { ...col, cards: [...col.cards, card] }
        }
        return col
      })
    })
  }

  return (
    <Preview className="w-full items-stretch bg-transparent border-0 p-0">
      <MotionConfig transition={gentleSpring}>
        <div className="grid w-full gap-4 md:grid-cols-3">
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              dragState={dragState}
              setDragState={setDragState}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </MotionConfig>
    </Preview>
  )
}
