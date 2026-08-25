import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import { CheckoutHeading, ShippingMethod } from "../common";
import type { CheckoutFormValues } from "@shared/types";
import { Controller, type Control } from "react-hook-form";

const shippingMethods = [
  {
    id: "standard",
    name: "Standard",
    price: 85,
  },
] as const;

type ShippingSectionProps = {
  control: Control<CheckoutFormValues>;
};

export const ShippingSection = ({ control }: ShippingSectionProps) => {
  return (
    <section className="flex flex-col gap-2">
      <CheckoutHeading title="Shipping method" />

      <Controller
        name="shippingMethod"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="gap-3"
          >
            {shippingMethods.map((method) => (
              <ShippingMethod
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
