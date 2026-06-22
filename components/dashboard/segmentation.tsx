"use client"

import { Pie, PieChart, Cell } from "recharts"
import { Sparkles, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { audiences, aiAdjustments } from "./data"

const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)"]

const chartData = audiences.map((a, i) => ({
  name: a.name,
  value: a.share,
  fill: colors[i],
}))

const chartConfig = {
  value: { label: "Audiencia" },
} satisfies ChartConfig

export function Segmentation() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mezcla de audiencias</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto h-[240px] w-full"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  strokeWidth={2}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Segmentos objetivo</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {audiences.map((a, i) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-3 rounded-xl border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ background: colors[i] }}
                  />
                  <div>
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Intención {a.intent.toLowerCase()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={a.intent === "Alta" ? "default" : "secondary"}
                    className={
                      a.intent === "Alta"
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }
                  >
                    {a.intent}
                  </Badge>
                  <span className="w-10 text-right text-sm font-bold">
                    {a.share}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-accent" />
            Ajustes de la IA en tiempo real (24/7)
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {aiAdjustments.map((adj, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl bg-secondary/60 p-4"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Sparkles className="size-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm leading-relaxed">{adj.text}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3" />
                  {adj.time}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
