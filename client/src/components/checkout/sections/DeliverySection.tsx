import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CheckoutFormValues } from "@shared/types";
import { CheckoutHeading } from "../common";
import { CountryField } from "./CountryField";
import { FormField, FormSelect } from "@/components/ui/forms";
import { EGYPT_GOVERNORATE_OPTIONS } from "@/data/EgyptGovernorates";

type DeliverySectionProps = {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const DeliverySection = ({ register, errors }: DeliverySectionProps) => {
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

      <FormField
        name="address"
        register={register}
        errors={errors}
        label="Address"
        placeholder="Ex: ..."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormField
          name="city"
          register={register}
          errors={errors}
          label="City"
          placeholder="Ex: Cairo"
        />
        <FormSelect
          name="governorate"
          options={EGYPT_GOVERNORATE_OPTIONS}
          register={register}
          errors={errors}
          label="Governorate"
        />
        <FormField
          name="postalCode"
          register={register}
          errors={errors}
          label="Postal Code"
          placeholder="Ex: 2531015 (optional)"
        />
      </div>

      <FormField
        name="phone"
        register={register}
        errors={errors}
        label="Phone"
        type="tel"
        placeholder="Ex: 01142975634"
      />
    </section>
  );
};
