import { type VariantProps } from "class-variance-authority"
import { Menu } from "lucide-react"
import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { dxGotha } from "@/lib/fonts"

import BrandLogo from "../../logos/brand-logo"
import { Button, buttonVariants } from "../../ui/button"
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar"
import Navigation from "../../ui/navigation"
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet"

interface NavbarLink {
  text: string
  href: string
}

interface NavbarActionProps {
  text: string
  href: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  icon?: ReactNode
  iconRight?: ReactNode
  isButton?: boolean
}

interface NavbarProps {
  logo?: ReactNode
  name?: string
  homeUrl?: string
  mobileLinks?: NavbarLink[]
  actions?: NavbarActionProps[]
  showNavigation?: boolean
  customNavigation?: ReactNode
  className?: string
}

export default function Navbar({
  logo = <BrandLogo />,
  name = "MWSD",
  homeUrl = "/",
  mobileLinks = [
    { text: "Getting started", href: "/" },
    { text: "Components", href: "/" },
    { text: "Documentation", href: "/" },
  ],
  actions = [
    {
      text: "Water Trials",
      href: siteConfig.getStartedUrl || "/",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg" />

      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href={homeUrl} className="flex items-center gap-2">
              {logo}

              <span
                className={cn(
                  dxGotha.className,
                  "text-xl font-normal leading-none tracking-wide",
                )}
              >
                {name}
              </span>
            </a>

            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>

          <NavbarRight>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                size="sm"
                asChild
              >
                <a href={action.href}>
                  {action.icon}
                  {action.text}
                  {action.iconRight}
                </a>
              </Button>
            ))}

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a href={homeUrl} className="flex items-center gap-2">
                    {logo}

                    <span
                      className={cn(
                        dxGotha.className,
                        "text-xl font-normal leading-none tracking-wide",
                      )}
                    >
                      {name}
                    </span>
                  </a>

                  {mobileLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  )
}
