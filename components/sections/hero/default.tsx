import { type VariantProps } from "class-variance-authority"
import { ArrowRightIcon } from "lucide-react"
import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { dxGotha } from "@/lib/fonts"

import Github from "../../logos/github"
import { Badge } from "../../ui/badge"
import { Button, buttonVariants } from "../../ui/button"
import Glow from "../../ui/glow"
import { Mockup, MockupFrame } from "../../ui/mockup"
import { Section } from "../../ui/section"

interface HeroButtonProps {
  href: string
  text: string
  variant?: VariantProps<typeof buttonVariants>["variant"]
  icon?: ReactNode
  iconRight?: ReactNode
}

interface HeroProps {
  title?: string
  description?: string
  mockup?: ReactNode | false
  badge?: ReactNode | false
  buttons?: HeroButtonProps[] | false
  className?: string
}

export default function Hero({
  title = "Monwhooper1776 - Stay Dangerous",
  description =
    "Monwhooper1776 - Stay Dangerous is a personal brand created by Kenneth Castenada, the maxim Stay Dangerous encapsulates the main philosophy of the brand.",
  mockup = (
    <img
      src="/healingweb.png"
      alt="Healing Web diagram"
      className="w-full h-auto object-contain"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        Free Water Trials
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Get started
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl || "/",
      text: "Get Started",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "Github",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      {/* 🔴 RED BRAND GRADIENT BACKDROP */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(60%_45%_at_50%_75%,rgba(120,20,30,0.45),rgba(20,0,0,0.85)_70%,rgba(0,0,0,1)_100%)]
        "
      />

      <div className="relative z-10 max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}

          {/* DX Gotha + silver gradient */}
          <h1
            className={cn(
              dxGotha.className,
              "animate-appear relative z-10 inline-block text-balance",
              "text-4xl sm:text-6xl md:text-8xl leading-tight",
              "bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500",
              "bg-clip-text text-transparent",
              "drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]",
            )}
          >
            {title}
          </h1>

          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}

          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
