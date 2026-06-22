"use client"

import { useState } from "react"
import { Search, Music2, Upload, Sparkles, ImageIcon } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { currency } from "./data"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 9h3l.4-3H14V4.3c0-.8.3-1.3 1.5-1.3H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.3V6H7.5v3h2.8v9H14V9z" />
    </svg>
  )
}

const channels: {
  id: string
  name: string
  icon: IconType
  recommended: boolean
}[] = [
  { id: "instagram", name: "Instagram", icon: InstagramIcon, recommended: true },
  { id: "facebook", name: "Facebook", icon: FacebookIcon, recommended: true },
  { id: "search", name: "Buscadores", icon: Search, recommended: true },
  { id: "tiktok", name: "TikTok", icon: Music2, recommended: false },
]

const variants = [
  {
    channel: "Instagram",
    headline: "Tu café de especialidad favorito, recién hecho",
    body: "Brunch de fin de semana en Café Aurora. Reserva tu mesa hoy.",
    format: "Reel vertical 9:16",
  },
  {
    channel: "Facebook",
    headline: "El mejor café de barrio está a la vuelta",
    body: "Granos de origen, ambiente acogedor y wifi rápido. Te esperamos.",
    format: "Imagen única 1:1",
  },
  {
    channel: "Buscadores",
    headline: "Cafetería cerca de ti — abierta ahora",
    body: "Café de especialidad y brunch. Cómo llegar ›",
    format: "Anuncio de texto",
  },
]

export function Platforms() {
  const [selected, setSelected] = useState<string[]>([
    "instagram",
    "facebook",
    "search",
  ])

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Tu producto o servicio</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <button className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/50 px-4 py-8 text-center transition-colors hover:border-accent">
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                <Upload className="size-5" />
              </span>
              <span className="text-sm font-medium">Sube la foto de tu producto</span>
              <span className="text-xs text-muted-foreground">
                JPG o PNG, o describe tu servicio
              </span>
            </button>
            <textarea
              rows={3}
              defaultValue="Café de especialidad y brunch en un local acogedor de barrio."
              className="w-full resize-none rounded-lg border border-input bg-card p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Describe brevemente tu servicio…"
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Selecciona dónde anunciarte</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {channels.map((c) => {
                const Icon = c.icon
                const isOn = selected.includes(c.id)
                return (
                  <button
                    key={c.id}
                    onClick={() => toggle(c.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors",
                      isOn
                        ? "border-accent bg-accent/10"
                        : "border-border bg-card hover:border-accent/40",
                    )}
                    aria-pressed={isOn}
                  >
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-lg",
                        isOn
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-muted-foreground",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-medium">{c.name}</span>
                    {c.recommended && (
                      <span className="text-[10px] font-medium text-accent">
                        Recomendada
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-secondary p-3 text-sm text-muted-foreground">
              <Sparkles className="size-4 shrink-0 text-accent" />
              La IA redacta automáticamente variantes de anuncios y adapta el
              formato visual y el texto para cada red seleccionada.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-accent" />
            Variantes generadas por IA
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {variants
            .filter((v) =>
              selected.some(
                (s) =>
                  channels.find((c) => c.id === s)?.name === v.channel,
              ),
            )
            .map((v) => (
              <div
                key={v.channel}
                className="flex flex-col gap-3 rounded-xl border border-border p-4"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{v.channel}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {v.format}
                  </span>
                </div>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                  <ImageIcon className="size-7" />
                </div>
                <p className="text-sm font-semibold leading-snug">
                  {v.headline}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
                <Button variant="outline" size="sm" className="mt-1 w-fit">
                  Editar variante
                </Button>
              </div>
            ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            {selected.length} plataforma(s) seleccionada(s) · presupuesto en
            pauta {currency(1500)}/mes
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Lanzar campañas
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
