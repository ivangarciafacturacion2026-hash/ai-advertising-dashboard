"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Sidebar, type ViewId } from "./sidebar"
import { Logo } from "./logo"
import { Overview } from "./overview"
import { BudgetControl } from "./budget-control"
import { Platforms } from "./platforms"
import { Campaigns } from "./campaigns"
import { Segmentation } from "./segmentation"
import { ACCOUNT } from "./data"
import { cn } from "@/lib/utils"

const titles: Record<ViewId, { title: string; sub: string }> = {
  overview: {
    title: "Resumen",
    sub: "Monitorea tus ventas y el rendimiento de tu inversión.",
  },
  budget: {
    title: "Presupuesto",
    sub: "Define cuánto inviertes al mes. Tú tienes el control.",
  },
  platforms: {
    title: "Plataformas",
    sub: "Elige dónde anunciarte y revisa las variantes de la IA.",
  },
  campaigns: {
    title: "Campañas",
    sub: "Todas tus campañas gestionadas por inteligencia artificial.",
  },
  segmentation: {
    title: "Segmentación",
    sub: "A quién llega tu pauta y cómo la ajusta la IA.",
  },
}

const mobileNav: { id: ViewId; label: string }[] = [
  { id: "overview", label: "Resumen" },
  { id: "budget", label: "Presupuesto" },
  { id: "platforms", label: "Plataformas" },
  { id: "campaigns", label: "Campañas" },
  { id: "segmentation", label: "Segmentación" },
]

export function DashboardShell() {
  const [view, setView] = useState<ViewId>("overview")
  const head = titles[view]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={view} onChange={setView} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="lg:hidden">
                <Logo showText={false} />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight sm:text-xl">
                  {head.title}
                </h1>
                <p className="hidden text-sm text-muted-foreground sm:block">
                  {head.sub}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground md:flex">
                <Search className="size-4" />
                <span>Buscar…</span>
              </div>
              <button
                className="relative flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground"
                aria-label="Notificaciones"
              >
                <Bell className="size-[18px]" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-accent" />
              </button>
              <div className="flex items-center gap-2">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                    MR
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-sm leading-tight sm:block">
                  <p className="font-medium">{ACCOUNT.owner}</p>
                  <p className="text-xs text-muted-foreground">
                    {ACCOUNT.business}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          <nav className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 lg:hidden">
            {mobileNav.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  view === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          {view === "overview" && <Overview />}
          {view === "budget" && <BudgetControl />}
          {view === "platforms" && <Platforms />}
          {view === "campaigns" && <Campaigns />}
          {view === "segmentation" && <Segmentation />}
        </main>
      </div>
    </div>
  )
}
