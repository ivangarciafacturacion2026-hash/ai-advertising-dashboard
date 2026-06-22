"use client"

import {
  LayoutDashboard,
  Wallet,
  LayoutGrid,
  Megaphone,
  Target,
  Sparkles,
  Settings,
  LifeBuoy,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { ACCOUNT } from "./data"

export type ViewId =
  | "overview"
  | "budget"
  | "platforms"
  | "campaigns"
  | "segmentation"

const nav: { id: ViewId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Resumen", icon: LayoutDashboard },
  { id: "budget", label: "Presupuesto", icon: Wallet },
  { id: "platforms", label: "Plataformas", icon: LayoutGrid },
  { id: "campaigns", label: "Campañas", icon: Megaphone },
  { id: "segmentation", label: "Segmentación", icon: Target },
]

export function Sidebar({
  active,
  onChange,
}: {
  active: ViewId
  onChange: (id: ViewId) => void
}) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-sidebar p-4 text-sidebar-foreground lg:flex">
      <div className="px-2 py-3">
        <Logo />
      </div>

      <nav className="mt-4 flex flex-1 flex-col gap-1">
        {nav.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="size-[18px]" />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-4 rounded-xl bg-sidebar-accent p-4">
        <div className="flex items-center gap-2 text-sidebar-foreground">
          <Sparkles className="size-4 text-accent" />
          <span className="text-sm font-semibold">IA activa 24/7</span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-sidebar-foreground/70">
          Ajustando segmentación en tiempo real hacia clientes con alta
          intención de compra.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-1 border-t border-sidebar-border pt-4">
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
          <Settings className="size-[18px]" />
          Configuración
        </button>
        <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
          <LifeBuoy className="size-[18px]" />
          Soporte
        </button>
        <div className="mt-2 px-3 text-xs text-sidebar-foreground/50">
          {ACCOUNT.plan} · {ACCOUNT.business}
        </div>
      </div>
    </aside>
  )
}
