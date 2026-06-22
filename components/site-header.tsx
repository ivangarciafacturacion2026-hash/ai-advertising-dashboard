'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { LocalAdLogo } from '@/components/localad-logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#plataformas', label: 'Plataformas' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#planes', label: 'Calculadora' },
  { href: '#preguntas', label: 'Preguntas' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" aria-label="LocalAd, inicio">
          <LocalAdLogo className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#planes"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-primary hover:text-primary',
            )}
          >
            Iniciar sesión
          </a>
          <a
            href="#planes"
            className={cn(
              buttonVariants(),
              'bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            Empezar gratis
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="#planes"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'border-primary text-primary',
                )}
              >
                Iniciar sesión
              </a>
              <a
                href="#planes"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  'bg-accent text-accent-foreground hover:bg-accent/90',
                )}
              >
                Empezar gratis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
