import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is a Liquid Tree Air Purifier?", a: "A Liquid Tree Air Purifier uses a microalgae-based liquid medium to naturally absorb CO₂, remove pollutants, and produce oxygen — working similarly to a living plant but optimized for indoor air cleaning." },
  { q: "How is this different from a normal air purifier?", a: "Unlike HEPA purifiers that filter particles, KAAI uses living microalgae to actively convert CO₂ into oxygen while removing pollutants naturally — no filters, no chemicals." },
  { q: "Is the liquid inside safe?", a: "Yes, the liquid contains natural microalgae in a food-grade nutrient solution, completely safe for humans and pets." },
  { q: "Does it require filter replacement?", a: "No. KAAI uses a biological filtration system that self-regenerates, eliminating the need for costly filter replacements." },
  { q: "Does the Liquid Tree consume a lot of electricity?", a: "No. KAAI is solar-powered and requires minimal electricity, making it an energy-efficient solution." },
  { q: "How much area can it cover?", a: "A single KAAI unit can effectively purify air equivalent to 25 trees, suitable for large indoor and outdoor spaces." },
  { q: "Can it remove Delhi-type pollution?", a: "Yes, KAAI is designed to handle high-pollution environments, absorbing CO₂, NOx, and particulate matter effectively." },
  { q: "Is this technology proven?", a: "Yes, photobioreactor technology is backed by extensive research and has been deployed in various environmental applications worldwide." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-lg">Everything you need to know about KAAI</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-heading text-sm font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-body text-sm pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
