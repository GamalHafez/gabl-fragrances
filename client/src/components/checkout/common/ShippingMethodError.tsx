import { Button } from "@/components/ui/shadcn/combobox";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type ShippingMethodErrorProps = {
  refetch: () => void;
};

export const ShippingMethodError = ({ refetch }: ShippingMethodErrorProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-2xl px-4 py-4 shadow-2xl",
        "transition-all duration-200",
        isDark ? "text-brand-400 bg-zinc-800" : "text-brand-500 bg-white",
      )}
    >
      <p className="text-sm">
        We couldn't load shipping methods. Please try again.
      </p>
      <Button
        type="button"
        className="cursor-pointer"
        onClick={() => refetch()}
      >
        Try again
      </Button>
    </div>
  );
};
