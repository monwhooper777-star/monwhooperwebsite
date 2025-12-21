"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function ShinyButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground",
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full animate-shimmer bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}
