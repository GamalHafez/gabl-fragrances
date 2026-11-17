import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { ChevronDown } from "lucide-react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FormLabel } from "./FormLabel";
import { ErrorMessage } from "../common";

export type SelectOption = {
  value: string;
  label: string;
};

type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  options: SelectOption[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder?: string;
};

export const FormSelect = <T extends FieldValues>({
  name,
  options,
  register,
  errors,
  label,
  placeholder,
}: FormSelectProps<T>) => {
  const { isDark } = useTheme();

  const hasError = !!errors[name];

  const selectStyles = clsx(
    "w-full appearance-none cursor-pointer rounded-2xl border px-4 py-3 pr-10 text-sm",
    "transition-all duration-300 outline-none",
    "focus:ring-4",
    isDark
      ? [
          "border-zinc-700 bg-zinc-900 text-zinc-100",
          "focus:border-amber-500 focus:ring-amber-500/20",
        ]
      : [
          "border-zinc-300 bg-white text-zinc-900",
          "focus:border-amber-400 focus:ring-amber-200/50",
        ],
    hasError &&
      (isDark
        ? "border-red-500 focus:border-red-500"
        : "border-red-400 focus:border-red-400"),
  );

  return (
    <div className="flex flex-col">
      <FormLabel id={name}>{label}</FormLabel>

      <div className="relative">
        <select
          id={name}
          aria-invalid={hasError}
          aria-describedby={`${name}-error`}
          className={selectStyles}
          {...register(name)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          aria-hidden="true"
          className={clsx(
            "pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2",
            isDark ? "text-zinc-500" : "text-zinc-400",
          )}
        />
      </div>

      {hasError && (
        <ErrorMessage message={String(errors[name]?.message ?? "")} />
      )}
    </div>
  );
};
