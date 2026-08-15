import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";
import { ProductInfo } from "@/components/products/ProductInfo";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { CustomerReviews } from "@/components/products/CustomerReviews";
import { reviews } from "@/components/products/CustomerReviews/mockReviews";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { useProduct, useRelatedProducts } from "@/hooks/products";
import { ProductDetailsSkeleton } from "@/components/skeleton";
import { DataError } from "@/components/ui/errors/DataError";

export const ProductDetails = () => {
  const { isDark } = useTheme();
  const { productSlug } = useParams();
  const {
    data: product,
    isPending: isProductPending,
    isError: isProductError,
    refetch: refetchProduct,
  } = useProduct(productSlug);

  const {
    data: relatedProducts,
    isPending: isRelatedPending,
    isError: isRelatedError,
  } = useRelatedProducts(productSlug);

  const productMainImage =
    product?.images.find((image) => image.isMain) ?? product?.images[0];

  if (isProductPending) {
    return (
      <PageWrapper>
        <Container>
          <ProductDetailsSkeleton />
        </Container>
      </PageWrapper>
    );
  }

  if (isProductError || !product) {
    return (
      <PageWrapper>
        <Container>
          <DataError
            message="We couldn't load this fragrance right now."
            onRetry={() => refetchProduct()}
          />
        </Container>
      </PageWrapper>
    );
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
              src={productMainImage?.url}
              alt={productMainImage?.description ?? product?.name}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <ProductInfo product={product} />
        </section>
        <CustomerReviews reviews={reviews} />
        <ProductTrustInfo />
        <RelatedProducts
          relatedProducts={relatedProducts ?? []}
          isLoading={isRelatedPending}
          isError={isRelatedError}
        />
      </Container>
    </PageWrapper>
  );
};
