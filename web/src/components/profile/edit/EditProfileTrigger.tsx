import { DropdownMenuTrigger } from "@/components/ui/shadcn/dropdown-menu";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { UserPen } from "lucide-react";

export const EditProfileTrigger = () => {
  const { isDark } = useTheme();

  return (
    <DropdownMenuTrigger
      render={
        <button
          type="button"
          aria-label="Edit profile"
          className={clsx(
            "flex cursor-pointer items-center justify-center gap-2 rounded-full border p-3 text-sm font-medium transition-all duration-300 md:px-10",
            isDark
              ? "border-amber-500/60 bg-zinc-900 text-amber-300 hover:border-amber-400 hover:bg-zinc-800 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-500/20"
              : "border-amber-300 bg-white text-amber-900 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md hover:shadow-amber-200/40",
          )}
        >
          <UserPen size={20} strokeWidth={2} />
          <span className="hidden md:block">Edit Profile</span>
        </button>
      }
    />
  );
};
