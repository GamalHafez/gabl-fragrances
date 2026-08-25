import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import type { CheckoutFormValues } from "@shared/types";
import { Controller, type Control } from "react-hook-form";

type CheckoutSaveInformationProps = {
  control: Control<CheckoutFormValues>;
};

export const CheckoutSaveInformation = ({
  control,
}: CheckoutSaveInformationProps) => {
  const { isDark } = useTheme();

  return (
    <Controller
      name="saveInformation"
      control={control}
      render={({ field }) => (
        <label
          className={clsx(
            "flex cursor-pointer items-center gap-2 pl-2 text-sm",
            isDark ? "text-zinc-300" : "text-zinc-700",
          )}
        >
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />

          <span>Save this information for next time</span>
        </label>
      )}
    />
  );
};
