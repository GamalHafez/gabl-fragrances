import { Background } from "@/components/ui/common";
import {
  Tabs,
  TabsContents,
} from "@/components/animate-ui/components/animate/tabs";
import { useState } from "react";
import { CategoriesTabs } from "./CategoriesTabs";
import CategoryShowcase from "./CategoryShowcase";
import { TabsContent } from "@/components/animate-ui/primitives/animate/tabs";
import { Eyebrow } from "@/components/ui/home";
import Reveal from "@/components/ui/animation/Reveal";
import type { ProductGender } from "@shared/types/product";
import { useBestSellers } from "@/hooks/products";
import { CategoryShowcaseSkeleton } from "@/components/skeleton";
import { DataError } from "@/components/ui/errors/DataError";

const BestSellers = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductGender>("MEN");

  const {
    data: bestSellers,
    isPending,
    isError,
    isFetching,
    refetch,
  } = useBestSellers(selectedCategory);

  const renderPanelContent = () => {
    if (isPending || isFetching) return <CategoryShowcaseSkeleton />;
    if (isError) {
      return (
        <DataError
          message="Couldn't load best sellers."
          isHomeLink={false}
          onRetry={refetch}
        />
      );
    }
    return <CategoryShowcase bestSellers={bestSellers} />;
  };

  return (
    <section id="best-sellers" className="pt-15 md:pt-24">
      <Background />

      <Reveal>
        <div className="relative mx-auto max-w-6xl px-6">
          <Eyebrow eyebrow="Our best sellers" />

          {/* Tabs */}
          <Tabs
            value={selectedCategory}
            onValueChange={(value) =>
              setSelectedCategory(value as ProductGender)
            }
          >
            <CategoriesTabs categories={["MEN", "WOMEN", "UNISEX"]} />

            <TabsContents>
              <TabsContent value="MEN">{renderPanelContent()}</TabsContent>
              <TabsContent value="WOMEN">{renderPanelContent()}</TabsContent>
              <TabsContent value="UNISEX">{renderPanelContent()}</TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </Reveal>
    </section>
  );
};

export default BestSellers;
