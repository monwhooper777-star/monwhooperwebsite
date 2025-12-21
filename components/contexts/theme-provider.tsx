"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="red"
      enableSystem={false}
      themes={["light", "dark", "red"]}
      disableTransitionOnChange
      storageKey="monwhooper-theme"
    >
      {children}
    </NextThemeProvider>
  )
}
