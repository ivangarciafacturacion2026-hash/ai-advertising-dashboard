import Image from 'next/image'
import { platforms, type PlatformStatus } from '@/lib/plans'

const STATUS_BADGE: Record<
  PlatformStatus,
  { label: string; className: string }
> = {
  active: {
    label: 'Disponible',
    className: 'bg-primary/10 text-primary',
  },
  recent: {
    label: 'Nuevo',
    className: 'bg-accent/15 text-accent',
  },
  soon: {
    label: 'Agosto',
    className: 'bg-muted-foreground/15 text-muted-foreground',
  },
}

export function Platforms() {
  return (
    <section id="plataformas" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pauta en las plataformas que sí mueven ventas
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Nuestra IA distribuye tu presupuesto entre los canales con mejor
            rendimiento. Fuimos de las primeras en El Salvador en pautar con
            TikTok Ads, y Pinterest llega en agosto.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => {
            const badge = STATUS_BADGE[platform.status]
            return (
              <div
                key={platform.id}
                className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary">
                    <Image
                      src={platform.logo}
                      alt={`Logo de ${platform.name}`}
                      width={28}
                      height={28}
                      className="size-7 object-contain"
                    />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {platform.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {platform.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          ¿Necesitas otra plataforma? La IA puede integrar nuevos canales según
          tu objetivo.
        </p>
      </div>
    </section>
  )
}
