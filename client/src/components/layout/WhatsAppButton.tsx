import { SOCIALS } from "@/data/socialLinks";
import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const { isDark } = useTheme();

  const whatsapp = SOCIALS.find((social) => social.name === "WhatsApp");
  if (!whatsapp) return null;
  const { href, username } = whatsapp;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={clsx(
        "fixed right-5 bottom-25 z-50 flex items-center gap-2 rounded-full px-5 py-3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:ring-4 focus:ring-[#25D366]/30 focus:outline-none focus-visible:ring-green-400 focus-visible:ring-offset-2 md:bottom-5",
        isDark ? "bg-green-900 text-zinc-100" : "bg-green-700 text-zinc-100",
      )}
    >
      <FaWhatsapp className="h-7 w-7" />

      <p className="hidden text-sm font-medium sm:block">{username}</p>
    </a>
  );
};
