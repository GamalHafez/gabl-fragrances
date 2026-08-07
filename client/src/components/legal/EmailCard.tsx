import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { Mail } from "lucide-react";

export const EmailCard = ({ email }: { email: string }) => {
  const { isDark } = useTheme();

  return (
    <a
      href={`mailto:${email}`}
      className={clsx(
        "group mt-2 inline-flex w-fit items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300",
        isDark
          ? "border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-amber-500 hover:bg-zinc-800"
          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-amber-400 hover:bg-amber-50",
      )}
    >
      <Mail
        size={18}
        className={clsx(
          "transition-transform duration-300 group-hover:scale-110",
          isDark ? "text-amber-400" : "text-amber-600",
        )}
      />

      <span className="font-medium">{email}</span>
    </a>
  );
};
