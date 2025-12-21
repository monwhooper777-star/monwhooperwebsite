import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react"
import { ReactNode } from "react"

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item"
import { Section } from "../../ui/section"

interface ItemProps {
  title: string
  description: string
  icon: ReactNode
}

interface ItemsProps {
  title?: string
  items?: ItemProps[] | false
  className?: string
}

export default function Items({
  title = "Electrolytically Reduced Hydrogen-Rich + Deuterium-Depleted Water",
  items = [
    {
      title: "Molecular hydrogen (H₂)",
      description:
        "Studied for antioxidant and anti-inflammatory signaling support in humans and athletes (evidence varies by study).",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Oxidative stress support",
      description:
        "H₂ has been studied for selective reduction of certain reactive species and related oxidative stress markers.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Recovery & performance",
      description:
        "Some trials report improved perceived fatigue or recovery markers after exercise; results are mixed across populations.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Metabolic markers (research area)",
      description:
        "Hydrogen-rich water has been investigated in small studies for glucose/lipid and metabolic syndrome-related markers.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Deuterium-depletion concept",
      description:
        "Deuterium-depleted water (DDW) is being studied in biology/medicine; strong clinical conclusions are still limited.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Hydration-first, always",
      description:
        "Regardless of type, consistent hydration is foundational—focus on habit, taste preference, and what you’ll actually drink daily.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Minerals & balance",
      description:
        "If using filtered/processed water, consider mineral balance and overall diet (electrolytes come from food too).",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Not a medical claim",
      description:
        "This is educational content—not medical advice. If you have a condition or take meds, check with a clinician.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
