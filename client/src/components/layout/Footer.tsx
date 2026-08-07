import { Link } from "react-router-dom";
import { SOCIALS } from "@/data/socialLinks";
import { useTheme } from "@/context/useTheme";
import clsx from "clsx";
import { footerLinks } from "./footerLinks";
import { scrollToTop } from "@/utils";

export const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={clsx(
        "border-t",
        isDark ? "border-brand-200 bg-zinc-950" : "border-zinc-200 bg-zinc-50",
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <h2
              className={clsx(
                "text-2xl font-bold",
                isDark ? "text-zinc-100" : "text-brand-500",
              )}
            >
              Gabal Fragrances
            </h2>

            <p
              className={clsx(
                "mt-2 max-w-sm leading-7 md:mt-4",
                isDark ? "text-zinc-400" : "text-zinc-600",
              )}
            >
              Premium fragrances crafted with passion to leave a lasting
              impression.
            </p>
          </div>

          <div className="flex justify-between pr-8 md:pr-0">
            {footerLinks.map((section) => (
              <div key={section.id}>
                <h3
                  className={clsx(
                    "mb-2 font-semibold md:mb-4",
                    isDark ? "text-zinc-200" : "text-zinc-600",
                  )}
                >
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link
                        to={link.href}
                        onClick={() => {
                          if (link.scrollToTop) scrollToTop();
                        }}
                        className={clsx(
                          "capitalize transition",
                          isDark
                            ? "text-zinc-400 hover:text-zinc-100"
                            : "hover:text-brand-500 text-zinc-600",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="md:pl-4 lg:pl-0">
            <h3
              className={clsx(
                "mb-4 font-semibold",
                isDark ? "text-zinc-200" : "text-zinc-600",
              )}
            >
              Follow Us
            </h3>

            <div className="flex gap-4 md:flex-col lg:flex-row">
              {SOCIALS.map(({ icon: Icon, href, name }) => (
                <a
                  key={href}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`Visit our ${name}`}
                  className={clsx(
                    "flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ease-in-out",
                    isDark
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-zinc-300 hover:bg-zinc-200",
                  )}
                >
                  <Icon
                    size={18}
                    className={clsx(
                      isDark ? "text-brand-100" : "text-zinc-900",
                    )}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          className={clsx(
            "border-t pt-6 text-sm md:flex-row",
            isDark
              ? "border-zinc-800 text-zinc-400"
              : "border-zinc-200 text-zinc-500",
          )}
        >
          © {new Date().getFullYear()} Gabal Fragrances. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
