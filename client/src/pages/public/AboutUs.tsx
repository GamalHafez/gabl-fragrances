import { DocumentSection } from "@/components/legal";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { BookOpen, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <PageWrapper>
      <Container>
        <section className="mt-6 flex flex-col items-start px-2 md:mt-8 md:px-0">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className={isDark ? "text-zinc-100" : "text-zinc-900"} />
            <MainHeading title="About Us" className="md:mb-0" />
          </div>

          <DocumentSection title="Our Story">
            Content will be provided by the brand owner.
          </DocumentSection>

          <DocumentSection title="Mission">
            Content will be provided by the brand owner.
          </DocumentSection>

          <DocumentSection title="Our promise to you">
            Content will be provided by the brand owner.
          </DocumentSection>

          <ProductTrustInfo />

          <Link
            to="/collections"
            className={clsx(
              "group mb-14 inline-flex items-center gap-3 rounded-full px-10 py-5 text-sm font-semibold transition-all duration-300 md:mt-4",
              "shadow-lg hover:-translate-y-1 hover:scale-[1.02] active:scale-95",
              "focus:ring-4 focus:outline-none",
              isDark
                ? "bg-amber-500 text-zinc-950 shadow-amber-500/20 hover:bg-amber-400 focus:ring-amber-500/30"
                : "bg-brand-200 shadow-brand-300/40 hover:bg-brand-300 focus:ring-brand-300/40 text-zinc-900",
            )}
          >
            <ShoppingCart
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              size={20}
            />
            <span>Explore Our Collection</span>
          </Link>
        </section>
      </Container>
    </PageWrapper>
  );
};
