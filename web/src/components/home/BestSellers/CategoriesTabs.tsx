import {
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

interface CategoriesTabsProps {
  categories: readonly string[];
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
