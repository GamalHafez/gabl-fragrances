import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";
import menImage from "@/assets/men.jfif";
import womenImage from "@/assets/women.jfif";
import FeaturedCategoriesHeader from "./FeaturedCategoriesHeader";

const featuredCategories = [
  {
    id: 1,
    name: "Men",
    description: "Bold and sophisticated fragrances.",
    image: menImage,
  },
  {
    id: 2,
    name: "Women",
    description: "Bold and sophisticated fragrances.",
    image: womenImage,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24">
      <FeaturedCategoriesHeader />

      <div className="grid gap-8 md:grid-cols-2">
        {featuredCategories.map((category) => (
          <Link
            key={category.id}
            to="/"
            className="block transition-transform duration-300 hover:-translate-y-2"
          >
            <CategoryCard
              name={category.name}
              description={category.description}
              image={category.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
