import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/shadcn/dropdown-menu";
import { EditProfileTrigger } from "./EditProfileTrigger";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";
import { useState } from "react";
import { EditProfileItem } from "./EditProfileItem";
import { EditProfileDialog } from "./EditProfileDialog";
import { EDIT_PROFILE_ITEMS, type ProfileDialog } from "./EDIT_PROFILE_ITEMS";

export const EditProfile = () => {
  const { isDark } = useTheme();
  const [openDialog, setOpenDialog] = useState<ProfileDialog | null>(null);

  return (
    <>
      <DropdownMenu>
        <EditProfileTrigger />

        <DropdownMenuContent
          align="end"
          className={clsx(
            "min-w-56 rounded-xl border p-2 shadow-lg md:min-w-40",
            isDark
              ? "border-zinc-700 bg-zinc-900 text-zinc-300 shadow-black/30"
              : "border-zinc-200 bg-white text-zinc-900 shadow-zinc-200/50",
          )}
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel
              className={clsx(isDark ? "text-zinc-100" : "text-zinc-900")}
            >
              Profile Settings
            </DropdownMenuLabel>

            <DropdownMenuSeparator
              className={clsx(isDark ? "bg-zinc-500" : "bg-zinc-300")}
            />

            {EDIT_PROFILE_ITEMS.map((item) => (
              <EditProfileItem
                key={item.key}
                label={item.label}
                onSelect={() => setOpenDialog(item.key)}
              />
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {EDIT_PROFILE_ITEMS.map((item) => {
        const { key, form, title, description } = item;

        return (
          <EditProfileDialog
            key={key}
            open={openDialog === key}
            title={title}
            description={description}
            onOpenChange={(open) => setOpenDialog(open ? key : null)}
          >
            {form}
          </EditProfileDialog>
        );
      })}
    </>
  );
};
