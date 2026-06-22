export const MIN_BUDGET = 200
export const MAX_BUDGET = 10000

/**
 * Rate anchors: smaller budgets pay a higher management fee (15%),
 * larger budgets pay as low as 9.5%. Values in between are interpolated
 * linearly so the calculator feels continuous.
 */
const RATE_ANCHORS: { budget: number; rate: number }[] = [
  { budget: 200, rate: 15 },
  { budget: 500, rate: 13 },
  { budget: 1500, rate: 12 },
  { budget: 5000, rate: 10.5 },
  { budget: 10000, rate: 9.5 },
]

/** Management fee percentage for a given monthly ad budget. */
export function rateForBudget(budget: number): number {
  const b = Math.min(Math.max(budget, MIN_BUDGET), MAX_BUDGET)

  for (let i = 0; i < RATE_ANCHORS.length - 1; i++) {
    const lo = RATE_ANCHORS[i]
    const hi = RATE_ANCHORS[i + 1]
    if (b >= lo.budget && b <= hi.budget) {
      const t = (b - lo.budget) / (hi.budget - lo.budget)
      const rate = lo.rate + t * (hi.rate - lo.rate)
      return Math.round(rate * 10) / 10
    }
  }
  return RATE_ANCHORS[RATE_ANCHORS.length - 1].rate
}

/** Monthly management fee in USD for a given ad budget. */
export function monthlyFee(budget: number): number {
  return Math.round((budget * rateForBudget(budget)) / 100)
}

/** Annual plans give 2 months free: pay 10 months, get 12. */
export const ANNUAL_FREE_MONTHS = 2

export function annualTotal(budget: number): number {
  return monthlyFee(budget) * (12 - ANNUAL_FREE_MONTHS)
}

export function annualMonthly(budget: number): number {
  return Math.round(annualTotal(budget) / 12)
}

export function annualSavings(budget: number): number {
  return monthlyFee(budget) * 12 - annualTotal(budget)
}

export function formatUSD(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

/** What's included at every budget level. */
export const includedFeatures: string[] = [
  'Gestión 100% con inteligencia artificial',
  'Optimización diaria de campañas',
  'Creatividades y copys generados por IA',
  'Segmentación y pruebas A/B automáticas',
  'Reportes claros de resultados',
  'Sin permanencia: cancela cuando quieras',
]

export type PlatformStatus = 'active' | 'recent' | 'soon'

export type Platform = {
  id: string
  name: string
  logo: string
  status: PlatformStatus
  note: string
}

export const platforms: Platform[] = [
  {
    id: 'meta',
    name: 'Meta Ads',
    logo: '/logos/meta-color.svg',
    status: 'active',
    note: 'Facebook e Instagram',
  },
  {
    id: 'google',
    name: 'Google Ads',
    logo: '/logos/google-color.svg',
    status: 'active',
    note: 'Búsqueda, Display y YouTube',
  },
  {
    id: 'tiktok',
    name: 'TikTok Ads',
    logo: '/logos/tiktok-default.svg',
    status: 'recent',
    note: 'Pocas agencias en El Salvador ya pautan aquí',
  },
  {
    id: 'pinterest',
    name: 'Pinterest Ads',
    logo: '/logos/pinterest-default.svg',
    status: 'soon',
    note: 'Disponible en agosto',
  },
]
