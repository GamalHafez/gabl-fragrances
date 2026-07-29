import { Background } from "@/components/ui";
import {
  Tabs,
  TabsContents,
} from "@/components/animate-ui/components/animate/tabs";
import { useState } from "react";
import { CategoriesTabs } from "./CategoriesTabs";
import { categoryNames, type Category } from "./bestSellers";
import CategoryShowcase from "./CategoryShowcase";
import { TabsContent } from "@/components/animate-ui/primitives/animate/tabs";
import clsx from "clsx";
import { useTheme } from "@/context/useTheme";

const BestSellers = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<Category>("men");

  return (
    <section className="py-24">
      <Background />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <p
          className={clsx(
            "mb-3 text-center text-sm font-semibold tracking-[0.25em] uppercase lg:text-xl",
            isDark ? "text-brand-100" : "text-brand-500",
          )}
        >
          Our best sellers
        </p>

        {/* Tabs */}
        <Tabs
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as Category)}
        >
          <CategoriesTabs categories={categoryNames} />

          <TabsContents>
            <TabsContent value="men">
              <CategoryShowcase key="men" category="men" />
            </TabsContent>

            <TabsContent value="women">
              <CategoryShowcase key="women" category="women" />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </section>
  );
};

export default BestSellers;
