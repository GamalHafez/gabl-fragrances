import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const ConfirmationSkeleton = () => {
  const { isDark } = useTheme();

  const pulse = clsx(
    "animate-pulse rounded-lg",
    isDark ? "bg-neutral-800" : "bg-neutral-200",
  );

  const cardClass = clsx(
    "rounded-2xl border px-6 py-5 sm:px-8 sm:py-6",
    isDark
      ? "border-neutral-800 bg-neutral-900"
      : "border-neutral-200 bg-white",
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 md:py-2">
      {/* ConfirmationHeader */}
      <div
        className={clsx(
          "flex flex-col items-center gap-3 rounded-2xl border px-6 py-10 sm:px-10 sm:py-12",
          isDark
            ? "border-emerald-500/20 bg-emerald-500/5"
            : "border-emerald-100 bg-emerald-50/60",
        )}
      >
        <div className={clsx(pulse, "h-12 w-12 rounded-full")} />
        <div className={clsx(pulse, "h-7 w-48")} />
        <div className={clsx(pulse, "h-4 w-64")} />
        <div className={clsx(pulse, "h-4 w-80 max-w-full")} />
      </div>

      {/* OrderDetails */}
      <div
        className={clsx(cardClass, "flex items-start justify-between gap-3")}
      >
        <div className="flex flex-col gap-2">
          <div className={clsx(pulse, "h-5 w-28")} />
          <div className={clsx(pulse, "h-3 w-40")} />
        </div>
        <div className={clsx(pulse, "h-6 w-20 rounded-full")} />
      </div>

      {/* OrderItems */}
      <div className={cardClass}>
        <div className={clsx(pulse, "h-4 w-24")} />
        <div
          className={clsx(
            "my-4 border-t",
            isDark ? "border-neutral-800" : "border-neutral-200",
          )}
        />
        <div className="flex flex-col gap-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 rounded-xl px-4 py-3"
            >
              <div className={clsx(pulse, "h-4 w-40")} />
              <div className={clsx(pulse, "h-4 w-16")} />
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className={cardClass}>
        <div className={clsx(pulse, "h-4 w-32")} />
        <div
          className={clsx(
            "my-4 border-t",
            isDark ? "border-neutral-800" : "border-neutral-200",
          )}
        />
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className={clsx(pulse, "h-3 w-20")} />
              <div className={clsx(pulse, "h-3 w-14")} />
            </div>
          ))}
        </div>
      </div>

      {/* Info grid: CustomerInfo / ShippingAddressCard / ShippingMethodCard / PaymentMethodSection */}
      <div className="mx-auto grid gap-6 md:w-full md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={clsx(cardClass, "flex flex-col gap-2")}>
            <div className="flex items-center gap-2">
              <div className={clsx(pulse, "h-4 w-4 rounded-full")} />
              <div className={clsx(pulse, "h-4 w-24")} />
            </div>
            <div className={clsx(pulse, "h-3 w-32")} />
            <div className={clsx(pulse, "h-3 w-28")} />
          </div>
        ))}
      </div>

      {/* HelpSection */}
      <div
        className={clsx(
          "flex flex-col items-center gap-2 rounded-2xl border px-6 py-8 sm:px-8",
          isDark
            ? "border-amber-500/20 bg-amber-500/5"
            : "border-amber-100 bg-amber-50/60",
        )}
      >
        <div className={clsx(pulse, "h-5 w-32")} />
        <div className={clsx(pulse, "h-4 w-72 max-w-full")} />
        <div className="mt-3 flex gap-3">
          <div className={clsx(pulse, "h-9 w-28 rounded-full")} />
          <div className={clsx(pulse, "h-9 w-36 rounded-full")} />
        </div>
      </div>
    </main>
  );
};
