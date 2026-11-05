import { PersonalInfoForm } from "./PersonalInfoForm";

export type ProfileDialog = "personal" | "password" | "addresses";

export const EDIT_PROFILE_ITEMS: {
  key: ProfileDialog;
  label: string;
  title?: string;
  description: string;
  form: React.ReactNode;
}[] = [
  {
    key: "personal",
    label: "Personal Information",
    title: "Edit Personal Information",
    description: "Update your personal details and preferences.",
    form: <PersonalInfoForm />,
  },
  {
    key: "password",
    label: "Password & Security",
    title: "Change Password",
    description: "Update your password and security settings.",
    form: <p>c</p>,
  },
  {
    key: "addresses",
    label: "Saved Addresses",
    title: "Manage Addresses",
    description: "View and update your saved addresses.",
    form: <p>c</p>,
  },
];
