import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

export const CheckoutHeading = ({ title }: { title: string }) => {
  const { isDark } = useTheme();

  return (
    <h3
      className={clsx(
        "mb-1 text-xl font-semibold capitalize",
        isDark ? "text-zinc-200" : "text-zinc-800",
      )}
    >
      {title}
    </h3>
  );
};
