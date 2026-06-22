"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { campaigns, currency, type Campaign } from "./data"

function statusStyles(status: Campaign["status"]) {
  switch (status) {
    case "Activa":
      return "bg-accent/15 text-accent border-accent/30"
    case "Optimizando":
      return "bg-primary/10 text-primary border-primary/20"
    case "Pausada":
      return "bg-muted text-muted-foreground border-border"
  }
}

export function Campaigns() {
  const active = campaigns.filter((c) => c.status !== "Pausada")

  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Campañas activas</p>
            <p className="mt-1 text-2xl font-bold">{active.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Gasto en curso</p>
            <p className="mt-1 text-2xl font-bold">
              {currency(campaigns.reduce((s, c) => s + c.spend, 0))}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Conversiones</p>
            <p className="mt-1 text-2xl font-bold">
              {campaigns.reduce((s, c) => s + c.conversions, 0)}
            </p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Campañas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {campaigns.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-4 rounded-xl border border-border p-4 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="flex flex-col gap-1.5 lg:w-72">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                      statusStyles(c.status),
                    )}
                  >
                    {c.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {c.platform}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-snug">{c.name}</p>
              </div>

              <div className="flex flex-1 flex-col gap-2 lg:max-w-xs">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Gasto del presupuesto</span>
                  <span>
                    {currency(c.spend)} / {currency(c.budget)}
                  </span>
                </div>
                <Progress
                  value={c.budget ? (c.spend / c.budget) * 100 : 0}
                  className="h-2"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 lg:w-72">
                <Metric label="Conv." value={`${c.conversions}`} />
                <Metric label="ROAS" value={c.roas ? `${c.roas}x` : "—"} />
                <Metric label="CTR" value={c.ctr ? `${c.ctr}%` : "—"} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-sm font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
