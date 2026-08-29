import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import type { CheckoutFormValues } from "@shared/types";
import { AddressFields, CheckoutHeading } from "../common";
import { CountryField } from "./CountryField";
import { FormField } from "@/components/ui/forms";

type DeliverySectionProps = {
  control: Control<CheckoutFormValues>;
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const DeliverySection = ({
  control,
  register,
  errors,
}: DeliverySectionProps) => {
  return (
    <section className="flex flex-col gap-2">
      <CheckoutHeading title="Delivery" />

      <CountryField />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="firstName"
          register={register}
          errors={errors}
          label="First name"
          placeholder="Ex: Omar"
        />
        <FormField
          name="lastName"
          register={register}
          errors={errors}
          label="Last name"
          placeholder="Ex: Khaled"
        />
      </div>

      <AddressFields
        control={control}
        register={register}
        errors={errors}
        names={{
          address: "address",
          city: "city",
          governorate: "governorate",
          postalCode: "postalCode",
          phone: "phone",
        }}
      />
    </section>
  );
};
