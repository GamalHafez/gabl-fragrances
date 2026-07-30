import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { SectionHeading } from "./SectionHeading";
import { Eyebrow } from "./Eyebrow";

type SectionHeaderContent = {
  eyebrow: string;
  title: string;
  description: string;
};

type SectionHeaderProps = {
  content: SectionHeaderContent;
};

export const SectionHeader = ({ content }: SectionHeaderProps) => {
  const { isDark } = useTheme();
  const { eyebrow, title, description } = content;

  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow eyebrow={eyebrow} />

      <SectionHeading title={title} />

      <p
        className={clsx(
          "mt-6 text-lg leading-8",
          isDark ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        {description}
      </p>
    </div>
  );
};
