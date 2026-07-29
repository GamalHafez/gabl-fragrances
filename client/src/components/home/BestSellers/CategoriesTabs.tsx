import {
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import type { Category } from "./bestSellers";

interface CategoriesTabsProps {
  categories: readonly Category[];
}

export const CategoriesTabs = ({ categories }: CategoriesTabsProps) => {
  return (
    <TabsList>
      {categories.map((category) => (
        <TabsTrigger key={category} value={category}>
          {category}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
