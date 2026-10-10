import { Calendar, MapPin, MessageCircle, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProfileCardData = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ProfileCardInputs = {
  name: string;
  email: string;
  memberSince: string;
  addressValue: string;
};

export const getProfileCards = ({
  name,
  email,
  memberSince,
  addressValue,
}: ProfileCardInputs): ProfileCardData[] => [
  { icon: User, label: "Name", value: name },
  { icon: MessageCircle, label: "Contactable at", value: email },
  { icon: Calendar, label: "Member Since", value: memberSince },
  { icon: MapPin, label: "Default Address", value: addressValue },
];
