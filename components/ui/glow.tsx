import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

import { cn } from "@/lib/utils"

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

type GlowProps = React.ComponentProps<"div"> &
  VariantProps<typeof glowVariants> & {
    /**
     * Optional per-instance overrides for the theme "brand" colors used by bg-radial utilities.
     * Use the same format as your CSS variables (commonly: "R G B").
     */
    brand?: string
    brandForeground?: string
  }

export default function Glow({
  className,
  variant,
  brand,
  brandForeground,
  style,
  ...props
}: GlowProps) {
  const mergedStyle = {
    ...(style ?? {}),
    ...(brand ? { ["--brand" as any]: brand } : {}),
    ...(brandForeground ? { ["--brand-foreground" as any]: brandForeground } : {}),
  } as React.CSSProperties

  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      style={mergedStyle}
      {...props}
    >
      <div
        className={cn(
          "from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  )
}
