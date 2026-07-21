import { SOCIALS } from "@/constants/socialLinks";
import { ArrowUpRight } from "lucide-react";
import SocialLinksBackground from "./SocialLinksBackground";
import SocialLinksHeader from "./SocialLinksHeader";

const SocialLinks = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden rounded-[2.5rem] py-24"
    >
      <SocialLinksBackground />

      <div className="mx-auto max-w-6xl px-6">
        <SocialLinksHeader />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className="group hover:border-brand-500/40 rounded-3xl border border-white/30 bg-white/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-700 dark:bg-zinc-900/60"
              >
                <div className="bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold">{social.name}</h3>

                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {social.username}
                </p>

                <div className="text-brand-500 mt-8 flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase">
                  Follow
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
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
