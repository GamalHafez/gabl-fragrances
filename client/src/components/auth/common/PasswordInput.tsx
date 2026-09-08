import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormField } from "@/components/ui/forms";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type PasswordInputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export const PasswordInput = <T extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  errors,
}: PasswordInputProps<T>) => {
  const { isDark } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <FormField
        name={name}
        type={showPassword ? "text" : "password"}
        register={register}
        errors={errors}
        label={label}
        placeholder={placeholder}
      />

      <button
        type="button"
        className={clsx(
          "absolute top-6 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md",
          "transition-colors focus:outline-none focus-visible:ring-2",

          isDark
            ? "focus-visible:ring-brand-400 text-neutral-500 hover:text-neutral-200"
            : "focus-visible:ring-brand-600 text-neutral-400 hover:text-neutral-600",
        )}
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};
