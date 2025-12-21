"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function BrandLogo({ className }: { className?: string }) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Avoid hydration mismatch: render nothing until mounted
  if (!mounted) return null

  const src =
    theme === "red"
      ? "/redlogo.png"
      : resolvedTheme === "dark"
        ? "/monwhooperlogo.png"
        : "/lightlogo.png"

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <img src={src} alt="MWSD logo" className="block size-6 pixelated" />
    </span>
  )
}
