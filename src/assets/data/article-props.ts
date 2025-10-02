export interface ArticleProps {
  image: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
}

export const articles: ArticleProps[] = [
  {
    image: "/images/react-app.png",
    title: "Building Scalable React Applications",
    description:
      "Learn how to structure and optimize React projects for long-term scalability.",
    likes: 15,
    comments: 3,
  },
  {
    image: "/images/node-api.png",
    title: "Mastering REST APIs with Node.js",
    description:
      "A deep dive into designing and implementing robust REST APIs using Node.js and Express.",
    likes: 28,
    comments: 10,
  },
  {
    image: "/images/ui-ux.png",
    title: "Top 10 UI/UX Design Principles",
    description:
      "Discover the essential principles of UI/UX design that improve usability and user satisfaction.",
    likes: 42,
    comments: 18,
  },
];
