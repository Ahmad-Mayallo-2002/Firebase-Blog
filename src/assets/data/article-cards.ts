import type { ArticleCardProps } from "../interface/article-card";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import blog4 from "../../assets/images/blog-4.jpg";
import blog5 from "../../assets/images/blog-5.jpg";
import blog6 from "../../assets/images/blog-6.jpg";
import author from "../../assets/images/follow-1.jpg";

export const blogs: ArticleCardProps[] = [
  {
    image: blog1,
    title: "Mastering React Hooks",
    description:
      "Learn how to simplify your state and side-effect management with React Hooks.",
    category: "React",
    author: {
      name: "John Doe",
      avatar: author,
    },
    createdAt: new Date("2025-09-01"),
  },
  {
    image: blog2,
    title: "A Guide to TypeScript for Beginners",
    description:
      "Step into the world of TypeScript and write safer, more maintainable JavaScript.",
    category: "TypeScript",
    author: {
      name: "Sarah Ahmed",
      avatar: author,
    },
    createdAt: new Date("2025-09-05"),
  },
  {
    image: blog3,
    title: "Building Scalable Node.js APIs",
    description:
      "Explore patterns and best practices to design scalable backend services.",
    category: "Node.js",
    author: {
      name: "Ali Khan",
      avatar: author,
    },
    createdAt: new Date("2025-09-10"),
  },
  {
    image: blog4,
    title: "Getting Started with Firebase",
    description:
      "A beginner-friendly introduction to Firebase authentication and Firestore database.",
    category: "Firebase",
    author: {
      name: "Maria Lopez",
      avatar: author,
    },
    createdAt: new Date("2025-09-14"),
  },
  {
    image: blog5,
    title: "Tailwind CSS: Utility-First Styling",
    description:
      "Discover how to style your apps quickly and consistently with Tailwind CSS.",
    category: "CSS",
    author: {
      name: "James Carter",
      avatar: author,
    },
    createdAt: new Date("2025-09-20"),
  },
  {
    image: blog6,
    title: "Event-Driven Architecture in Microservices",
    description:
      "Learn how to design resilient and scalable systems using event-driven patterns.",
    category: "Architecture",
    author: {
      name: "Emily Zhang",
      avatar: author,
    },
    createdAt: new Date("2025-09-28"),
  },
];
