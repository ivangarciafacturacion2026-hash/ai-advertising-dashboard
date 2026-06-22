import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Cta() {
  return (
    <section id="contacto" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12 lg:py-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Tu próxima campaña empieza hoy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Únete a los emprendimientos y pequeñas empresas que ya pautan de
            forma inteligente. Empieza desde $30 al mes y deja que la IA haga
            crecer tu negocio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#planes"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 px-6 text-base bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Crear mi cuenta
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#como-funciona"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-11 px-6 text-base border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
              )}
            >
              Hablar con el equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
