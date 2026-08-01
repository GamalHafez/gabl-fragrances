import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";
import placeholder from "@/assets/placeholder.webp";
import { ProductInfo } from "@/components/products";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { products } from "@/mockProducts";

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
        <section className="grid gap-10 py-10 lg:grid-cols-2 lg:items-start">
          <div
            className={clsx(
              "overflow-hidden rounded-2xl border p-8 shadow-xl backdrop-blur-xl",
              isDark
                ? "border-zinc-700/30 bg-zinc-900/30"
                : "border-white/20 bg-white/10",
            )}
          >
            <img
              src={placeholder}
              alt="Product"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <ProductInfo product={product} />
        </section>
      </Container>
    </PageWrapper>
  );
};
