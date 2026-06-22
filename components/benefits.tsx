import Image from 'next/image'
import { BrainCircuit, Target, LineChart, Clock, ShieldCheck, Coins } from 'lucide-react'

const benefits = [
  {
    icon: BrainCircuit,
    title: 'IA que aprende de tu negocio',
    description:
      'Analiza tus campañas las 24 horas y reasigna el presupuesto hacia los anuncios y audiencias que más venden.',
  },
  {
    icon: Coins,
    title: 'Tarifa proporcional y justa',
    description:
      'Pagas un porcentaje de tu presupuesto: 15% en el plan inicial y hasta 9.5% en los más altos. Sin costos ocultos.',
  },
  {
    icon: Target,
    title: 'Segmentación precisa',
    description:
      'Encontramos a tus clientes ideales por ubicación, intereses y comportamiento para no desperdiciar ni un dólar.',
  },
  {
    icon: LineChart,
    title: 'Reportes que entiendes',
    description:
      'Nada de métricas confusas. Verás cuánto invertiste, qué generó y cuál es tu retorno, en lenguaje claro.',
  },
  {
    icon: Clock,
    title: 'Ahorra tiempo real',
    description:
      'Dejas de pelear con plataformas de anuncios. La IA hace el trabajo técnico mientras tú atiendes tu negocio.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin permanencia',
    description:
      'Tu membresía es mensual y la cancelas cuando quieras. Creemos en retenerte con resultados, no con contratos.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last lg:order-first">
            <Image
              src="/ai-managing-ads.png"
              alt="Ilustración de una inteligencia artificial gestionando campañas publicitarias para pequeños negocios"
              width={800}
              height={640}
              className="rounded-2xl border border-border bg-background shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Una agencia con IA por una fracción del costo
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Reunimos lo mejor de una agencia de marketing y el poder de la
              inteligencia artificial, a un precio pensado para presupuestos
              ajustados.
            </p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b.title} className="flex flex-col gap-2">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
