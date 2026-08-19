import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";

type SampleSelectorProps = {
  sampleName: string;
  isSelected: boolean;
  onSelect: () => void;
};

export const SampleSelector = ({
  sampleName,
  isSelected,
  onSelect,
}: SampleSelectorProps) => {
  const { isDark } = useTheme();

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={clsx(
        "group relative min-h-12 cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-medium",
        "transition-all duration-200",
        "focus-visible:ring-brand-400 focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? "hover:border-brand-400/60 border-zinc-700 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800"
          : "hover:border-brand-400/60 border-zinc-200 bg-white/70 text-zinc-700 hover:bg-zinc-50",
        isSelected &&
          (isDark
            ? "border-brand-400 bg-brand-400/10 text-brand-200 shadow-sm"
            : "border-brand-400 bg-brand-50 text-brand-600 shadow-sm"),
      )}
    >
      <span className="line-clamp-2">{sampleName}</span>

      {isSelected && (
        <span
          className={clsx(
            "absolute inset-x-3 -bottom-px h-0.5 rounded-full",
            isDark ? "bg-brand-400" : "bg-brand-500",
          )}
        />
      )}
    </button>
  );
};
