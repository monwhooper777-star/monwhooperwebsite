import { type VariantProps } from "class-variance-authority"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { ReactNode } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { dxGotha } from "@/lib/fonts"

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
  description = "Official Website for Monwhooper",
  mockup = (
    <img
      src="/heroimage.png"
      alt="Red cursor dashboard"
      className="h-auto w-full object-contain"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">Free Water Trials</span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Locals Only
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
      href: "/book-a-call", // replace with Calendly / booking URL when ready
      text: "Book a Call",
      variant: "glow",
      icon: <PhoneIcon className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section className={cn("relative overflow-hidden pb-0", className)}>
      {/* Theme-aware backdrop */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(55%_45%_at_50%_70%,rgba(180,30,45,0.18),rgba(255,255,255,0)_60%)]",
          "dark:bg-[radial-gradient(60%_45%_at_50%_75%,rgba(120,20,30,0.55),rgba(20,0,0,0.88)_70%,rgba(0,0,0,1)_100%)]",
        )}
      />

      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}

          <h1
            className={cn(
              dxGotha.className,
              "animate-appear inline-block text-balance leading-tight",
              "text-4xl sm:text-6xl md:text-8xl",
              "bg-gradient-to-b from-foreground via-foreground/70 to-muted-foreground",
              "bg-clip-text text-transparent",
              "drop-shadow-[0_2px_12px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]",
            )}
          >
            {title}
          </h1>

          {/* Subtitle + Verified avatar */}
          <div className="animate-appear flex items-center justify-center gap-3 opacity-0 delay-100">
            <span className="text-md font-medium text-muted-foreground sm:text-xl">
              {description}
            </span>

            <img
              src="/verified.png"
              alt="Verified — Kenneth Castaneda"
              className="size-7 pixelated opacity-90"
            />
          </div>

          {/* CTA Buttons */}
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear flex justify-center gap-4 opacity-0 delay-300">
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

          {/* Supporting philosophy line */}
          <p className="animate-appear text-sm font-medium text-muted-foreground opacity-0 delay-500">
            For those seeking to upgrade their health &amp; mind, a profound way in which you can do this you will discover is via the right quality of water.
          </p>

          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame className="animate-appear opacity-0 delay-700" size="small">
                <Mockup
                  type="responsive"
                  className="w-full rounded-xl border-0 bg-background/90"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>

              <Glow
                variant="top"
                className="pointer-events-none -z-10 animate-appear-zoom opacity-0 delay-1000 opacity-20 dark:opacity-50"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
