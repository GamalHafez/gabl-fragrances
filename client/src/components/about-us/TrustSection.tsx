import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { ProductTrustInfo } from "@/components/products/ProductTrustInfo";

export const TrustSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={clsx(
        "overflow-hidden rounded-[2rem] border p-6 sm:p-9 md:p-12",
        isDark
          ? "border-zinc-800 bg-zinc-900"
          : "border-stone-200 bg-[#f7f2e9]",
      )}
    >
      <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <div>
          <p
            className={clsx(
              "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
              isDark ? "text-amber-400" : "text-amber-700",
            )}
          >
            The Gabal experience
          </p>

          <h2
            className={clsx(
              "font-serif text-3xl leading-tight sm:text-4xl",
              isDark ? "text-zinc-100" : "text-zinc-900",
            )}
          >
            Confidence in every order.
          </h2>

          <p
            className={clsx(
              "mt-4 text-sm leading-7",
              isDark ? "text-zinc-400" : "text-zinc-600",
            )}
          >
            Explore our collection and enjoy a shopping experience designed
            around clarity, convenience, and care.
          </p>
        </div>

        <div className="min-w-0">
          <ProductTrustInfo />
        </div>
      </div>
    </section>
  );
};
