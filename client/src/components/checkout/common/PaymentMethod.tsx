import { RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { useTheme } from "@/context/theme/useTheme";
import { CARD_BRAND_ICONS } from "@/data/CARD_BRAND_ICONS";
import type { PaymentMethodType } from "@shared/types";
import clsx from "clsx";

type PaymentMethodProps = {
  method: PaymentMethodType;
  isSelected: boolean;
};

export const PaymentMethod = ({ method, isSelected }: PaymentMethodProps) => {
  const { isDark } = useTheme();
  const { id, name, note } = method;

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex cursor-pointer items-start gap-4 rounded-2xl border px-4 py-4",
        "transition-all duration-200",

        // Base
        isDark ? "bg-zinc-900/60 text-zinc-100" : "bg-zinc-100 text-zinc-700",

        // Selected
        isSelected
          ? isDark
            ? "border-amber-500 ring-2 ring-amber-500/10"
            : "border-brand-900 ring-brand-900/10 ring-2"
          : isDark
            ? "border-zinc-800 hover:border-zinc-700"
            : "border-zinc-200 hover:border-zinc-300",
      )}
    >
      <RadioGroupItem value={id} id={id} className="mt-0.5" />

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-x-3 gap-y-2 md:flex-wrap">
          <p className="text-sm font-medium">{name}</p>
          {id === "CARD" && (
            <div className="flex items-center md:gap-1.5">
              {CARD_BRAND_ICONS.map(({ Icon, label }) => (
                <div
                  key={label}
                  title={label}
                  className={clsx(
                    "flex w-7 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-white md:h-6 md:w-9",
                    isDark ? "border-zinc-800" : "border-zinc-200",
                  )}
                >
                  <Icon width={28} aria-label={label} />
                </div>
              ))}
            </div>
          )}
        </div>

        {isSelected && note && (
          <p
            className={clsx(
              "mt-2 text-xs leading-relaxed md:mt-1",
              isDark ? "text-zinc-400" : "text-zinc-500",
            )}
          >
            {note}
          </p>
        )}
      </div>
    </label>
  );
};
