import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";

export const AboutUs = () => {
  return (
    <PageWrapper>
      <Container>
        <section className="mt-8 flex flex-col md:items-start">
          <MainHeading title="About Us" />

          {/** 1: */}
          {/** Reusable h3 title */}
          {/** Reusable p parapghragh */}

          {/** 2: */}
          {/** Reusable h3 title */}
          {/** Reusable p parapghragh */}

          {/** 3: */}
          {/** Reusable h3 title */}
          {/** Reusable p parapghragh */}

          {/** CTA Action */}
        </section>

        <ProductTrustInfo />
      </Container>
    </PageWrapper>
  );
};
