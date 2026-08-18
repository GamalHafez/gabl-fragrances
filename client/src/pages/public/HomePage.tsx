import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import { Container } from "@/components/ui/common";
import FAQ from "@/components/home/FAQ";
import SocialLinks from "@/components/home/SocialLinks";
import BestSellers from "@/components/home/BestSellers";
import { Testimonials } from "@/components/home/Testimonials";
import Reveal from "@/components/ui/animation/Reveal";

export const HomePage = () => {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>

      <BestSellers />

      <Container>
        <main className="pag-14 mt-14 flex flex-col md:mt-20 md:gap-20 lg:mt-20 lg:gap-20">
          <Reveal>
            <FeaturedCategories />
          </Reveal>

          <Reveal>
            <Testimonials />
          </Reveal>

          <Reveal>
            <FAQ />
          </Reveal>
        </main>
      </Container>

      <Reveal>
        <SocialLinks />
      </Reveal>
    </>
  );
};
