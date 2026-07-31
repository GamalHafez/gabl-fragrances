import { Eyebrow } from "@/components/ui/home";
import { MainHeading } from "@/components/ui/common";

export const CollectionsHero = () => {
  return (
    <div className="flex flex-col items-start p-5 pt-26 md:pt-30">
      <Eyebrow eyebrow="Our Collection" className="mb-2 inline-block" />
      <MainHeading title="Stay Fresh" highlighted="All Day" />
    </div>
  );
};
