import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";
import placeholder from "@/assets/placeholder.webp";
import { ProductInfo } from "@/components/products/ProductInfo";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { products } from "@/mockProducts";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { CustomerReviews } from "@/components/products/CustomerReviews";
import Reveal from "@/components/ui/animation/Reveal";

export const ProductDetails = () => {
  const { isDark } = useTheme();
  const { productSlug } = useParams();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return; // will be handled later
  }

  return (
    <PageWrapper>
      <Container>
        <section className="grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start">
          <div
            className={clsx(
              "mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl backdrop-blur-xl md:w-full md:p-8",
              isDark
                ? "border-zinc-700/30 bg-zinc-900/30"
                : "border-white/20 bg-white/10",
            )}
          >
            <Reveal>
              <img
                src={placeholder}
                alt="Product"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>

          <ProductInfo product={product} />
        </section>

        <CustomerReviews product={product}/>

        <ProductTrustInfo />
      </Container>
    </PageWrapper>
  );
};
