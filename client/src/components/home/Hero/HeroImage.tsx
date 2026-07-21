import hero from "@/assets/hero.png";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="bg-brand-500/25 absolute h-120 w-120 rounded-full blur-[90px]" />

      <div className="bg-brand-500/10 absolute inset-12 rounded-full blur-[80px]" />

      <img
        src={hero}
        alt="Gabal Fragrances Collection"
        className="relative z-10 w-full max-w-66 animate-[float_6s_ease-in-out_infinite] rounded-md drop-shadow-[0_70px_90px_rgba(0,0,0,0.45)] sm:max-w-88 md:max-w-95 lg:max-w-lg"
      />
    </div>
  );
};

export default HeroImage;
