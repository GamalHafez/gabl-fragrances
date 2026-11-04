import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/shadcn/dropdown-menu";
import { EditProfileTrigger } from "./EditProfileTrigger";

export const EditProfile = () => {
  return (
    <DropdownMenu>
      <EditProfileTrigger />

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Profile Settings</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Personal Information</DropdownMenuItem>
          <DropdownMenuItem>Password & Security</DropdownMenuItem>
          <DropdownMenuItem>Saved Addresses</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
