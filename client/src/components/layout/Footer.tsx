import { Link } from "react-router-dom";
import { SOCIALS } from "@/constants/socialLinks";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-brand-500 text-2xl font-bold">
              Gabal Fragrances
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Premium fragrances crafted with passion to leave a lasting
              impression.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Shop</h3>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>
                <Link className="hover:text-brand-500 transition" to="/">
                  Men
                </Link>
              </li>

              <li>
                <Link className="hover:text-brand-500 transition" to="/">
                  Women
                </Link>
              </li>

              <li>
                <Link className="hover:text-brand-500 transition" to="/">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>

            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#" className="hover:text-brand-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-brand-500 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-brand-500 transition">
                  FAQ
                </a>
              </li>

              <li>
                <Link className="hover:text-brand-500 transition" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              {SOCIALS.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="hover:bg-brand-500 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 transition hover:text-white dark:border-zinc-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} Gabal Fragrances. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link className="hover:text-brand-500 transition" to="/">
              Terms
            </Link>

            <Link className="hover:text-brand-500 transition" to="/">
              Privacy
            </Link>

            <Link className="hover:text-brand-500 transition" to="/">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
