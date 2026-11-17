import { DropdownMenuItem } from "@/components/ui/shadcn/dropdown-menu";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type EditProfileItemProps = {
  label: string;
  onSelect: () => void;
};

export const EditProfileItem = ({ label, onSelect }: EditProfileItemProps) => {
  const { isDark } = useTheme();

  return (
    <DropdownMenuItem
      onClick={onSelect}
      className={clsx(
        "cursor-pointer",
        isDark ? "text-zinc-300" : "text-zinc-900",
      )}
    >
      {label}
    </DropdownMenuItem>
  );
};
