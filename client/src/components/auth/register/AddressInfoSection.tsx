import { GovernorateCombobox } from "@/components/checkout/common";
import { CountryField } from "@/components/checkout/sections";
import { FormField } from "@/components/ui/forms";
import { useTheme } from "@/context/theme/useTheme";
import type { RegisterBody } from "@shared/schemas/auth.validators";
import clsx from "clsx";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";

type AddressInfoSectionProps = {
  control: Control<RegisterBody>;
  registerField: UseFormRegister<RegisterBody>;
  errors: FieldErrors<RegisterBody>;
};

export const AddressInfoSection = ({
  control,
  registerField,
  errors,
}: AddressInfoSectionProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-3 rounded-3xl border p-6 shadow-xl transition-all duration-300 sm:p-8",
        isDark
          ? "border-white/10 bg-zinc-950/70 shadow-black/30"
          : "bg-brand-100 border-zinc-200 shadow-zinc-900/5",
      )}
    >
      <h3
        className={clsx(
          "text-lg font-semibold tracking-tight",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Address Information
      </h3>

      <CountryField />

      <FormField
        name="address"
        register={registerField}
        errors={errors}
        label="Address"
        placeholder="Enter your full address, including street and building number"
      />

      <FormField
        name="city"
        register={registerField}
        errors={errors}
        label="City"
        placeholder="Ex: Nasr City"
      />

      <GovernorateCombobox
        name="governorate"
        control={control}
        errors={errors}
      />

      <FormField
        name="postalCode"
        register={registerField}
        errors={errors}
        label="Postal Code"
        placeholder="Ex: 2531015 (optional)"
      />
    </div>
  );
};
