import { SectionHeader } from "@/components/ui/home/SectionHeader";
import { HomeAccordion } from "./HomeAccordion";

const faqHeader = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about our fragrances, shipping, returns, and orders.",
};

const FAQ = () => {
  return (
    <section id="faq" className="mt-10 pb-28">
      <SectionHeader content={faqHeader} />

      <div className="mx-auto mt-16 max-w-3xl">
        <HomeAccordion />
      </div>
    </section>
  );
};

export default FAQ;
