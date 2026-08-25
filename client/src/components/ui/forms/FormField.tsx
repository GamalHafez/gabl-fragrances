import { useTheme } from "@/context/theme/useTheme";
import { FormLabel } from "./FormLabel";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import clsx from "clsx";
import { ErrorMessage } from "../common";

type FormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  isTextarea?: boolean;
  rows?: number;
};

export const FormField = <T extends FieldValues>({
  name,
  register,
  errors,
  label,
  type = "text",
  placeholder,
  isTextarea,
  rows = 5,
  ...props
}: FormFieldProps<T>) => {
  const { isDark } = useTheme();

  const fieldStyles = clsx(
    "resize-none rounded-2xl border px-4 py-3 text-sm transition-all duration-300 outline-none",
    "focus:ring-4",
    isDark
      ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
      : "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-amber-200/50",
  );

  return (
    <div className="flex flex-col gap-1">
      {label && <FormLabel id={name}>{label}</FormLabel>}

      {isTextarea ? (
        <textarea
          {...register(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={`${name}-error`}
          id={name}
          rows={rows}
          placeholder={placeholder}
          className={fieldStyles}
          {...props}
        />
      ) : (
        <input
          {...register(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={`${name}-error`}
          id={name}
          type={type}
          placeholder={placeholder}
          className={fieldStyles}
          {...props}
        />
      )}

      {errors[name] && (
        <ErrorMessage message={String(errors[name]?.message ?? "")} />
      )}
    </div>
  );
};
