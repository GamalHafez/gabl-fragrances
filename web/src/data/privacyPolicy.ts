export type LegalListData = {
  title: string;
  content: string;
};

export type PrivacySection = {
  title: string;
  paragraphs: string[];
  list?: LegalListData[];
  email?: string;
};

export const privacySections: PrivacySection[] = [
  {
    title: "",
    paragraphs: [
      "GABAL FRAGRANCES operates this website and all related information, content, features, tools, products, and services to provide customers with a secure and enjoyable shopping experience.",
      "This Privacy Policy explains how we collect, use, store, and disclose your personal information when you visit our website, create an account, make a purchase, or otherwise interact with our services.",
      "By using our website, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },

  {
    title: "Personal Information We Collect",
    paragraphs: [
      "Depending on how you interact with our website, we may collect the following categories of personal information:",
    ],
    list: [
      {
        title: "Contact Details",
        content:
          "Your name, email address, phone number, billing address, and shipping address.",
      },
      {
        title: "Payment Information",
        content:
          "Payment details necessary to process your purchases securely through our payment providers.",
      },
      {
        title: "Account Information",
        content: "Your username, password, account preferences, and settings.",
      },
      {
        title: "Transaction Information",
        content:
          "Products you view, add to your cart or wishlist, purchase, return, exchange, or cancel, along with your order history.",
      },
      {
        title: "Communications",
        content:
          "Information you provide when contacting our customer support team.",
      },
      {
        title: "Device Information",
        content:
          "Your browser type, IP address, device type, operating system, and network information.",
      },
      {
        title: "Usage Information",
        content:
          "Information about how you browse and interact with our website and services.",
      },
    ],
  },

  {
    title: "Sources of Personal Information",
    paragraphs: [
      "We may collect personal information from the following sources:",
    ],
    list: [
      {
        title: "Directly From You",
        content:
          "When you create an account, place an order, contact us, or otherwise provide information through our website.",
      },
      {
        title: "Automatically",
        content:
          "Through cookies, analytics, and similar technologies while you browse or use our website.",
      },
      {
        title: "Service Providers",
        content:
          "From trusted third-party providers that help us operate and improve our services.",
      },
      {
        title: "Business Partners",
        content:
          "From business partners or other third parties where permitted by applicable law.",
      },
    ],
  },

  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use your personal information for the following purposes:",
    ],
    list: [
      {
        title: "Provide Our Services",
        content:
          "Deliver products, improve our website, and personalize your shopping experience.",
      },
      {
        title: "Process Orders",
        content:
          "Handle payments, shipping, returns, exchanges, and order fulfillment.",
      },
      {
        title: "Manage Your Account",
        content:
          "Maintain your account, remember your preferences, and keep your information up to date.",
      },
      {
        title: "Customer Support",
        content:
          "Respond to your questions and provide assistance when needed.",
      },
      {
        title: "Service Notifications",
        content: "Send important updates regarding your account or orders.",
      },
      {
        title: "Marketing",
        content:
          "Send promotional offers and marketing communications when you have chosen to receive them.",
      },
      {
        title: "Security",
        content:
          "Protect our website against fraud, unauthorized access, and other malicious activity.",
      },
      {
        title: "Legal Compliance",
        content:
          "Meet legal obligations and enforce our policies and terms of service.",
      },
    ],
  },

  {
    title: "How We Share Your Information",
    paragraphs: [
      "We may share your personal information only when necessary to operate our business.",
    ],
    list: [
      {
        title: "Service Providers",
        content:
          "Trusted providers such as payment processors, shipping companies, cloud hosting providers, analytics providers, and customer support tools.",
      },
      {
        title: "Marketing Partners",
        content:
          "Partners that help us deliver marketing services where permitted by applicable law.",
      },
      {
        title: "With Your Permission",
        content:
          "When you request or authorize us to share your information with a third party.",
      },
      {
        title: "Legal Requirements",
        content:
          "When disclosure is required by law, regulation, or legal process.",
      },
      {
        title: "Business Transfers",
        content:
          "As part of a merger, acquisition, sale of assets, or similar business transaction.",
      },
    ],
  },

  {
    title: "Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of those external websites. We encourage you to review their privacy policies before providing any personal information.",
    ],
  },

  {
    title: "Children's Privacy",
    paragraphs: [
      "Our services are not intended for children. We do not knowingly collect personal information from children. If you believe that a child has provided us with their personal information, please contact us so we can remove it.",
    ],
  },

  {
    title: "Security and Data Retention",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect your personal information. However, no method of transmitting or storing data is completely secure.",
      "We retain personal information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },

  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your location and applicable laws, you may have the following rights:",
    ],
    list: [
      {
        title: "Right to Access",
        content:
          "Request access to the personal information we hold about you.",
      },
      {
        title: "Right to Correct",
        content:
          "Request correction of inaccurate or incomplete personal information.",
      },
      {
        title: "Right to Delete",
        content:
          "Request deletion of your personal information where permitted by law.",
      },
      {
        title: "Right to Data Portability",
        content:
          "Request a copy of your personal information in a portable format.",
      },
      {
        title: "Marketing Preferences",
        content:
          "Withdraw your consent to receive marketing communications at any time.",
      },
    ],
  },

  {
    title: "Complaints",
    paragraphs: [
      "If you have concerns about how we handle your personal information, please contact us first. Where applicable, you may also have the right to lodge a complaint with your local data protection authority.",
    ],
  },

  {
    title: "International Data Transfers",
    paragraphs: [
      "Your personal information may be stored or processed in countries outside your place of residence. When required, we apply appropriate safeguards to protect your information during international transfers.",
    ],
  },

  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page together with the revised effective date.",
    ],
  },

  {
    title: "Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, our privacy practices, or would like to exercise your privacy rights, please contact us by email or through the contact information provided on our website.",
    ],
    email: "dawaabdulrahman4@gmail.com",
  },
];
