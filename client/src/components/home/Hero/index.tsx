import mobileBanner from "../../../assets/mobile-banner.jpg";
import desktopBanner from "../../../assets/desktop-banner.png";
import tabletBanner from "../../../assets/tablet-banner.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";

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
        className="bg-brand-700 hover:bg-brand-600 absolute top-[80%] left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide whitespace-nowrap text-white shadow-lg transition-all duration-300 ease-out hover:translate-y-[-54%] hover:shadow-2xl active:scale-95 md:top-[72%] md:left-[25%] md:px-8 md:py-4 md:text-base"
      >
        Shop Collection
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />{" "}
      </Link>

      <AnnouncementBar />
    </section>
  );
};

export default Hero;
