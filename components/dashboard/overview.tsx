"use client"

import { TrendingUp, DollarSign, MousePointerClick, Users } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { performance, allocation, currency, dailyBudget } from "./data"

const stats = [
  {
    label: "Inversión del mes",
    value: currency(1500),
    sub: `${currency(dailyBudget)}/día óptimo`,
    icon: DollarSign,
  },
  {
    label: "Ventas atribuidas",
    value: currency(7350),
    sub: "+8.8% vs. mes anterior",
    icon: TrendingUp,
  },
  {
    label: "ROAS promedio",
    value: "4.9x",
    sub: "Retorno por cada $1",
    icon: MousePointerClick,
  },
  {
    label: "Clientes alcanzados",
    value: "40,400",
    sub: "Alta intención de compra",
    icon: Users,
  },
]

const chartConfig = {
  ventas: { label: "Ventas", color: "var(--chart-1)" },
  invertido: { label: "Invertido", color: "var(--chart-2)" },
} satisfies ChartConfig

export function Overview() {
  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.label}>
              <CardContent className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-[18px]" />
                  </span>
                </div>
                <div className="text-2xl font-bold tracking-tight">
                  {s.value}
                </div>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Ad Spend Performance</span>
              <span className="text-sm font-normal text-muted-foreground">
                Rendimiento mes a mes
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <AreaChart data={performance} margin={{ left: 4, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="fillVentas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-ventas)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-ventas)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={48}
                  tickFormatter={(v) => `$${v / 1000}k`}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={{ strokeDasharray: "3 3" }}
                />
                <Area
                  type="monotone"
                  dataKey="ventas"
                  stroke="var(--color-ventas)"
                  strokeWidth={2.5}
                  fill="url(#fillVentas)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribución diaria</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <p className="text-sm text-muted-foreground">
              La IA reparte tu presupuesto donde mejor rinde cada día.
            </p>
            {allocation.map((a) => (
              <div key={a.platform} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{a.platform}</span>
                  <span className="text-muted-foreground">
                    {currency(a.amount)} · {a.pct}%
                  </span>
                </div>
                <Progress value={a.pct} className="h-2" />
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between border-t border-border pt-4 text-sm">
              <span className="font-medium">Total mensual en pauta</span>
              <span className="font-bold">{currency(1500)}</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
