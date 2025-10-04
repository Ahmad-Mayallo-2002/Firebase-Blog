import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { blogs } from "../../assets/data/article-cards";
import ArticleCard from "../custom/articleCard";

export default function LatestArticles() {
  return (
    <>
      <Heading mb={4} fontSize="2xl">
        Latest Articles
      </Heading>
      <SimpleGrid gap={4} columns={{ base: 1, lg: 2 }}>
        {blogs.map((b, i) => (
          <GridItem key={i}>
            <ArticleCard
              image={b.image}
              title={b.title}
              description={b.description}
              category={b.category}
              author={b.author}
              createdAt={b.createdAt}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}
