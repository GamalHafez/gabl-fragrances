import { Eyebrow } from "@/components/ui/home";
import { MainHeading } from "@/components/ui/common";

export const CollectionsHero = () => {
  return (
    <div className="p-5 pt-26 md:pt-30">
      <Eyebrow eyebrow="Our Collection" className="inline-block" />
      <MainHeading title="Stay Fresh" highlighted="All Day" />
    </div>
  );
};
