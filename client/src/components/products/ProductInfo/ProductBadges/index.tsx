import { Badge } from "@/components/ui/shadcn/badge";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import {
  PRODUCT_BADGE_CONFIG,
  type ProductBadgeStatus,
} from "./productBadgeConfig";
import Reveal from "@/components/ui/animation/Reveal";

export type ProductBadge = {
  label: string;
  status?: ProductBadgeStatus;
};

type ProductBadgesProps = {
  badges: ProductBadge[];
};

export const ProductBadges = ({ badges }: ProductBadgesProps) => {
  const { isDark } = useTheme();

  return (
    <div className="flex gap-2">
      {badges.map((badge) => {
        const config = badge.status && PRODUCT_BADGE_CONFIG[badge.status];
        const Icon = config?.icon;

        return (
          <Reveal key={badge.label}>
            <Badge
              className={clsx(
                "inline-flex items-center gap-1.5 rounded-full md:my-1",
                config && (isDark ? config.styles.dark : config.styles.light),
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {badge.label}
            </Badge>
          </Reveal>
        );
      })}
    </div>
  );
};
