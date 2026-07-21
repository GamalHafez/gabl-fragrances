import FAQHeader from "./FAQHeader";
import { HomeAccordion } from "./HomeAccordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-28">
      <FAQHeader />

      <div className="mx-auto mt-16 max-w-3xl">
        <HomeAccordion />
      </div>
    </section>
  );
};

export default FAQ;
