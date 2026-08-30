import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { Link } from "react-router-dom";

type EmptyCartProps = {
  onOpenChange?: (open: boolean) => void;
};

export const EmptyCart = ({ onOpenChange }: EmptyCartProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "mt-10 flex flex-1 flex-col items-center justify-center px-6 text-center",
        isDark ? "text-white" : "text-neutral-900",
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-full border",
          isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/2",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 8.5h12l-.7 10.2a1.5 1.5 0 0 1-1.5 1.3H8.2a1.5 1.5 0 0 1-1.5-1.3L6 8.5Z"
          />
          <path strokeLinecap="round" d="M9 8.5V6a3 3 0 0 1 6 0v2.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-xs">
        <h2 className="text-lg font-medium tracking-tight">
          Your cart is empty
        </h2>

        <p
          className={clsx(
            "mt-2 text-sm leading-6",
            isDark ? "text-white/50" : "text-black/50",
          )}
        >
          Discover a fragrance that feels uniquely yours.
        </p>
      </div>

      {/* CTA */}
      <Link
        to="/collections"
        onClick={() => onOpenChange?.(false)}
        className={clsx(
          "mt-7 inline-flex min-w-40 items-center justify-center rounded-full px-6 py-3 text-xs font-medium tracking-[0.16em] uppercase transition-all duration-200",
          isDark
            ? "bg-white text-black hover:bg-white/90"
            : "bg-black text-white hover:bg-black/90",
        )}
      >
        Shop fragrances
      </Link>
    </div>
  );
};
