import { Link } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";
import menImage from "@/assets/men.jfif";
import womenImage from "@/assets/women.jfif";
import { SectionHeader } from "@/components/ui/home/SectionHeader";
import Reveal from "@/components/ui/animation/Reveal";

const featuredCategories = [
  {
    id: 1,
    name: "Men",
    href: "/collections?gender=men",
    description: "Deep woods, spice and smoky oud for a confident signature.",
    image: menImage,
  },
  {
    id: 2,
    name: "Women",
    href: "/collections?gender=women",
    description: "Soft florals, vanilla and amber that linger beautifully.",
    image: womenImage,
  },
];

const featuredCategoriesHeader = {
  eyebrow: "Shop by Collection",
  title: "Discover Your Signature Scent",
  description:
    "Explore our carefully curated fragrance collections crafted for every personality and occasion.",
};

const FeaturedCategories = () => {
  return (
    <section className="py-24">
      <SectionHeader content={featuredCategoriesHeader} />

      <div className="mt-18 grid gap-8 md:grid-cols-2">
        {featuredCategories.map((category) => (
          <Reveal key={category.id}>
            <Link
              to={category.href}
              className="block transition-transform duration-300 hover:-translate-y-2"
            >
              <CategoryCard
                name={category.name}
                description={category.description}
                image={category.image}
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
