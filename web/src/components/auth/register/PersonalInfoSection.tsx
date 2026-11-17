import { FormField } from "@/components/ui/forms";
import { PasswordInput } from "../common";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterBody } from "@shared/schemas/auth.validators";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type PersonalInfoSectionProps = {
  registerField: UseFormRegister<RegisterBody>;
  errors: FieldErrors<RegisterBody>;
};

export const PersonalInfoSection = ({
  registerField,
  errors,
}: PersonalInfoSectionProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "relative z-10 grid grid-cols-1 gap-3 rounded-3xl border p-6 shadow-2xl transition-all duration-300 sm:p-8",
        isDark
          ? "border-white/10 bg-zinc-950 shadow-black/30"
          : "border-zinc-200 bg-zinc-100/50 shadow-zinc-900/20",
      )}
    >
      <h3
        className={clsx(
          "text-lg font-semibold tracking-tight",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Personal Information
      </h3>

      <FormField
        name="name"
        register={registerField}
        errors={errors}
        label="Name"
        placeholder="Ex: Omar Gamal"
      />

      <FormField
        name="email"
        type="email"
        register={registerField}
        errors={errors}
        label="Email"
        placeholder="Ex: omar@gmail.com"
      />

      <PasswordInput
        name="password"
        register={registerField}
        errors={errors}
        label="Password"
        placeholder="Ex: ********"
      />

      <PasswordInput
        name="confirmPassword"
        register={registerField}
        errors={errors}
        label="Confirm Password"
        placeholder="Ex: ********"
      />
    </div>
  );
};
