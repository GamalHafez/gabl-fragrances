import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type FormLabelProps = {
  id: string;
  children: React.ReactNode;
};

export const FormLabel = ({ id, children }: FormLabelProps) => {
  const { isDark } = useTheme();

  return (
    <label
      htmlFor={id}
      className={clsx(
        "cursor-pointer px-2 text-sm font-semibold capitalize",
        isDark ? "text-zinc-200" : "text-zinc-800",
      )}
    >
      {children}
    </label>
  );
};
