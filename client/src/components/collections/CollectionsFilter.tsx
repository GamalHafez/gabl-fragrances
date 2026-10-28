import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";

export type SortOption = "price-desc" | "best-selling" | "price-asc";
export type GenderOption = "men" | "women" | "unisex";

export type CollectionsFilters = {
  sort: SortOption;
  gender: GenderOption;
};

// eslint-disable-next-line react-refresh/only-export-components
export const DEFAULT_FILTERS: CollectionsFilters = {
  sort: "price-asc",
  gender: "unisex",
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "best-selling", label: "Best selling" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
];

const GENDER_OPTIONS: { value: GenderOption; label: string }[] = [
  { value: "men", label: "Men's" },
  { value: "women", label: "Women's" },
  { value: "unisex", label: "Unisex" },
];

type FilterSelectProps<T extends string> = {
  id: string;
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
};

const FilterSelect = <T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: FilterSelectProps<T>) => {
  const { isDark } = useTheme();

  return (
    <div className="relative min-w-0">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className={clsx(
          "w-full cursor-pointer appearance-none rounded-xl border py-3 pr-9 pl-4 text-sm font-medium transition-colors outline-none",
          isDark
            ? "border-white/10 bg-zinc-900 text-zinc-100 focus:border-white/30"
            : "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400",
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className={clsx(
          "pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
          isDark ? "text-zinc-400" : "text-zinc-500",
        )}
      />
    </div>
  );
};

type CollectionsFilterProps = {
  value: CollectionsFilters;
  onChange: (filters: CollectionsFilters) => void;
};

export const CollectionsFilter = ({
  value,
  onChange,
}: CollectionsFilterProps) => (
  <div className="flex gap-2 md:gap-1">
    <FilterSelect
      id="collections-sort"
      label="Sort by"
      value={value.sort}
      options={SORT_OPTIONS}
      onChange={(sort) => onChange({ ...value, sort })}
    />
    <FilterSelect
      id="collections-gender"
      label="Gender"
      value={value.gender}
      options={GENDER_OPTIONS}
      onChange={(gender) => onChange({ ...value, gender })}
    />
  </div>
);
