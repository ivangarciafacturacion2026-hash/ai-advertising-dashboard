'use client'

import { useState } from 'react'
import { Check, TrendingDown, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  MIN_BUDGET,
  MAX_BUDGET,
  rateForBudget,
  monthlyFee,
  annualMonthly,
  annualSavings,
  annualTotal,
  formatUSD,
  includedFeatures,
} from '@/lib/plans'

type Billing = 'monthly' | 'annual'

const QUICK_PICKS = [200, 500, 1500, 5000, 10000]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const [budget, setBudget] = useState(1500)

  const rate = rateForBudget(budget)
  const isAnnual = billing === 'annual'
  const fee = isAnnual ? annualMonthly(budget) : monthlyFee(budget)
  const savings = annualSavings(budget)
  const total = budget + fee

  const sliderPct =
    ((budget - MIN_BUDGET) / (MAX_BUDGET - MIN_BUDGET)) * 100

  return (
    <section id="planes" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Calcula tu membresía a medida
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sin planes rígidos. Elige cuánto quieres invertir en pauta y mira al
            instante cuánto cuesta que la IA de LocalAd la gestione por ti.
          </p>
        </div>

        <BillingToggle billing={billing} onChange={setBilling} />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Calculator controls */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 lg:p-8">
            <label
              htmlFor="budget"
              className="text-sm font-medium text-muted-foreground"
            >
              Presupuesto publicitario mensual
            </label>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-foreground sm:text-5xl">
                {formatUSD(budget)}
              </span>
              <span className="mb-1.5 text-sm text-muted-foreground">/mes</span>
            </div>

            <input
              id="budget"
              type="range"
              min={MIN_BUDGET}
              max={MAX_BUDGET}
              step={50}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              aria-label="Presupuesto publicitario mensual"
              className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow"
              style={{
                background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${sliderPct}%, var(--border) ${sliderPct}%, var(--border) 100%)`,
              }}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{formatUSD(MIN_BUDGET)}</span>
              <span>{formatUSD(MAX_BUDGET)}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {QUICK_PICKS.map((value) => (
                <button
                  key={value}
                  onClick={() => setBudget(value)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                    budget === value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-primary',
                  )}
                >
                  {formatUSD(value)}
                </button>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result summary */}
          <div className="flex flex-col rounded-2xl border border-accent bg-primary p-6 text-primary-foreground ring-1 ring-accent lg:col-span-2 lg:p-8">
            <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
              <TrendingDown className="size-3.5" />
              Tarifa {rate}% — baja al invertir más
            </div>

            <p className="mt-6 text-sm text-primary-foreground/70">
              Tu membresía {isAnnual ? '(plan anual)' : '(plan mensual)'}
            </p>
            <div className="mt-1 flex items-end gap-1">
              <span className="text-5xl font-bold">{formatUSD(fee)}</span>
              <span className="mb-2 text-sm text-primary-foreground/70">
                /mes
              </span>
            </div>

            {isAnnual ? (
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <Sparkles className="size-4" />
                Ahorras {formatUSD(savings)} al año
              </p>
            ) : (
              <p className="mt-2 text-sm text-primary-foreground/70">
                Facturación mensual, sin permanencia
              </p>
            )}

            <div className="mt-6 space-y-3 border-t border-primary-foreground/15 pt-6 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-primary-foreground/70">
                  Inversión en pauta
                </span>
                <span className="font-semibold">{formatUSD(budget)}/mes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-foreground/70">
                  Membresía LocalAd
                </span>
                <span className="font-semibold">{formatUSD(fee)}/mes</span>
              </div>
              {isAnnual && (
                <div className="flex items-center justify-between">
                  <span className="text-primary-foreground/70">
                    Cobro anual de membresía
                  </span>
                  <span className="font-semibold">
                    {formatUSD(annualTotal(budget))}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between border-t border-primary-foreground/15 pt-3 text-base">
                <span className="font-medium">Total mensual</span>
                <span className="font-bold">{formatUSD(total)}</span>
              </div>
            </div>

            <a
              href="#contacto"
              className={cn(
                buttonVariants(),
                'mt-8 h-11 w-full bg-accent text-base text-accent-foreground hover:bg-accent/90',
              )}
            >
              Empezar con {formatUSD(budget)}
            </a>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          La membresía es la tarifa de gestión de LocalAd. La inversión
          publicitaria (lo que pagas a Meta, Google, TikTok, etc.) corre por tu
          cuenta directamente en cada plataforma.
        </p>
      </div>
    </section>
  )
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing
  onChange: (b: Billing) => void
}) {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div
        role="tablist"
        aria-label="Tipo de facturación"
        className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1"
      >
        <button
          role="tab"
          aria-selected={billing === 'monthly'}
          onClick={() => onChange('monthly')}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-colors',
            billing === 'monthly'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary',
          )}
        >
          Mensual
        </button>
        <button
          role="tab"
          aria-selected={billing === 'annual'}
          onClick={() => onChange('annual')}
          className={cn(
            'flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors',
            billing === 'annual'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-primary',
          )}
        >
          Anual
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
            2 meses gratis
          </span>
        </button>
      </div>
    </div>
  )
}
