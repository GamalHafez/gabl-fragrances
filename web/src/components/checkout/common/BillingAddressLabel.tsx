import { useTheme } from "@/context/theme/useTheme";
import { RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import clsx from "clsx";
import type { BillingAddressOptionType } from "@shared/types";

type BillingAddressLabelType = {
  billingAddressOption: BillingAddressOptionType;
  isSelected: boolean;
  isExpanded?: boolean;
};

export const BillingAddressLabel = ({
  billingAddressOption,
  isSelected,
  isExpanded = false,
}: BillingAddressLabelType) => {
  const { isDark } = useTheme();
  const { id, label } = billingAddressOption;

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex cursor-pointer items-center gap-3 border px-4 py-4",
        "transition-all duration-200",
        isExpanded ? "rounded-t-2xl" : "rounded-2xl",
        isDark ? "bg-zinc-900/60 text-zinc-100" : "bg-zinc-100 text-zinc-700",
        isSelected
          ? isDark
            ? "border-amber-500 ring-2 ring-amber-500/10"
            : "border-brand-900 ring-brand-900/10 ring-2"
          : isDark
            ? "border-zinc-800 hover:border-zinc-700"
            : "border-zinc-200 hover:border-zinc-300",
      )}
    >
      <RadioGroupItem value={id} id={id} />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
};
