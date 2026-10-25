import { Info, MapPin } from "lucide-react";
import clsx from "clsx";
import {
  get,
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";
import { useTheme } from "@/context/theme/useTheme";
import { ErrorMessage } from "@/components/ui/common";

type LocationLinkFieldProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export const LocationLinkField = <T extends FieldValues>({
  name,
  register,
  errors,
}: LocationLinkFieldProps<T>) => {
  const { isDark } = useTheme();
  const inputId = `field-${name}`;
  const fieldError = get(errors, name) as FieldError | undefined;

  const errorMessage =
    typeof fieldError?.message === "string" ? fieldError.message : undefined;

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className={clsx(
          "cursor-pointer text-sm font-semibold",
          isDark ? "text-zinc-100" : "text-zinc-900",
        )}
      >
        Google Maps location link
      </label>

      <div className="relative">
        <MapPin
          aria-hidden
          className={clsx(
            "pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2",
            isDark ? "text-zinc-400" : "text-zinc-500",
          )}
        />

        <input
          id={inputId}
          type="url"
          inputMode="url"
          autoComplete="off"
          placeholder="Paste your Google Maps share link"
          aria-invalid={Boolean(errorMessage)}
          {...register(name)}
          className={clsx(
            "w-full rounded-xl border py-3.5 pr-4 pl-11 text-sm transition-colors outline-none",
            isDark
              ? "border-white/10 bg-transparent text-zinc-100 placeholder:text-zinc-500 focus:border-white/30"
              : "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400",
            errorMessage && (isDark ? "border-red-500/50" : "border-red-400"),
          )}
        />
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <p
        className={clsx("text-xs", isDark ? "text-zinc-300" : "text-zinc-600")}
      >
        Open Google Maps → select your delivery location → Share → Copy link.
      </p>

      <p
        className={clsx(
          "mt-2 flex items-center gap-2 text-xs",
          isDark ? "text-zinc-400" : "text-zinc-500",
        )}
      >
        <Info aria-hidden className="h-3.5 w-3.5 shrink-0" />
        Make sure the pin marks your building or delivery entrance.
      </p>
    </div>
  );
};
