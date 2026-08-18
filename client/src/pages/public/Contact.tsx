import { ContactForm } from "@/components/contact/ContactForm";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";

export const Contact = () => {
  return (
    <PageWrapper>
      <Container>
        <section className="mt-8 flex flex-col md:items-start">
          <MainHeading title="Contact Us" />

          <ContactForm />
        </section>

        <ProductTrustInfo />
      </Container>
    </PageWrapper>
  );
};
