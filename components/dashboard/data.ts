export const ACCOUNT = {
  business: "Café Aurora",
  owner: "María Restrepo",
  plan: "Plan $1,500",
  monthlyBudget: 1500,
  membership: 180,
  feeRate: 0.12,
}

export const totalMonthly = ACCOUNT.monthlyBudget + ACCOUNT.membership

export const dailyBudget = Math.round((ACCOUNT.monthlyBudget / 30) * 100) / 100

// Ad Spend Performance — rendimiento mes a mes (lineal y directo)
export const performance = [
  { month: "Ene", invertido: 1500, ventas: 4200, roas: 2.8 },
  { month: "Feb", invertido: 1500, ventas: 4950, roas: 3.3 },
  { month: "Mar", invertido: 1500, ventas: 5400, roas: 3.6 },
  { month: "Abr", invertido: 1500, ventas: 6150, roas: 4.1 },
  { month: "May", invertido: 1500, ventas: 6750, roas: 4.5 },
  { month: "Jun", invertido: 1500, ventas: 7350, roas: 4.9 },
]

// Distribución diaria óptima calculada por la IA
export const allocation = [
  { platform: "Instagram", amount: 660, pct: 44, color: "var(--chart-1)" },
  { platform: "Facebook", amount: 540, pct: 36, color: "var(--chart-2)" },
  { platform: "Buscadores", amount: 300, pct: 20, color: "var(--chart-3)" },
]

export type Platform = {
  id: string
  name: string
  active: boolean
  spend: number
  reach: number
  variants: number
}

export const platforms: Platform[] = [
  { id: "instagram", name: "Instagram", active: true, spend: 660, reach: 18400, variants: 4 },
  { id: "facebook", name: "Facebook", active: true, spend: 540, reach: 15200, variants: 3 },
  { id: "search", name: "Buscadores", active: true, spend: 300, reach: 6800, variants: 2 },
  { id: "tiktok", name: "TikTok", active: false, spend: 0, reach: 0, variants: 0 },
]

export type Campaign = {
  id: string
  name: string
  platform: string
  status: "Activa" | "Optimizando" | "Pausada"
  spend: number
  budget: number
  conversions: number
  roas: number
  ctr: number
}

export const campaigns: Campaign[] = [
  {
    id: "c1",
    name: "Promo brunch de fin de semana",
    platform: "Instagram",
    status: "Activa",
    spend: 412,
    budget: 660,
    conversions: 184,
    roas: 5.2,
    ctr: 3.8,
  },
  {
    id: "c2",
    name: "Café de especialidad — alcance local",
    platform: "Facebook",
    status: "Optimizando",
    spend: 318,
    budget: 540,
    conversions: 121,
    roas: 4.1,
    ctr: 2.9,
  },
  {
    id: "c3",
    name: "Intención de compra: 'cafetería cerca'",
    platform: "Buscadores",
    status: "Activa",
    spend: 176,
    budget: 300,
    conversions: 96,
    roas: 6.4,
    ctr: 5.1,
  },
  {
    id: "c4",
    name: "Reactivación clientes recurrentes",
    platform: "Instagram",
    status: "Pausada",
    spend: 0,
    budget: 0,
    conversions: 0,
    roas: 0,
    ctr: 0,
  },
]

// Segmentación ajustada por la IA en tiempo real
export const audiences = [
  { name: "Alta intención de compra", share: 46, intent: "Alta" },
  { name: "Recompra / fidelización", share: 27, intent: "Media" },
  { name: "Descubrimiento local", share: 18, intent: "Media" },
  { name: "Reconocimiento de marca", share: 9, intent: "Baja" },
]

export const aiAdjustments = [
  {
    time: "Hace 12 min",
    text: "Se redirigió 8% del gasto de Facebook a Instagram por mejor ROAS en horario nocturno.",
  },
  {
    time: "Hace 1 h",
    text: "Pausada variante de anuncio con CTR bajo (1.1%) en Buscadores.",
  },
  {
    time: "Hace 3 h",
    text: "Ampliado radio de segmentación a 8 km para 'cafetería cerca de mí'.",
  },
  {
    time: "Hace 6 h",
    text: "Excluida audiencia de baja intención para proteger el presupuesto diario.",
  },
]

export const currency = (n: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)
