import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

interface Link {
  icon: IconType;
  href: string;
  iconColor: string;
  title: string;
}

export const links: Link[] = [
  {
    icon: FaTwitter,
    title: "Twitter",
    href: "http://twitter.com",
    iconColor: "#60a5fa",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "http://linkedin.com",
    iconColor: "#2563eb",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    href: "http://github.com",
    iconColor: "#1f2937",
  },
  {
    icon: FaYoutube,
    title: "YouTube",
    href: "http://youtube.com",
    iconColor: "#dc2626",
  },
];
