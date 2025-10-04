import { Box, Container, For, GridItem, SimpleGrid } from "@chakra-ui/react";
import { blogs } from "../../assets/data/article-cards";
import ArticleCard from "../custom/articleCard";

export default function AllPosts() {
  return (
    <>
      <Box as="section" className="all-posts" py={16}>
        <Container>
          <SimpleGrid gap={4} columns={{ base: 1, lg: 3 }}>
            <For each={blogs}>
              {(b, i) => (
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
              )}
            </For>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
