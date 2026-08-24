import { Container, PageWrapper } from "@/components/ui/common";
import sample5mlImage from "@/assets/sample-5ml.webp";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useSamples } from "@/hooks/products";
import { ProductBadges } from "@/components/products/ProductInfo/ProductBadges";
import { useState } from "react";
import { getProductBadges } from "@/utils";
import { ProductHeader } from "@/components/products/ProductInfo/ProductHeader";
import { SampleSelection } from "@/components/samples/SampleSelection";
import { QuantitySelector } from "@/components/ui/products";
import { ProductActions } from "@/components/products/ProductInfo/ProductActions";
import { SampleLink } from "@/components/samples/SampleLink";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";
import { SamplesPageError } from "@/components/samples/SamplesPageError";
import { SamplesPageSkeleton } from "@/components/skeleton/SamplesPageSkeleton";

export const SamplesPage = () => {
  const { isDark } = useTheme();
  const {
    data: samples,
    isPending,
    isError,
    isFetching,
    refetch,
  } = useSamples();
  const [selectedSampleId, setSelectedSampleId] = useState<string>();
  const [quantity, setQuantity] = useState(1);

  if (isPending || isFetching) {
    return (
      <PageWrapper>
        <Container>
          <SamplesPageSkeleton />
        </Container>
      </PageWrapper>
    );
  }

  if (isError || !samples?.length) {
    return <SamplesPageError refetch={refetch} />;
  }

  const selectedSample =
    samples?.find((sample) => sample.id === selectedSampleId) ?? samples[0];

  const { name, variants, inspiredBy } = selectedSample;
  const sampleVariant = variants.find((v) => v.sizeML === 5);
  const badges = getProductBadges(selectedSample, true);

  const inStock = Boolean(sampleVariant?.isActive && sampleVariant?.stock > 0);

  if (!sampleVariant) {
    return <SamplesPageError refetch={refetch} />;
  }

  return (
    <PageWrapper>
      <Container>
        <section className="grid gap-10 md:py-10 lg:grid-cols-2 lg:items-start">
          {/* Shared Samples Image */}
          <div
            className={clsx(
              "mx-auto w-4/5 overflow-hidden rounded-2xl border p-4 shadow-xl backdrop-blur-xl md:w-full md:p-8",
              isDark
                ? "border-zinc-700/30 bg-zinc-900/30"
                : "border-white/20 bg-white/10",
            )}
          >
            <img
              src={sample5mlImage}
              alt="5ML fragrance samples"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          {/* Samples */}
          <div className="flex h-full flex-col justify-center space-y-5 px-4 md:px-0">
            <ProductBadges badges={badges} />

            <ProductHeader
              isSample
              name={name}
              inspiredBy={String(inspiredBy)}
              price={Number(sampleVariant?.price)}
            />

            {/* Sample Selection */}
            <SampleSelection
              samples={samples}
              selectedSampleId={selectedSampleId ?? samples[0].id}
              onSelectSample={setSelectedSampleId}
            />

            <QuantitySelector
              inStock={inStock}
              stock={sampleVariant.stock}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />

            <ProductActions
              variantId={sampleVariant.id}
              productImage={sample5mlImage}
              quantity={quantity}
              inStock={inStock}
            />

            <SampleLink selectedSampleSlug={selectedSample.slug} />
          </div>
        </section>

        <ProductTrustInfo />
        <RelatedProducts productSlug={selectedSample.slug} />
      </Container>
    </PageWrapper>
  );
};
