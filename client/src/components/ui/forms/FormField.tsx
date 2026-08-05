import { useTheme } from "@/context/useTheme";
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
  field: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  type?: string;
  placeholder?: string;
};

export const FormField = <T extends FieldValues>({
  field,
  register,
  errors,
  label,
  type = "text",
  placeholder,
}: FormFieldProps<T>) => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col gap-1">
      <FormLabel id={field}>{label}</FormLabel>

      <input
        {...register(field)}
        id={field}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "rounded-2xl border px-4 py-3 text-sm transition-all duration-300 outline-none",
          "focus:ring-4",
          isDark
            ? "border-zinc-700 bg-zinc-900 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-amber-500/20"
            : "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-amber-400 focus:ring-amber-200/50",
        )}
      />

      {errors[field] && (
        <ErrorMessage message={String(errors[field]?.message ?? "")} />
      )}
    </div>
  );
};
