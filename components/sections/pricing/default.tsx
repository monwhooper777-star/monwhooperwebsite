import { CreditCard, Calendar, ShieldCheck } from "lucide-react"

import { cn } from "@/lib/utils"

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column"
import { Section } from "../../ui/section"

/**
 * Update these values to match the exact US distributor payment options for Leveluk K8.
 * Keep them factual and consistent with whatever the distributor presents.
 */
const K8_PRICING = {
  productName: "Leveluk K8",
  currencySymbol: "$",
  // If you don't want to show a specific cash price, set cashPrice to null and adjust below.
  cashPrice: null as number | null,

  // Monthly plan (example placeholders — replace with the real offer)
  monthly: {
    termMonths: 0, // e.g. 24, 36, 48
    payment: null as number | null, // e.g. 199
    aprText: "Subject to approval", // keep safe unless you have exact APR
  },

  // Down payment option (optional)
  downPayment: {
    enabled: false,
    amount: null as number | null,
    notes: "Varies by program",
  },
}

interface PricingProps {
  title?: string | false
  description?: string | false
  plans?: PricingColumnProps[] | false
  className?: string
}

export default function Pricing({
  title = "Payment options for the Leveluk K8",
  description =
    "Choose the option that fits your budget. Payment plans vary by distributor program and are subject to approval.",
  plans = [
    {
      name: "Pay in Full",
      icon: <CreditCard className="size-4" />,
      description:
        "One-time purchase for the Leveluk K8 through an independent distributor.",
      // If cashPrice is unknown, we avoid showing a fake number and use a placeholder string via priceNote.
      price: K8_PRICING.cashPrice ?? 0,
      priceNote:
        K8_PRICING.cashPrice === null
          ? "Request current pricing"
          : `One-time payment`,
      cta: {
        variant: "default",
        label: "Request current price",
        href: "/#contact",
      },
      features: [
        "Best for buyers who prefer a one-time payment",
        "No financing application required",
        "Includes standard manufacturer warranty (details provided on request)",
      ],
      variant: "glow-brand",
    },
    {
      name: "Monthly Plan",
      icon: <Calendar className="size-4" />,
      description:
        "Spread the cost over time with a monthly payment plan (subject to approval).",
      price: K8_PRICING.monthly.payment ?? 0,
      priceNote:
        K8_PRICING.monthly.payment === null || K8_PRICING.monthly.termMonths === 0
          ? "Request current monthly options"
          : `${K8_PRICING.currencySymbol}${K8_PRICING.monthly.payment}/mo · ${K8_PRICING.monthly.termMonths} months · ${K8_PRICING.monthly.aprText}`,
      cta: {
        variant: "glow",
        label: "See monthly options",
        href: "/#contact",
      },
      features: [
        "Monthly installments",
        "Term length depends on the available program",
        "Approval and terms depend on the provider",
        "No medical or performance claims — this is purely a payment option",
      ],
      variant: "glow",
    },
    {
      name: "Verify & Compare",
      icon: <ShieldCheck className="size-4" />,
      description:
        "Get a clean breakdown: cash price, monthly terms, and what’s included — in writing.",
      price: 0,
      priceNote: "No obligation",
      cta: {
        variant: "default",
        label: "Get the breakdown",
        href: "/#contact",
      },
      features: [
        "Written breakdown of current K8 pricing & payment options",
        "Clarifies what you’re paying for (device, warranty, shipping as applicable)",
        "Helps you compare against alternatives confidently",
      ],
      variant: "default",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)} id="pricing">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[720px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}

        <p className="text-muted-foreground px-4 text-center text-xs leading-relaxed max-w-3xl">
          Payment plans, terms, and availability depend on the financing provider and distributor program and may change.
          All financing is subject to approval. This section describes purchasing options only and does not make health
          or medical claims.
        </p>
      </div>
    </Section>
  )
}
