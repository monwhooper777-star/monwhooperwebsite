import { cn } from "@/lib/utils"

export default function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {/* Light mode */}
      <img
        src="/lightlogo.png"
        alt="MWSD logo"
        className="block size-6 pixelated dark:hidden"
      />

      {/* Dark mode */}
      <img
        src="/monwhooperlogo.png"
        alt="MWSD logo"
        className="hidden size-6 pixelated dark:block"
      />
    </span>
  )
}
