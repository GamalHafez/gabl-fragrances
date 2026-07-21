import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";
import menImage from "@/assets/men.jfif";
import womenImage from "@/assets/women.jfif";

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
      <div className="mb-14 text-center">
        <span className="text-brand-500 text-sm font-semibold tracking-[0.35em] uppercase">
          Shop by Collection
        </span>

        <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
          Discover Your Signature Scent
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Explore our carefully curated fragrance collections crafted for every
          personality and occasion.
        </p>
      </div>

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
