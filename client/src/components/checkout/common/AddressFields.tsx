import type {
  Control,
  FieldErrors,
  UseFormRegister,
  Path,
} from "react-hook-form";
import type { CheckoutFormValues } from "@shared/types";
import { GovernorateCombobox } from "../common";
import { FormField } from "@/components/ui/forms";

type AddressFieldsProps = {
  control: Control<CheckoutFormValues>;
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
  names: {
    address: Path<CheckoutFormValues>;
    city: Path<CheckoutFormValues>;
    governorate: Path<CheckoutFormValues>;
    postalCode: Path<CheckoutFormValues>;
    phone: Path<CheckoutFormValues>;
  };
};

export const AddressFields = ({
  control,
  register,
  errors,
  names,
}: AddressFieldsProps) => {
  return (
    <>
      <FormField
        name={names.address}
        register={register}
        errors={errors}
        label="Address"
        placeholder="Enter your full address, including street and building number"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FormField
          name={names.city}
          register={register}
          errors={errors}
          label="City"
          placeholder="Ex: Cairo"
        />
        <GovernorateCombobox
          control={control}
          errors={errors}
          name={names.governorate}
        />
        <FormField
          name={names.postalCode}
          register={register}
          errors={errors}
          label="Postal Code"
          placeholder="Ex: 2531015 (optional)"
        />
      </div>

      <FormField
        name={names.phone}
        register={register}
        errors={errors}
        label="Phone"
        type="tel"
        placeholder="Ex: 01142975634"
      />
    </>
  );
};
