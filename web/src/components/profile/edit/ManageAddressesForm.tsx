import { useDefaultAddress } from "@/hooks/user/useDefaultAddress";
import { NoDefaultAddress } from "./NoDefaultAddress";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { ExternalLink, MapPin } from "lucide-react";

export const ManageAddressesForm = () => {
  const { isDark } = useTheme();
  const { data: defaultAddress, isPending, isError } = useDefaultAddress();

  if (isPending) return null; // TODO: skeleton
  if (isError) return null; // TODO: error state

  if (!defaultAddress) {
    return <NoDefaultAddress />; // Name it add def..
  }

  const { address, city, governorate, country, postalCode, locationUrl } =
    defaultAddress;

  const secondaryLine = [city, governorate, postalCode]
    .filter(Boolean)
    .join(", ");

  return (
    <section
      aria-label="Default address"
      className={clsx(
        "flex flex-col gap-4 rounded-2xl border p-5",
        isDark ? "border-white/10 bg-white/5" : "border-zinc-200 bg-zinc-50",
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            isDark
              ? "bg-brand-300/10 text-brand-300"
              : "bg-brand-500/10 text-brand-500",
          )}
        >
          <MapPin aria-hidden className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={clsx(
                "text-base font-semibold",
                isDark ? "text-zinc-100" : "text-zinc-900",
              )}
            >
              Default address
            </h3>

            <span
              className={clsx(
                "rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
                isDark
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-emerald-100 text-emerald-700",
              )}
            >
              Default
            </span>
          </div>

          <p
            className={clsx(
              "mt-2 text-sm leading-6 wrap-break-word",
              isDark ? "text-zinc-200" : "text-zinc-800",
            )}
          >
            {address}
          </p>

          <p
            className={clsx(
              "text-sm leading-6",
              isDark ? "text-zinc-400" : "text-zinc-600",
            )}
          >
            {secondaryLine}
          </p>

          <p
            className={clsx(
              "text-sm leading-6",
              isDark ? "text-zinc-400" : "text-zinc-600",
            )}
          >
            {country}
          </p>
        </div>
      </div>

      {locationUrl && (
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "flex w-fit items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
            isDark
              ? "border-white/10 text-zinc-200 hover:bg-white/10"
              : "border-zinc-200 text-zinc-800 hover:bg-zinc-100",
          )}
        >
          View on Google Maps
          <ExternalLink aria-hidden className="h-4 w-4" />
        </a>
      )}
    </section>
  );
};
