import clsx from "clsx";
import { SampleSelector } from "@/components/samples/SampleSelector";
import type { ProductSample } from "@shared/types/product";
import { useTheme } from "@/context/theme/useTheme";

type SampleSelectionProps = {
  samples: ProductSample[];
  selectedSampleId: string;
  onSelectSample: (sampleId: string) => void;
};

export const SampleSelection = ({
  samples,
  selectedSampleId,
  onSelectSample,
}: SampleSelectionProps) => {
  const { isDark } = useTheme();

  return (
    <div className="mt-4">
      <p
        className={clsx(
          "mb-3 text-xs font-medium tracking-widest uppercase",
          isDark ? "text-zinc-500" : "text-zinc-500",
        )}
      >
        Choose your fragrance:
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {samples.map((sample) => (
          <SampleSelector
            key={sample.id}
            sampleName={sample.name}
            isSelected={sample.id === selectedSampleId}
            onSelect={() => onSelectSample(sample.id)}
          />
        ))}
      </div>
    </div>
  );
};
