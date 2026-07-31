import { Background } from "@/components/ui/common";
import {
  Tabs,
  TabsContents,
} from "@/components/animate-ui/components/animate/tabs";
import { useState } from "react";
import { CategoriesTabs } from "./CategoriesTabs";
import { categoryNames, type Category } from "./bestSellers";
import CategoryShowcase from "./CategoryShowcase";
import { TabsContent } from "@/components/animate-ui/primitives/animate/tabs";
import { Eyebrow } from "@/components/ui/home";
import Reveal from "@/components/ui/animation/Reveal";

const BestSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("men");

  return (
    <section id="best-sellers" className="pt-15 md:pt-24">
      <Background />

      <Reveal>
        <div className="relative mx-auto max-w-6xl px-6">
          <Eyebrow eyebrow="Our best sellers" />

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
      </Reveal>
    </section>
  );
};

export default BestSellers;
