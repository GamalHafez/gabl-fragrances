import clsx from "clsx";
import { CheckoutHeading, PaymentMethod } from "../common";
import { useTheme } from "@/context/theme/useTheme";
import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import { PAYMENT_METHODS } from "@shared/constants/paymentMethods.js";
import type { CheckoutFormValues } from "@shared/types";
import { Controller, type Control } from "react-hook-form";

type PaymentSectionProps = {
  control: Control<CheckoutFormValues>;
};

export const PaymentSection = ({ control }: PaymentSectionProps) => {
  const { isDark } = useTheme();

  return (
    <section className="flex flex-col gap-2">
      <div>
        <CheckoutHeading title="Payment" />

        <p
          className={clsx(
            "pb-2 text-sm",
            isDark ? "text-zinc-600" : "text-zinc-400",
          )}
        >
          All transactions are secure and encrypted.
        </p>
      </div>

      <Controller
        name="paymentMethodId"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="gap-3"
          >
            {PAYMENT_METHODS.map((method) => (
              <PaymentMethod
                key={method.id}
                method={method}
                isSelected={field.value === method.id}
              />
            ))}
          </RadioGroup>
        )}
      />
    </section>
  );
};
