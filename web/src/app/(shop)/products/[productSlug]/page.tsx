'use client';

import { useParams } from 'next/navigation';
import { Container, PageWrapper } from '@/components/ui/common';
import { ProductInfo } from '@/components/products/ProductInfo';
import { useTheme } from '@/context/theme/useTheme';
import clsx from 'clsx';
import { ProductTrustInfo } from '@/components/products/ProductTrustInfo';
import { CustomerReviews } from '@/components/products/CustomerReviews';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { useProduct } from '@/hooks/products';
import { ProductDetailsSkeleton } from '@/components/skeleton';
import { DataError } from '@/components/ui/errors/DataError';
import { useReviews } from '@/hooks/reviews';
import { useState } from 'react';
import { getMainProductVariant } from '@/utils/products';
import Image from 'next/image';
import { ProductImage, ProductVariant } from '@/types/product';

export default function ProductDetailsPage() {
  const { isDark } = useTheme();
  const { productSlug } = useParams<{ productSlug: string }>();

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

  const mainVariant = getMainProductVariant(product.variants);

  const selectedVariant =
    product.variants.find(
      (variant: ProductVariant) => variant.id === selectedVariantId,
    ) ?? mainVariant;

  const productMainImage =
    product.images.find((image: ProductImage) => image.isMain) ??
    product.images[0];

  const productImage =
    selectedVariant?.sizeML === 5
      ? '/images/sample-5ml.webp'
      : productMainImage.url;

  return (
    <PageWrapper>
      <Container>
        <section className='grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start'>
          <div
            className={clsx(
              'mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl backdrop-blur-xl md:w-full md:p-8',
              isDark
                ? 'border-zinc-700/30 bg-zinc-900/30'
                : 'border-white/20 bg-white/10',
            )}
          >
            <Image
              src={productImage ?? '/images/placeholder.webp'}
              alt={
                selectedVariant?.sizeML === 5
                  ? '5ML sample'
                  : (productMainImage?.description ?? product.name)
              }
              fill
              priority
              sizes='(min-width: 1024px) 50vw, 90vw'
              className='object-cover'
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
        <RelatedProducts productSlug={productSlug ?? ''} />
      </Container>
    </PageWrapper>
  );
}
