import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "How long does the fragrance last?",
    content:
      "Our Eau de Parfum fragrances typically last between 8–12 hours, depending on skin type and environmental conditions.",
  },
  {
    value: "item-2",
    trigger: "How long does shipping take?",
    content:
      "Orders are usually processed within 24 hours and delivered within 2–5 business days depending on your location.",
  },
  {
    value: "item-3",
    trigger: "Can I return a fragrance?",
    content:
      "Yes. Unopened products can be returned within 14 days of delivery. Please review our return policy for complete details.",
  },
  {
    value: "item-4",
    trigger: "Are your fragrances authentic?",
    content:
      "Absolutely. Every fragrance is crafted using premium ingredients and undergoes strict quality control before shipment.",
  },
];

export const HomeAccordion = () => {
  return (
    <Accordion className="space-y-5" defaultValue={["item-1"]}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
        >
          <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">
            {item.trigger}
          </AccordionTrigger>

          <AccordionContent className="pb-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
