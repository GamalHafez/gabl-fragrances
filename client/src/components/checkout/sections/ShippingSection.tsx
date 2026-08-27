import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import { CheckoutHeading, ShippingMethod } from "../common";
import type { CheckoutFormValues } from "@shared/types";
import { Controller, type Control } from "react-hook-form";
import { useShippingMethods } from "@/hooks/checkout";

type ShippingSectionProps = {
  control: Control<CheckoutFormValues>;
};

export const ShippingSection = ({ control }: ShippingSectionProps) => {
  const { data: shippingMethods, isPending, isError } = useShippingMethods();

  if (isError || isPending) {
    return;
  }

  return (
    <section className="flex flex-col gap-2">
      <CheckoutHeading title="Shipping method" />

      <Controller
        name="shippingMethodId"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value || shippingMethods[0].id}
            onValueChange={field.onChange}
            className="gap-3"
          >
            {shippingMethods.map((method) => (
              <ShippingMethod
                key={method.id}
                method={method}
                isSelected={
                  (field.value || shippingMethods[0].id) === method.id
                }
              />
            ))}
          </RadioGroup>
        )}
      />
    </section>
  );
};
