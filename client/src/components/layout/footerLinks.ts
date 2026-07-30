export const footerLinks = [
  {
    id: 1,
    title: "Explore",
    links: [
      { id: 1, label: "Home", href: "/", scrollToTop: true },
      { id: 2, label: "Shop all", href: "/collections", scrollToTop: true },
      { id: 3, label: "Men", href: "/collections/men", scrollToTop: true },
      { id: 4, label: "Women", href: "/collections/women", scrollToTop: true },
      {
        id: 5,
        label: "Best sellers",
        href: "/#best-sellers",
        scrollToTop: false,
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      { id: 1, label: "About us", href: "/about-us", scrollToTop: true },
      { id: 2, label: "Contact", href: "/contact", scrollToTop: true },
      { id: 3, label: "FAQ", href: "/#faq", scrollToTop: false },
      {
        id: 4,
        label: "Privacy policy",
        href: "/privacy-policy",
        scrollToTop: true,
      },
    ],
  },
] as const;
