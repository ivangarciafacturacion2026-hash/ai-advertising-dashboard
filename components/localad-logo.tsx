import Image from 'next/image'
import { cn } from '@/lib/utils'

export function LocalAdLogo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Image
        src="/localad-icon.png"
        alt="LocalAd"
        width={36}
        height={36}
        className="size-8 w-auto object-contain"
        priority
      />
      <span
        className={cn(
          'text-lg font-bold tracking-tight',
          invert ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        Local<span className="text-accent">Ad</span>
      </span>
    </span>
  )
}
