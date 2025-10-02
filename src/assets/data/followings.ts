import follow1 from "../images/follow-1.jpg";
import follow2 from "../images/follow-2.jpg";

interface Followings {
  img: string;
  name: string;
  job: string;
}

export const followings: Followings[] = [
  {
    img: follow1,
    name: "Sarah Johnson",
    job: "Front End",
  },
  {
    img: follow2,
    name: "Mike Chen",
    job: "Back End",
  },
];
