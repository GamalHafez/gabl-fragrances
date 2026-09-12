import {
  Calendar,
  MapPin,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileCardData = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ProfileCardInputs = {
  name: string;
  email: string;
  roleName: string;
  memberSince: string;
  addressValue: string;
};

export const getProfileCards = ({
  name,
  email,
  roleName,
  memberSince,
  addressValue,
}: ProfileCardInputs): ProfileCardData[] => [
  { icon: User, label: "Name", value: name },
  { icon: MessageCircle, label: "Contactable at", value: email },
  { icon: ShieldCheck, label: "Account Type", value: roleName },
  { icon: Calendar, label: "Member Since", value: memberSince },
  { icon: MapPin, label: "Default Address", value: addressValue },
];
