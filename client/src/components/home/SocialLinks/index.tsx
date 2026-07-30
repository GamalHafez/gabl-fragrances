import { SOCIALS } from "@/constants/socialLinks";
import { ArrowUpRight } from "lucide-react";
import SocialLinksBackground from "./SocialLinksBackground";
import { SectionHeader } from "@/components/ui/home/SectionHeader";

const socialLinksHeader = {
  eyebrow: "Stay Connected",
  title: "Follow Our Journey",
  description:
    "Discover exclusive launches, behind-the-scenes moments, fragrance tips, and special offers by joining our growing community.",
};

const SocialLinks = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden rounded-[2.5rem] py-24"
    >
      <SocialLinksBackground />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader content={socialLinksHeader} />

        <div className="mt-10 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:border-brand-500/40 flex items-center gap-4 rounded-2xl border border-white/30 bg-white/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:block md:rounded-3xl md:p-8 dark:border-zinc-700 dark:bg-zinc-900/60"
              >
                <div className="bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white md:mb-8 md:h-16 md:w-16 md:rounded-2xl">
                  <Icon size={24} className="md:h-7.5 md:w-7.5" />
                </div>

                <div className="flex-1 md:block">
                  <h3 className="text-lg font-semibold md:text-xl">
                    {social.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500 md:mt-2 dark:text-zinc-400">
                    {social.username}
                  </p>

                  <div className="text-brand-500 mt-3 hidden items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase md:mt-8 md:flex">
                    Follow
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
