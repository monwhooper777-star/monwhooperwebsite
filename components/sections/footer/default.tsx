import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { dxGotha } from "@/lib/fonts"

import LaunchUI from "../../logos/launch-ui"
import { Footer, FooterBottom, FooterColumn, FooterContent } from "../../ui/footer"
import { ModeToggle } from "../../ui/mode-toggle"

interface FooterLink {
  text: string
  href: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  logo?: ReactNode
  name?: string
  columns?: FooterColumnProps[]
  copyright?: string
  policies?: FooterLink[]
  showModeToggle?: boolean
  className?: string
}

export default function FooterSection({
  // keep your existing logo component (wolf icon etc) that you pass in from elsewhere
  logo = <LaunchUI />,
  name = "MWSD",
  columns = [
    {
      title: "Explore",
      links: [
        { text: "Getting started", href: "/" },
        { text: "Components", href: "/" },
        { text: "Documentation", href: "/" },
      ],
    },
    {
      title: "Links",
      links: [
        { text: "Water Trials", href: siteConfig.getStartedUrl || "/" },
        { text: "Github", href: siteConfig.links.github },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Email", href: siteConfig.links.email || "mailto:" },
        { text: "Twitter", href: siteConfig.links.twitter || "#" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} MWSD. All rights reserved.`,
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full bg-background px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3
                  className={cn(
                    dxGotha.className,
                    "text-xl font-normal leading-none tracking-wide",
                  )}
                >
                  {name}
                </h3>
              </div>
            </FooterColumn>

            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="pt-1 text-md font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>

          <FooterBottom>
            <div className="text-muted-foreground text-sm">{copyright}</div>

            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  )
}
