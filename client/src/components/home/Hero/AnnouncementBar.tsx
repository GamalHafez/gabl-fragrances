import { Marquee } from "@/components/ui/marquee";
import { TicketPercent } from "lucide-react";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

const offers = [
  "ENJOY 20% OFF ON ALL FRAGRANCES",
  "FREE SHIPPING ON ORDERS OVER $100",
  "SHOP NOW",
];

export const AnnouncementBar = () => {
  const { isDark } = useTheme();

  return (
    <article
      className={clsx(
        "relative overflow-hidden py-1",
        isDark ? "bg-zinc-800 text-white" : "text-brand-900 bg-amber-100",
      )}
    >
      <Marquee pauseOnHover reverse className="[--duration:25s]">
        {offers.map((offer) => (
          <p
            key={offer}
            className="mx-8 flex items-center gap-2 text-sm font-semibold tracking-wide whitespace-nowrap uppercase md:text-base lg:text-lg"
          >
            <TicketPercent
              className={clsx(
                "h-4 w-4",
                isDark ? "text-brand-300" : "text-brand-500",
              )}
            />
            {offer}
          </p>
        ))}
      </Marquee>
    </article>
  );
};
