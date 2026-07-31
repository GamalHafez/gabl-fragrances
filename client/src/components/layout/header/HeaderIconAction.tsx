import { TooltipCard } from "@/components/ui/shadcn/hover-card";

type HeaderIconActionProps = {
  tooltip: string;
  contentClassName?: string;
  trigger: React.ReactNode;
};

export const HeaderIconAction = ({
  tooltip,
  contentClassName,
  trigger,
}: HeaderIconActionProps) => {
  return (
    <TooltipCard
      trigger={trigger}
      content={<p className="text-zinc-900 capitalize">{tooltip}</p>}
      contentClassName={contentClassName}
    />
  );
};
