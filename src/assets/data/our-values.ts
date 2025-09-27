import type { IconType } from "react-icons";
import { FaLightbulb, FaStar, FaUsers } from "react-icons/fa";

interface Value {
  icon: IconType;
  title: string;
  description: string;
  iconColor: string;
  bgIconColor: string;
}

export const values: Value[] = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We stay at the forefront of technology trends and share the latest innovations with our community.",
    iconColor: "blue.500",
    bgIconColor: "blue.100",
  },
  {
    icon: FaUsers,
    title: "Community",
    description:
      "We foster a supportive environment where professionals can learn, share, and grow together.",
    iconColor: "green.500",
    bgIconColor: "green.100",
  },
  {
    icon: FaStar,
    title: "Excellence",
    description:
      "We maintain the highest standards in content quality, accuracy, and editorial integrity.",
    iconColor: "purple.500",
    bgIconColor: "purple.100",
  },
];
