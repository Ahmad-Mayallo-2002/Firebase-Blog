import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Social {
  icon: IconType;
  href: string;
}

export const social: Social[] = [
  {
    icon: FaXTwitter,
    href: "http://twitter.com",
  },
  {
    icon: FaInstagram,
    href: "http://instagram.com",
  },
  {
    icon: FaLinkedin,
    href: "http://linkedin.com",
  },
  {
    icon: FaFacebook,
    href: "http://facebook.com",
  },
];

interface Link {
  name: string;
  href: string;
}

interface FooterLink {
  heading: string;
  links: Link[];
}

export const footerLinks: FooterLink[] = [
  {
    heading: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Write for Us", href: "/write-for-us" },
      { name: "Advertise", href: "/advertise" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    heading: "Categories",
    links: [
      { name: "Web Development", href: "/categories/web-development" },
      { name: "AI & Tech", href: "/categories/ai-tech" },
      { name: "Design", href: "/categories/design" },
      { name: "Security", href: "/categories/security" },
      { name: "Marketing", href: "/categories/marketing" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR", href: "/gdpr" },
    ],
  },
];
