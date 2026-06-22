import { LocalAdLogo } from '@/components/localad-logo'

const columns = [
  {
    title: 'Producto',
    links: ['Cómo funciona', 'Beneficios', 'Planes', 'Preguntas'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Blog', 'Casos de éxito', 'Contacto'],
  },
  {
    title: 'Legal',
    links: ['Términos', 'Privacidad', 'Cookies'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <LocalAdLogo className="h-7 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Publicidad gestionada por inteligencia artificial para
              emprendimientos, micro y pequeñas empresas. Pauta inteligente,
              presupuesto justo.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} LocalAd. Todos los derechos reservados.`}
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho para presupuestos reales.
          </p>
        </div>
      </div>
    </footer>
  )
}
