import { SOCIALS } from "@/constants/socialLinks";
import SocialLinksBackground from "./SocialLinksBackground";
import { SectionHeader } from "@/components/ui/home/SectionHeader";
import { SocialLinkCard } from "./SocialLinkCard";

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
          {SOCIALS.map((social) => (
            <SocialLinkCard key={social.href} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
