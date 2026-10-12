import { ExternalLink, MapPin } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/context/theme/useTheme";

type LocationLinkProps = {
  url: string | null | undefined;
  label?: string;
  className?: string;
};

// Defense in depth: the schema already validates on write, but this is a
// clickable href, so only render real https links (never javascript: etc.).
const isSafeHttpsUrl = (value: string) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

export const LocationLink = ({
  url,
  label = "Open in Google Maps",
  className,
}: LocationLinkProps) => {
  const { isDark } = useTheme();

  if (!url || !isSafeHttpsUrl(url)) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "mt-2 inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
        "focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:outline-none",
        isDark
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
        className,
      )}
    >
      <MapPin aria-hidden className="h-3.5 w-3.5" />
      {label}
      <ExternalLink aria-hidden className="h-3 w-3 opacity-70" />
    </a>
  );
};