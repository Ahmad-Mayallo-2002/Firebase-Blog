export interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: Date;
}
