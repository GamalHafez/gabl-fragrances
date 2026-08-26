import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/shadcn/combobox";
import { EGYPT_GOVERNORATE_OPTIONS } from "@/data/EgyptGovernorates";
import { useTheme } from "@/context/theme/useTheme";
import { FormLabel } from "@/components/ui/forms";
import { ErrorMessage } from "@/components/ui/common";
import clsx from "clsx";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import type { CheckoutFormValues } from "@shared/types";

type GovernorateComboboxProps = {
  control: Control<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const GovernorateCombobox = ({
  control,
  errors,
}: GovernorateComboboxProps) => {
  const { isDark } = useTheme();

  const hasError = !!errors.governorate;

  return (
    <div className="flex flex-col">
      <FormLabel id="governorate">Governorate</FormLabel>

      <Controller
        name="governorate"
        control={control}
        render={({ field }) => (
          <Combobox
            items={EGYPT_GOVERNORATE_OPTIONS}
            value={field.value}
            onValueChange={(value) => field.onChange(value ?? "")}
          >
            <ComboboxInput
              placeholder="Select your Governorate"
              aria-invalid={hasError}
              aria-describedby="governorate-error"
              className={clsx(
                "h-10 resize-none rounded-2xl border px-2 py-3 text-sm transition-all duration-300 outline-none",
                "focus:ring-4",
                isDark
                  ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
                  : "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-amber-200/50",
                hasError && (isDark ? "border-red-500" : "border-red-400"),
              )}
            />

            <ComboboxContent>
              <ComboboxEmpty>No governorate found.</ComboboxEmpty>

              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        )}
      />

      {hasError && (
        <ErrorMessage message={String(errors.governorate?.message ?? "")} />
      )}
    </div>
  );
};
