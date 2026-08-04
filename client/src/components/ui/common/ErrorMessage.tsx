import { useTheme } from "@/context/useTheme";
import clsx from "clsx";

type ErrorMessageProps = {
  message: string;
};
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const { isDark } = useTheme();

  return (
    message && (
      <p className={clsx("text-sm", isDark ? "text-red-600" : "text-red-500")}>
        {message}
      </p>
    )
  );
};
