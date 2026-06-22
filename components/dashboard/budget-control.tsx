"use client"

import { useState } from "react"
import { Sparkles, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ACCOUNT, allocation, currency } from "./data"

const presets = [200, 500, 1500, 5000, 10000]

export function BudgetControl() {
  const [budget, setBudget] = useState(ACCOUNT.monthlyBudget)

  const membership = Math.round(budget * ACCOUNT.feeRate)
  const total = budget + membership
  const daily = budget / 30

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Define tu presupuesto mensual</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tú tienes el control total del dinero, sin cargos ocultos. Elige el
            monto exacto que deseas invertir y la IA calcula la distribución
            diaria óptima para que rinda al máximo en cada plataforma.
          </p>

          <div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold tracking-tight">
                {currency(budget)}
              </span>
              <span className="mb-1 text-sm text-muted-foreground">/mes</span>
            </div>
          </div>

          <Slider
            value={[budget]}
            min={200}
            max={10000}
            step={100}
            onValueChange={(v) => setBudget(v[0])}
            aria-label="Presupuesto mensual"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{currency(200)}</span>
            <span>{currency(10000)}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setBudget(p)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  budget === p
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40"
                }`}
              >
                {currency(p)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Inversión diaria</p>
              <p className="mt-1 text-lg font-bold">{currency(daily)}</p>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Tarifa de gestión</p>
              <p className="mt-1 text-lg font-bold">12%</p>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <p className="text-xs text-muted-foreground">Plataformas activas</p>
              <p className="mt-1 text-lg font-bold">3</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="flex flex-col gap-5 p-6">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Sparkles className="size-3.5 text-accent" />
            Tarifa 12% — baja al invertir más
          </div>

          <div>
            <p className="text-sm text-primary-foreground/70">
              Tu membresía (plan mensual)
            </p>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">{currency(membership)}</span>
              <span className="mb-1 text-sm text-primary-foreground/70">
                /mes
              </span>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Facturación mensual, sin permanencia
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-primary-foreground/15 pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-primary-foreground/70">Inversión en pauta</span>
              <span className="font-medium">{currency(budget)}/mes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-foreground/70">Membresía LocalAd</span>
              <span className="font-medium">{currency(membership)}/mes</span>
            </div>
            <div className="flex justify-between border-t border-primary-foreground/15 pt-3 text-base">
              <span className="font-semibold">Total mensual</span>
              <span className="font-bold">{currency(total)}</span>
            </div>
          </div>

          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Aplicar presupuesto
          </Button>

          <ul className="flex flex-col gap-2 text-xs text-primary-foreground/80">
            {[
              "Optimización diaria automática",
              "Sin permanencia: cambia cuando quieras",
              "Reportes claros de resultados",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="size-3.5 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Distribución diaria calculada por la IA</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {allocation.map((a) => {
            const scaled = Math.round((a.pct / 100) * budget)
            return (
              <div key={a.platform} className="rounded-xl border border-border p-4">
                <p className="text-sm font-medium">{a.platform}</p>
                <p className="mt-1 text-2xl font-bold tracking-tight">
                  {currency(scaled)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {a.pct}% · {currency(scaled / 30)}/día
                </p>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
