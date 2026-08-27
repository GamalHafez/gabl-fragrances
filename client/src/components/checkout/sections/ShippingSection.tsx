import { RadioGroup } from "@/components/ui/shadcn/radio-group";
import {
  CheckoutHeading,
  ShippingMethod,
  ShippingMethodError,
} from "../common";
import type { CheckoutFormValues } from "@shared/types";
import {
  Controller,
  type Control,
  type UseFormSetValue,
} from "react-hook-form";
import { useShippingMethods } from "@/hooks/checkout";
import { ShippingMethodSkeleton } from "@/components/skeleton";
import { useEffect } from "react";

type ShippingSectionProps = {
  control: Control<CheckoutFormValues>;
  setValue: UseFormSetValue<CheckoutFormValues>;
};

export const ShippingSection = ({
  control,
  setValue,
}: ShippingSectionProps) => {
  const {
    data: shippingMethods,
    isPending,
    isFetching,
    isError,
    refetch,
  } = useShippingMethods();

  useEffect(() => {
    if (shippingMethods?.length) {
      setValue("shippingMethodId", shippingMethods[0].id);
    }
  }, [shippingMethods, setValue]);

  return (
    <section className="flex flex-col gap-2">
      <CheckoutHeading title="Shipping method" />

      {isPending || isFetching ? (
        <ShippingMethodSkeleton />
      ) : isError || !shippingMethods?.length ? (
        <ShippingMethodError refetch={refetch} />
      ) : (
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
                  isSelected={field.value === method.id}
                />
              ))}
            </RadioGroup>
          )}
        />
      )}
    </section>
  );
};
