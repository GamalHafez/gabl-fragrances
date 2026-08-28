import type { CheckoutFormValues } from "@shared/types";
import {
  Controller,
  type Control,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import { BillingAddressLabel, CheckoutHeading } from "../common";
import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import { BILLING_OPTIONS } from "@/data/BILLING_OPTIONS";
import { DeliverySection } from "./DeliverySection";

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
  return (
    <section className="flex flex-col gap-2">
      <CheckoutHeading title="Billing address" />

      <Controller
        name="billingSameAsShipping"
        control={control}
        render={({ field }) => (
          <>
            <RadioGroup
              value={field.value ? "same" : "different"}
              onValueChange={(val) => field.onChange(val === "same")}
              className="gap-3"
            >
              {BILLING_OPTIONS.map((option) => (
                <BillingAddressLabel
                  key={option.id}
                  billingAddressOption={option}
                  isSelected={field.value === option.value}
                />
              ))}
            </RadioGroup>
            {!field.value && (
              <DeliverySection
                control={control}
                register={register}
                errors={errors}
              />
            )}
          </>
        )}
      />
    </section>
  );
};
