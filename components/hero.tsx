import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="size-4 text-accent" />
            Publicidad gestionada por inteligencia artificial
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pauta como las grandes, con el presupuesto que{' '}
            <span className="text-primary">tienes hoy</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            LocalAd convierte tu presupuesto publicitario en resultados. Eliges
            una membresía proporcional a lo que puedes invertir, desde $200, y
            nuestra IA gestiona, optimiza y reporta tus campañas por ti.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#planes"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Empezar ahora
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#como-funciona"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-11 px-6 text-base border-primary text-primary hover:bg-secondary',
              )}
            >
              Ver cómo funciona
            </a>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6">
            <div>
              <dt className="text-sm text-muted-foreground">Desde</dt>
              <dd className="text-2xl font-bold text-foreground">$30/mes</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Tarifa mínima</dt>
              <dd className="text-2xl font-bold text-foreground">9.5%</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Sin permanencia</dt>
              <dd className="text-2xl font-bold text-foreground">Cancela cuando quieras</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-secondary" aria-hidden="true" />
          <Image
            src="/dashboard-localad.png"
            alt="Panel de LocalAd mostrando el rendimiento de campañas, asignación de presupuesto y sugerencias de la inteligencia artificial"
            width={900}
            height={680}
            priority
            className="relative rounded-2xl border border-border shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
