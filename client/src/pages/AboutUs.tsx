import { AboutSection } from "@/components/brand";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { useTheme } from "@/context/useTheme";
import { BookOpen } from "lucide-react";

export const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <PageWrapper>
      <Container>
        <section className="mt-6 flex flex-col items-start px-2 md:mt-8 md:px-0">
          <div className="flex items-center gap-2">
            <BookOpen className={isDark ? "text-zinc-100" : "text-zinc-900"} />
            <MainHeading title="About Us" className="md:mb-0" />
          </div>

          <AboutSection title="Our Story">
            Content will be provided by the brand owner.
          </AboutSection>

          <AboutSection title="Mission">
            Content will be provided by the brand owner.
          </AboutSection>

          <AboutSection title="Our promise to you">
            Content will be provided by the brand owner.
          </AboutSection>

          {/** CTA Action */}
        </section>

        <ProductTrustInfo />
      </Container>
    </PageWrapper>
  );
};
