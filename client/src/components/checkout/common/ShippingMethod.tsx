import { RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type ShippingMethodProps = {
  method: {
    id: string;
    name: string;
    price: number;
  };
  isSelected: boolean;
};

export const ShippingMethod = ({ method, isSelected }: ShippingMethodProps) => {
  const { isDark } = useTheme();
  const { id, name, price } = method;

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-4",
        "transition-all duration-200",

        // Base
        isDark ? "bg-zinc-900/60 text-zinc-100" : "bg-white text-zinc-900",

        // Selected
        isSelected
          ? isDark
            ? "border-amber-500 ring-2 ring-amber-500/10"
            : "border-zinc-900 ring-2 ring-zinc-900/10"
          : isDark
            ? "border-zinc-800 hover:border-zinc-700"
            : "border-zinc-200 hover:border-zinc-300",
      )}
    >
      <RadioGroupItem value={id} id={id} />

      <span className="flex flex-1 items-center justify-between">
        <span className="text-sm font-medium">{name}</span>

        <span
          className={clsx(
            "text-sm font-bold",
            isDark ? "text-zinc-300" : "text-zinc-700",
          )}
        >
          {price} EGP
        </span>
      </span>
    </label>
  );
};
