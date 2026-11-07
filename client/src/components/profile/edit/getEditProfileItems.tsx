import { ChangePasswordForm } from "./ChangePasswordForm";
import { PersonalInfoForm } from "./PersonalInfoForm";

export type ProfileDialog = "personal" | "password" | "addresses";

export const getEditProfileItems = (
  setOpenDialog: React.Dispatch<React.SetStateAction<ProfileDialog | null>>,
): {
  key: ProfileDialog;
  label: string;
  title?: string;
  description: string;
  form: React.ReactNode;
}[] => {
  return [
    {
      key: "personal",
      label: "Personal Information",
      title: "Edit Personal Information",
      description: "Update your personal details and preferences.",
      form: <PersonalInfoForm setOpenDialog={setOpenDialog} />,
    },
    {
      key: "password",
      label: "Password & Security",
      title: "Change Password",
      description: "Update your password and security settings.",
      form: <ChangePasswordForm setOpenDialog={setOpenDialog} />,
    },
    {
      key: "addresses",
      label: "Saved Addresses",
      title: "Manage Addresses",
      description: "View and update your saved addresses.",
      form: <p>c</p>,
    },
  ];
};
