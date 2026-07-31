import Reveal from "@/components/ui/animation/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

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
  const { isDark } = useTheme();

  return (
    <Accordion className="space-y-5" defaultValue={["item-1"]}>
      {items.map((item) => (
        <Reveal key={item.value}>
          <AccordionItem
            value={item.value}
            className={clsx(
              "overflow-hidden rounded-2xl border px-6 shadow-sm transition-all duration-300 hover:shadow-lg",
              isDark
                ? "border-zinc-800 bg-zinc-900"
                : "border-zinc-200 bg-white",
            )}
          >
            <AccordionTrigger
              className={clsx(
                "py-6 text-left text-lg font-semibold hover:no-underline",
                isDark ? "text-zinc-100" : "text-zinc-900",
              )}
            >
              {item.trigger}
            </AccordionTrigger>

            <AccordionContent
              className={clsx(
                "pb-6 text-base leading-7",
                isDark ? "text-zinc-400" : "text-zinc-600",
              )}
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  );
};
