import { Preview } from "@/components/site/preview"
import { AnalyticsLineChart } from "@/components/ui/analytics-chart"

export default function AnalyticsChartDemo() {
  return (
    <Preview className="w-full flex-col items-stretch">
      <AnalyticsLineChart
        className="w-full"
        valueLabel="注册量"
        data={[
          { date: "2025-01-07", label: "signups", value: 340 },
          { date: "2025-02-07", label: "signups", value: 520 },
          { date: "2025-03-07", label: "signups", value: 890 },
          { date: "2025-04-07", label: "signups", value: 1240 },
          { date: "2025-05-07", label: "signups", value: 1610 },
          { date: "2025-06-07", label: "signups", value: 2380 },
        ]}
      />
    </Preview>
  )
}
