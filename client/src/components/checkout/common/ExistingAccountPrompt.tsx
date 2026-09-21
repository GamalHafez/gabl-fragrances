import { Link } from "react-router-dom";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

export const ExistingAccountPrompt = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={clsx(
        "mt-2 flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm",
        isDark
          ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
          : "border-blue-100 bg-blue-50 text-blue-700",
      )}
    >
      <p>
        Already have an account?{" "}
        <Link to="/login" className="font-semibold underline">
          Sign in
        </Link>{" "}
        to connect this order to your account and view it from your order
        history.
      </p>
    </div>
  );
};
