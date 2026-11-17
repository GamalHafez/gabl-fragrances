import { BRAND_DATA } from "@shared/constants/brandData.js";
import { Mail, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const HelpSection = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "mb-16 flex flex-col items-center gap-2 rounded-2xl border px-6 py-8 text-center sm:px-8",
        isDark
          ? "border-amber-500/20 bg-amber-500/5"
          : "border-amber-100 bg-amber-50/60",
      )}
    >
      <h2
        className={clsx(
          "text-lg font-semibold sm:text-xl",
          isDark ? "text-amber-200" : "text-amber-900",
        )}
      >
        Need Help?
      </h2>

      <p
        className={clsx(
          "text-sm sm:text-base",
          isDark ? "text-amber-200/70" : "text-amber-800/70",
        )}
      >
        If you have any questions about your order, feel free to contact us.
      </p>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${BRAND_DATA.email}`}
          target="_blank"
          className={clsx(
            "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
            isDark
              ? "bg-amber-500/15 text-amber-200 hover:bg-amber-500/25"
              : "bg-white text-amber-800 hover:bg-amber-100",
          )}
        >
          <Mail className="h-4 w-4" />
          Email us
        </a>

        <a
          href={BRAND_DATA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
            isDark
              ? "bg-amber-500/15 text-amber-200 hover:bg-amber-500/25"
              : "bg-white text-amber-800 hover:bg-amber-100",
          )}
        >
          <MessageCircle className="h-4 w-4" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};
