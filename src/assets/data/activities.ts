import type { IconType } from "react-icons";
import { FaComment, FaHeart, FaPenAlt } from "react-icons/fa";

interface Activity {
  icon: IconType;
  bg: string;
  color: string;
  text: string;
  time: string;
}

export const activities: Activity[] = [
  {
    icon: FaPenAlt,
    bg: "blue.200",
    color: "blue.600",
    text: `Published "Building Scalable React Applications"`,
    time: "2 days ago",
  },
  {
    icon: FaHeart,
    bg: "green.200",
    color: "green.600",
    text: "Received 15 likes on latest article",
    time: "3 days ago",
  },
  {
    icon: FaComment,
    bg: "purple.200",
    color: "purple.600",
    text: "Replied to 3 comments",
    time: "5 days ago",
  },
];
