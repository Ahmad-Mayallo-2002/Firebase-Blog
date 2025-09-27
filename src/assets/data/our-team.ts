import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";

interface Team {
  image: string;
  name: string;
  jobTitle: string;
  desctiption: string;
}

export const team: Team[] = [
  {
    image: team1,
    name: "Sarah Johnson",
    jobTitle: "Editor-in-Chief",
    desctiption: "10+ years in tech journalism and content strategy",
  },
  {
    image: team2,
    name: "Mike Chen",
    jobTitle: "Senior Developer",
    desctiption: "Full-stack developer and AI enthusiast",
  },
  {
    image: team3,
    name: "Emma Davis",
    jobTitle: "UX Designer",
    desctiption: "Design systems and user experience specialist",
  },
  {
    image: team4,
    name: "Alex Rodriguez",
    jobTitle: "Security Expert",
    desctiption: "Cybersecurity consultant and ethical hacker",
  },
];
