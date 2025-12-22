import Link from "next/link"
import { ReactNode } from "react"

import { siteConfig } from "@/config/site"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion"
import { Section } from "../../ui/section"

interface FAQItemProps {
  question: string
  answer: ReactNode
  value?: string
}

interface FAQProps {
  title?: string
  items?: FAQItemProps[] | false
  className?: string
}

export default function FAQ({
  title = "Questions & Evidence-Based Answers",
  items = [
    {
      question:
        "Is skepticism around Kangen Water® and water ionizers reasonable?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes — healthy skepticism is both reasonable and encouraged. Claims
            around wellness products should always be examined critically and
            grounded in physics, chemistry, and peer-reviewed research rather
            than marketing language.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            This site does not ask you to “believe” anything. Instead, it focuses
            on explaining what electrolyzed water is, how hydrogen enrichment
            occurs as an electrochemical fact, and what the scientific
            literature currently supports — and what it does not.
          </p>
        </>
      ),
    },
    {
      question: "How does a water ionizer actually work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Water ionizers operate using electrolysis — a well-established
            electrochemical process. When an electrical current passes through
            water via platinum-coated titanium plates, the water separates into
            alkaline (reduced) and acidic (oxidized) fractions.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            During this process, molecular hydrogen (H₂) gas is generated and
            dissolved into the reduced water. Hydrogen enrichment is not a
            theory — it is a measurable outcome of electrolysis governed by
            known physical laws.
          </p>
        </>
      ),
    },
    {
      question:
        "What is hydrogen-rich water, and why is it studied scientifically?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Hydrogen-rich water refers to water that contains dissolved
            molecular hydrogen (H₂). Molecular hydrogen is biologically neutral,
            extremely small, and capable of diffusing rapidly through tissues.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Since 2007, hydrogen has been studied in peer-reviewed biomedical
            research for its selective antioxidant behavior and signaling
            effects. Importantly, research focuses on hydrogen itself — not on
            brands, machines, or marketing claims.
          </p>
        </>
      ),
    },
    {
      question:
        "Are there scientific studies supporting molecular hydrogen research?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes. Molecular hydrogen has been studied in hundreds of peer-reviewed
            publications across physiology, neurology, inflammation, metabolic
            health, and oxidative stress research.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            For those who want primary sources rather than summaries, two
            widely cited academic references include:
          </p>
          <ul className="text-muted-foreground mb-4 max-w-[640px] list-disc pl-6">
            <li>
              <em>Molecular Hydrogen in Health and Disease</em> (Springer, 2024)
            </li>
            <li>
              <em>Molecular Hydrogen for Medicine</em> by Yuh Fukai (Springer,
              2020)
            </li>
          </ul>
          <p className="text-muted-foreground max-w-[640px] text-balance">
            These texts compile laboratory, animal, and early clinical research
            without overstating conclusions.
          </p>
        </>
      ),
    },
    {
      question:
        "Does this site claim that hydrogen water treats or cures diseases?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          No. This site does not make medical claims, diagnoses, or promises of
          treatment or cure. Research into molecular hydrogen is ongoing, and
          much of it remains exploratory. Any health decisions should be made
          in consultation with qualified medical professionals.
        </p>
      ),
    },
    {
      question:
        "What is Kenneth Castaneda’s role with Kangen Water®?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Kenneth Castaneda is an independent distributor of Enagic®
            (Kangen Water®) products. He is not a medical professional, researcher,
            or representative of the scientific institutions publishing hydrogen
            research.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            His role is to provide access to certified electrolysis systems and
            educational resources so individuals can make informed decisions
            based on evidence, not hype.
          </p>
        </>
      ),
    },
    {
      question: "Where can I learn more or examine the research myself?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Readers are encouraged to consult peer-reviewed journals, academic
          textbooks, and independent reviews. This site favors transparency and
          education over persuasion.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section id="qa" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  )
}
