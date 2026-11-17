import { Eyebrow } from "@/components/ui/home";
import { MainHeading } from "@/components/ui/common";

export const CollectionsHero = () => {
  return (
    <div className="flex flex-col items-start md:pt-5 pt-3 p-5">
      <Eyebrow eyebrow="Our Collection" className="mb-1 inline-block" />
      <MainHeading title="Stay Fresh" highlighted="All Day" />
    </div>
  );
};
