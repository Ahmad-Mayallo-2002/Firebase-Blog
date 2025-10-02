import { Heading, HStack, Link, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ArticleBox from "../custom/articleBox";
import { articles } from "../../assets/data/article-props";
import asd from "../../assets/images/blog-1.jpg";

export default function Articles() {
  return (
    <>
      <HStack mb={6} justify="space-between">
        <Heading>Published Articles</Heading>
        <Link
          href="/new-article"
          p=".5rem 1rem"
          className="center-y main-button"
        >
          <FaPlus /> New Article
        </Link>
      </HStack>

      <VStack gap={4}>
        {articles.map((a) => (
          <ArticleBox
            image={asd}
            title={a.title}
            description={a.description}
            likes={a.likes}
            comments={a.comments}
          />
        ))}
      </VStack>
    </>
  );
}
