import { useState } from "react";
import clsx from "clsx";
import { Search, X } from "lucide-react";
import { useTheme } from "@/context/theme/useTheme";
import {
  CollectionsFilter,
  DEFAULT_FILTERS,
  type CollectionsFilters,
} from "./CollectionsFilter";

type CollectionsSearchProps = {
  initialQuery?: string;
  initialFilters?: CollectionsFilters;
  onSearch?: (params: { query: string } & CollectionsFilters) => void;
};

export const CollectionsSearch = ({
  initialQuery = "",
  initialFilters = DEFAULT_FILTERS,
  onSearch,
}: CollectionsSearchProps) => {
  const { isDark } = useTheme();
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<CollectionsFilters>(initialFilters);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.({ query: query.trim(), ...filters });
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex flex-col justify-between gap-2 px-4 md:w-full md:flex-row md:gap-4"
    >
      <div
        className={clsx(
          "flex flex-1 items-center gap-2 rounded-xl border p-1.5 transition-colors",
          isDark
            ? "border-white/10 bg-white/5 focus-within:border-white/30"
            : "border-zinc-200 bg-zinc-100 focus-within:border-zinc-400",
        )}
      >
        <label htmlFor="collections-search">
          <Search
            aria-hidden
            className={clsx(
              "ml-3 h-4 w-4 shrink-0 cursor-pointer",
              isDark ? "text-zinc-400" : "text-zinc-500",
            )}
          />
          <span className="sr-only">Search fragrances</span>
        </label>

        <input
          type="text"
          id="collections-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search fragrances..."
          autoComplete="off"
          className={clsx(
            "min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none",
            isDark
              ? "text-zinc-100 placeholder:text-zinc-500"
              : "text-zinc-900 placeholder:text-zinc-400",
          )}
        />

        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery("")}
            className={clsx(
              "cursor-pointer rounded-full p-1 transition-colors",
              isDark
                ? "text-zinc-400 hover:bg-white/10"
                : "text-zinc-500 hover:bg-zinc-200",
            )}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <CollectionsFilter value={filters} onChange={setFilters} />

      <button
        type="submit"
        className={clsx(
          "flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors md:w-40",
          isDark
            ? "bg-white text-zinc-900 hover:bg-zinc-200"
            : "bg-zinc-900 text-white hover:bg-zinc-700",
        )}
      >
        <Search aria-hidden className="h-4 w-4" />
        Search
      </button>
    </form>
  );
};
