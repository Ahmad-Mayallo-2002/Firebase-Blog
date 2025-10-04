import {
  Box,
  Flex,
  For,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";
import { blogs } from "../../assets/data/article-cards";

export default function PopularPosts() {
  return (
    <Box className="popular-tags" bgColor="#fff" rounded="xl" shadow="lg" p={5}>
      <Heading mb={4}>
        <Icon me={3} color="orange.500">
          <FaFire />
        </Icon>
        Popular Posts
      </Heading>
      <For each={blogs}>
        {(v, i) => (
          <Box mb={3} key={i}>
            <Flex gapX={2}>
              <Image src={v.image} alt={v.title} w="75px" rounded="xl" />
              <Box>
                <Heading as="h6" fontSize="sm" lineHeight={1}>
                  {v.title}
                </Heading>
                <Text as="small" display="block" color="gray.400">
                  {v.createdAt.toLocaleDateString()}
                </Text>
                <Link
                  href="/posts"
                  color="blue.500"
                  fontSize="sm"
                  _hover={{ textDecor: "underline" }}
                >
                  Read Post
                </Link>
              </Box>
            </Flex>
          </Box>
        )}
      </For>
    </Box>
  );
}
