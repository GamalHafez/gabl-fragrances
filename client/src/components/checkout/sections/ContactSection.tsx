import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormField } from "@/components/ui/forms";
import type { CheckoutFormValues } from "@shared/types";
import { CheckoutHeading } from "../common";

type ContactSectionProps = {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const ContactSection = ({ register, errors }: ContactSectionProps) => {
  //  const auth = null; to be handled later
  return (
    <section className="flex flex-col gap-1">
      <CheckoutHeading title="Contact" />

      <FormField
        name="contact"
        register={register}
        errors={errors}
        placeholder="Enter Email or mobile phone number"
      />
    </section>
  );
};
