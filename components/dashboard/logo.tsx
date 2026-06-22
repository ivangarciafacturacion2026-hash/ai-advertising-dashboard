import { cn } from "@/lib/utils"

export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent">
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-accent-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight">
          Local<span className="text-accent">Ad</span>
        </span>
      )}
    </div>
  )
}
