import type { IconType } from "react-icons";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

interface Info {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
  bgIconColor: string;
}

export const info: Info[] = [
  {
    icon: MdMail,
    title: "Email",
    description: "hello@gmail.com",
    iconColor: "blue.500",
    bgIconColor: "blue.100",
  },
  {
    icon: FaPhone,
    title: "Phone",
    description: "+1 (555) 123-4567",
    iconColor: "green.500",
    bgIconColor: "green.100",
  },
  {
    icon: FaLocationDot,
    title: "Address",
    description: "123 Tech Street, San Francisco, CA 94105",
    iconColor: "purple.500",
    bgIconColor: "purple.100",
  },
];
