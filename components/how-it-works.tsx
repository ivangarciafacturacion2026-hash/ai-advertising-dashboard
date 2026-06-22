import Link from 'next/link'
import { Wallet, Settings2, Rocket, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: Wallet,
    step: '01',
    title: 'Define tu presupuesto',
    description:
      'Ingresa a tu panel y elige el monto mensual exacto que deseas invertir. Tú tienes el control total del dinero, sin cargos ocultos. La IA calcula la distribución diaria óptima para que tu inversión rinda al máximo en cada plataforma.',
  },
  {
    icon: Settings2,
    step: '02',
    title: 'Selecciona plataformas',
    description:
      'Sube la foto de tu producto o una descripción básica del servicio y elige con iconos simples dónde anunciarte: Facebook, Instagram o Buscadores. El sistema redacta variantes de anuncios atractivas, adaptando formato y texto a cada red.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Monitorea tus ventas',
    description:
      'Olvídate de gráficas confusas. En tu panel "Ad Spend Performance" ves de forma lineal y directa cómo progresa tu inversión mes a mes, mientras la IA ajusta la segmentación en tiempo real 24/7 hacia clientes con alta intención de compra.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Publicidad profesional en 3 pasos
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sin agencias caras ni contratos eternos. LocalAd está diseñado para
            emprendimientos, micro y pequeñas empresas que quieren resultados sin
            complicarse.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-secondary p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="size-6" />
                </span>
                <span className="text-4xl font-bold text-border">{s.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link
            href="/panel"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-11 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            Ver el panel de control
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
