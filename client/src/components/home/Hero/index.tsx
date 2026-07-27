import mobileBanner from "../../../assets/mobile-banner.jpg";
import desktopBanner from "../../../assets/desktop-banner.png";
import tabletBanner from "../../../assets/tablet-banner.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <img className="block w-full md:hidden" src={mobileBanner} alt="" />

      <img
        className="hidden h-[70vh] w-full object-cover lg:block"
        src={desktopBanner}
        alt=""
      />

      <img
        className="hidden h-[70vh] w-full object-cover md:block lg:hidden"
        src={tabletBanner}
        alt=""
      />

      <Link
        to="/collections"
        className="bg-brand-500 md:bg-brand-600 hover:bg-brand-600 absolute top-[78%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-between gap-1 rounded-xl px-6 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:translate-y-[-55%] hover:shadow-2xl md:top-[72%] md:left-[25%] md:gap-2 md:px-8 md:text-base"
      >
        Shop Collection
        <ChevronRight className="h-5 w-5" />
      </Link>
    </section>
  );
};

export default Hero;
