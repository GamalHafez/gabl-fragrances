import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";
import placeholder from "@/assets/placeholder.webp";
import { ProductInfo } from "@/components/products/ProductInfo";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { CustomerReviews } from "@/components/products/CustomerReviews";
import { reviews } from "@/components/products/CustomerReviews/mockReviews";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { useEffect, useState } from "react";
import { productsService } from "@/services/products/products.service";
import type { Product } from "@shared/types/product";

export const ProductDetails = () => {
  const { isDark } = useTheme();
  const { productSlug } = useParams();
  const [displayedProduct, setDisplayedProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchProduct = await productsService.getProduct(
        String(productSlug),
      );
      setDisplayedProduct(fetchProduct);
    };

    fetchProduct();
  }, [productSlug]);

  if (!displayedProduct) {
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
            <img
              src={placeholder}
              alt="Product"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <ProductInfo product={displayedProduct} />
        </section>

        <CustomerReviews reviews={reviews} />

        <ProductTrustInfo />

        {/** <RelatedProducts relatedProducts={relatedProducts} /> */}
      </Container>
    </PageWrapper>
  );
};
