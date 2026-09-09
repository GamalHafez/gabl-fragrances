import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormField } from "@/components/ui/forms";
import type { CheckoutFormValues } from "@shared/types";
import { CheckoutHeading } from "../common";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type ContactSectionProps = {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
};

export const ContactSection = ({ register, errors }: ContactSectionProps) => {
  const { isDark } = useTheme();

  //  const auth = null; to be handled later
  return (
    <section className="flex flex-col gap-1">
      <CheckoutHeading title="Contact" />

      <FormField
        name="contact"
        label="Email"
        type="email"
        register={register}
        errors={errors}
        placeholder="Ex: you@example.com"
      />

      <p
        className={clsx(
          "pl-2 text-xs",
          isDark ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        We'll send your order confirmation and updates to this email.
      </p>
    </section>
  );
};
