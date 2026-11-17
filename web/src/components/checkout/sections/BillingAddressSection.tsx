import type { CheckoutFormValues } from "@shared/types";
import {
  Controller,
  type Control,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import { AddressFields, BillingAddressLabel, CheckoutHeading } from "../common";
import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import { BILLING_OPTIONS } from "@/data/BILLING_OPTIONS";
import { CountryField } from "./CountryField";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type BillingAddressSectionProps = {
  control: Control<CheckoutFormValues>;
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const BillingAddressSection = ({
  control,
  register,
  errors,
}: BillingAddressSectionProps) => {
  const { isDark } = useTheme();

  return (
    <section className="flex flex-col">
      <CheckoutHeading title="Billing address" />

      <Controller
        name="billingSameAsShipping"
        control={control}
        render={({ field }) => (
          <>
            <RadioGroup
              value={field.value ? "same" : "different"}
              onValueChange={(val) => field.onChange(val === "same")}
              className="mt-2 gap-3"
            >
              {BILLING_OPTIONS.map((option) => (
                <BillingAddressLabel
                  key={option.id}
                  billingAddressOption={option}
                  isSelected={field.value === option.value}
                  isExpanded={!field.value && option.value === false}
                />
              ))}
            </RadioGroup>

            {!field.value && (
              <div
                className={clsx(
                  "-mt-2 flex flex-col gap-4 rounded-b-2xl border border-t-0 px-4 pt-4 pb-4",
                  isDark
                    ? "border-amber-500 bg-zinc-900/60"
                    : "border-brand-900 bg-zinc-100",
                )}
              >
                <CountryField />

                <AddressFields
                  control={control}
                  register={register}
                  errors={errors}
                  names={{
                    address: "billingAddress",
                    city: "billingCity",
                    governorate: "billingGovernorate",
                    postalCode: "billingPostalCode",
                    phone: "billingPhone",
                  }}
                />
              </div>
            )}
          </>
        )}
      />
    </section>
  );
};
