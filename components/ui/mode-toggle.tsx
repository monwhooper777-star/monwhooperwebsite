"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { ChevronsUpDownIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // What we display in the trigger:
  // - If user chose "system", show the resolved theme ("light" or "dark")
  // - If user chose "red", show "red"
  // - Otherwise show "light" or "dark"
  const label =
    theme === "system" ? (resolvedTheme ?? "system") : (theme ?? "theme")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1 px-2 py-0 text-xs">
          <span className="capitalize">{label}</span>
          <span className="inline"> theme</span>
          <ChevronsUpDownIcon className="size-3" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("red")}>
          Red
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
