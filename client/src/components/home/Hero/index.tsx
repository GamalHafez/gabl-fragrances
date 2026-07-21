import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="xlmt-0 mx-auto mt-4 flex min-h-screen w-full max-w-360 items-center px-6 md:mt-0 lg:mt-0 lg:px-10">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
