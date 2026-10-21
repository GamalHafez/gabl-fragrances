import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { BookOpen, Compass, ShieldCheck } from "lucide-react";

const brandSections = [
  {
    title: "Our Story",
    description:
      "Gabal Fragrances is about more than just a beautiful scent. It is about finding fragrances that reflect your personality, complement your style, and make every moment more memorable.",
    icon: BookOpen,
  },
  {
    title: "Our Mission",
    description:
      "We aim to make discovering and enjoying fragrances a simple experience, with a carefully presented collection and clear product information to help you find a scent that suits your taste.",
    icon: Compass,
  },
  {
    title: "Our Promise",
    description:
      "Your experience matters to us. From exploring our collection to placing your order, we strive to make every step straightforward, convenient, and enjoyable.",
    icon: ShieldCheck,
  },
];

export const BrandStory = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-14 md:py-20">
      <div className="mb-8 max-w-xl">
        <p
          className={clsx(
            "mb-2 text-xs font-semibold tracking-[0.2em] uppercase",
            isDark ? "text-amber-400" : "text-amber-700",
          )}
        >
          What defines us
        </p>
        <h2
          className={clsx(
            "text-3xl font-medium sm:text-4xl",
            isDark ? "text-zinc-100" : "text-zinc-900",
          )}
        >
          A fragrance for every expression
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {brandSections.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className={clsx(
              "rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7",
              isDark
                ? "border-zinc-800 bg-zinc-900/60"
                : "border-stone-200 bg-white",
            )}
          >
            <div
              className={clsx(
                "mb-5 flex h-12 w-12 items-center justify-center rounded-full",
                isDark
                  ? "bg-amber-400/10 text-amber-400"
                  : "bg-amber-100 text-amber-800",
              )}
            >
              <Icon size={22} strokeWidth={1.6} />
            </div>

            <p
              className={clsx(
                "mb-2 text-xs font-medium tracking-widest",
                isDark ? "text-zinc-500" : "text-stone-400",
              )}
            >
              0{index + 1}
            </p>

            <h3
              className={clsx(
                "mb-3 font-serif text-2xl",
                isDark ? "text-zinc-100" : "text-zinc-900",
              )}
            >
              {title}
            </h3>

            <p
              className={clsx(
                "text-sm leading-7",
                isDark ? "text-zinc-400" : "text-zinc-600",
              )}
            >
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
