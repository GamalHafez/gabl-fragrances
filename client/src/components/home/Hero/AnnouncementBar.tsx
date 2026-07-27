import { Marquee } from "@/components/ui/marquee";
import { TicketPercent } from "lucide-react";

const offers = [
  "ENJOY 20% OFF ON ALL FRAGRANCES",
  "FREE SHIPPING ON ORDERS OVER $100",
  "SHOP NOW",
];

export const AnnouncementBar = () => {
  return (
    <article className="bg-brand-900 relative overflow-hidden py-3 text-white">
      <Marquee pauseOnHover reverse className="[--duration:20s]">
        {offers.map((offer) => (
          <p
            key={offer}
            className="mx-8 flex gap-4 font-medium tracking-wide whitespace-nowrap uppercase"
          >
            <TicketPercent className="text-brand-300" />
            {offer}
          </p>
        ))}
      </Marquee>
    </article>
  );
};
