import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Headphones, Lock, RotateCcw, Truck } from "lucide-react";
import { MainHeading } from "@/components/ui/common";

const trustItems = [
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Your payment details are encrypted and processed securely.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Orders are dispatched within 1–3 business days.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Return eligible products within 14 days.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
  },
];

export const ProductTrustInfo = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="trust-information"
      className="mt-20 mb-18 flex flex-col gap-8 md:mt-30 md:gap-2"
    >
      <MainHeading title="Why Shop With Us" className="self-start" />

      <div className="grid gap-4 sm:grid-cols-2">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className={clsx(
              "group flex items-start gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300",
              isDark
                ? "border-zinc-800 bg-zinc-900/60 hover:border-amber-500/40 hover:bg-zinc-900"
                : "border-zinc-200 bg-white/70 hover:border-amber-300 hover:bg-white",
            )}
          >
            <div
              className={clsx(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                isDark
                  ? "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20"
                  : "bg-amber-100 text-amber-700 group-hover:bg-amber-200",
              )}
            >
              <item.icon className="h-5 w-5" />
            </div>

            <div className="space-y-1">
              <h3
                className={clsx(
                  "font-semibold",
                  isDark ? "text-zinc-100" : "text-zinc-900",
                )}
              >
                {item.title}
              </h3>

              <p
                className={clsx(
                  "text-sm leading-6",
                  isDark ? "text-zinc-400" : "text-zinc-600",
                )}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
