import { Plus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cómo se calcula el costo de mi membresía?',
    a: 'Tu membresía es un porcentaje de tu presupuesto publicitario mensual. Empieza en 15% para el plan de $200 y baja hasta 9.5% en el plan de $10.000. Así, mientras más inviertes en pauta, menor es la tarifa proporcional que pagas.',
  },
  {
    q: '¿La membresía incluye el dinero de los anuncios?',
    a: 'No. La membresía cubre la gestión y optimización con IA de tus campañas. La inversión publicitaria (lo que pagan las plataformas como Meta o Google) se cobra por separado según el presupuesto del plan que elijas.',
  },
  {
    q: '¿Necesito saber de marketing para usar LocalAd?',
    a: 'Para nada. LocalAd está pensado para emprendedores y dueños de pequeños negocios. La inteligencia artificial se encarga de la parte técnica: crear, segmentar y optimizar. Tú solo defines tu presupuesto y revisas resultados claros.',
  },
  {
    q: '¿Qué gano si elijo el plan anual?',
    a: 'Con cualquier plan anual obtienes 2 meses gratis: pagas el equivalente a 10 meses y disfrutas los 12. Es la forma más económica de mantener tus campañas activas todo el año.',
  },
  {
    q: '¿Puedo cambiar de plan o cancelar?',
    a: 'Sí. Puedes subir o bajar de plan cuando tu presupuesto lo necesite, y cancelar en cualquier momento sin penalizaciones. No manejamos contratos de permanencia.',
  },
  {
    q: '¿En qué plataformas pauta LocalAd?',
    a: 'Trabajamos con las principales plataformas de publicidad digital como Meta (Facebook e Instagram) y Google Ads. La cantidad de plataformas disponibles depende del plan que contrates.',
  },
]

export function Faq() {
  return (
    <section id="preguntas" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Todo lo que necesitas saber antes de empezar a pautar con LocalAd.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border bg-background p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground">
                {faq.q}
                <Plus className="size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
