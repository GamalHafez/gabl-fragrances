import {
  Ban,
  CircleCheckBig,
  FlaskConical,
  Footprints,
  Gem,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type ProductBadgeStatus =
  | "stock"
  | "out-of-stock"
  | "collection"
  | "best-seller"
  | "new"
  | "limited-edition"
  | "sample";

type BadgeStyle = {
  light: string;
  dark: string;
};

type BadgeConfig = {
  icon: LucideIcon;
  styles: BadgeStyle;
};

export const PRODUCT_BADGE_CONFIG: Record<ProductBadgeStatus, BadgeConfig> = {
  stock: {
    icon: CircleCheckBig,
    styles: {
      light: "bg-green-100/50 text-green-700",
      dark: "bg-green-900/40 text-green-300",
    },
  },

  "out-of-stock": {
    icon: Ban,
    styles: {
      light: "bg-red-100 text-red-700",
      dark: "bg-red-900/40 text-red-300",
    },
  },

  collection: {
    icon: Footprints,
    styles: {
      light: "bg-zinc-900 text-zinc-100",
      dark: "bg-zinc-100 text-zinc-900",
    },
  },

  "best-seller": {
    icon: Trophy,
    styles: {
      light: "bg-amber-100 text-amber-700",
      dark: "bg-amber-900/40 text-amber-300",
    },
  },

  new: {
    icon: Sparkles,
    styles: {
      light: "bg-blue-100 text-blue-700",
      dark: "bg-blue-900/40 text-blue-300",
    },
  },

  "limited-edition": {
    icon: Gem,
    styles: {
      light: "bg-purple-100 text-purple-700",
      dark: "bg-purple-900/40 text-purple-300",
    },
  },

  sample: {
    icon: FlaskConical,
    styles: {
      light: "bg-rose-100 text-rose-700",
      dark: "bg-rose-900/40 text-rose-300",
    },
  },
};
