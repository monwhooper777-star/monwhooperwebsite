import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { dxGotha } from "@/lib/fonts"

import { Button } from "../../ui/button"
import Github from "../../logos/github"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-4">
        {/* LEFT: LOGO */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 text-sm font-semibold tracking-tight",
            dxGotha.className,
          )}
        >
          MWSD
        </Link>

        {/* CENTER NAV */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/docs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Getting started
          </Link>
          <Link
            href="/components"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Components
          </Link>
          <Link
            href="/documentation"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Documentation
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
          </Button>

          {/* 🔴 TEXT CHANGED HERE */}
          <Button asChild size="sm">
            <a href={siteConfig.getStartedUrl}>Water Trials</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
