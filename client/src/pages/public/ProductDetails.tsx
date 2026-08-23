import { useParams } from "react-router-dom";
import { Container, PageWrapper } from "@/components/ui/common";
import { ProductInfo } from "@/components/products/ProductInfo";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { CustomerReviews } from "@/components/products/CustomerReviews";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { useProduct } from "@/hooks/products";
import { ProductDetailsSkeleton } from "@/components/skeleton";
import { DataError } from "@/components/ui/errors/DataError";
import { useReviews } from "@/hooks/reviews";
import sample5mlImage from "@/assets/sample-5ml.webp";
import { useState } from "react";

export const ProductDetails = () => {
  const { isDark } = useTheme();
  const { productSlug } = useParams();
  const {
    data: product,
    isPending: isProductPending,
    isError: isProductError,
    isFetching: isProductFetching,
    refetch: refetchProduct,
  } = useProduct(productSlug);

  const {
    data: reviews,
    isPending: isReviewsPending,
    isError: isReviewsError,
  } = useReviews(productSlug);

  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null,
  );

  const selectedVariant =
    product?.variants.find((variant) => variant.id === selectedVariantId) ??
    product?.variants.find(
      (variant) => variant.isActive && variant.stock > 0,
    ) ??
    product?.variants[0];

  const productMainImage =
    product?.images.find((image) => image.isMain) ?? product?.images[0];

  const productImage =
    selectedVariant?.sizeML === 5 ? sample5mlImage : productMainImage?.url;

  if (isProductPending || isProductFetching) {
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
              src={productImage}
              alt={
                selectedVariant?.sizeML === 5
                  ? "5ML sample"
                  : (productMainImage?.description ?? product.name)
              }
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          {selectedVariant && (
            <ProductInfo
              product={product}
              reviews={reviews ?? []}
              selectedVariant={selectedVariant}
              setSelectedVariantId={setSelectedVariantId}
            />
          )}
        </section>
        {!isReviewsError && !isReviewsPending && (
          <CustomerReviews reviews={reviews ?? []} />
        )}
        <ProductTrustInfo />
        <RelatedProducts productSlug={productSlug ?? ""} />
      </Container>
    </PageWrapper>
  );
};
