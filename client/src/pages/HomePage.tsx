import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import { Container } from "@/components/ui";

export const HomePage = () => {
  return (
    <>
      <Hero />
      
      <Container>
        <main className="pag-14 mt-14 flex flex-col md:mt-20 md:gap-20 lg:mt-20 lg:gap-20">
          <FeaturedCategories/>
        </main>
      </Container>
    </>
  );
};
