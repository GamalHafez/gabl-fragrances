import { SOCIALS } from "@/constants/socialLinks";
import { ArrowUpRight } from "lucide-react";

const SocialLinks = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden rounded-[2.5rem] py-24"
    >
      <div className="from-brand-50 to-brand-100 absolute inset-0 -z-20 bg-linear-to-br via-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-brand-500/20 absolute top-1/2 left-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />

        <div className="bg-brand-600/20 absolute top-0 -left-44 h-105 w-105 rounded-full blur-[150px]" />

        <div className="bg-brand-500/20 absolute -right-40 bottom-0 h-105 w-105 rounded-full blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-brand-500 text-sm font-semibold tracking-[0.35em] uppercase">
            Stay Connected
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Follow Our Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Discover exclusive launches, behind-the-scenes moments, fragrance
            tips, and special offers by joining our growing community.
          </p>
        </div>

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
