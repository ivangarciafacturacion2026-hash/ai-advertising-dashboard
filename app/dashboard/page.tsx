import type { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export const metadata: Metadata = {
  title: "Panel de control — LocalAd",
  description:
    "Gestiona tu presupuesto publicitario, plataformas y campañas optimizadas por IA con LocalAd.",
}

export default function DashboardPage() {
  return <DashboardShell />
}
