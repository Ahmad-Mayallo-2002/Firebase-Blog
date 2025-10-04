import {
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import type { ArticleCardProps } from "../../assets/interface/article-card";

export default function ArticleCard({
  author: { avatar, name },
  category,
  createdAt,
  description,
  image,
  title,
}: ArticleCardProps) {
  const { Body, Description, Footer, Header, Root, Title } = Card;
  return (
    <>
      <Root
        shadow="md"
        _hover={{ shadow: "lg" }}
        transitionDuration="300ms"
        rounded="xl"
      >
        <Header p={0} pos="relative">
          <Image src={image} alt={title} h="225px" roundedTop="xl" />
          <Text
            as="span"
            pos="absolute"
            top={2}
            left={2}
            p=".125rem 1.25rem"
            rounded="full"
            color="#fff"
            bgColor="red.500"
          >
            {category}
          </Text>
        </Header>

        <Body p={4}>
          <Title mb={1}>{title}</Title>
          <Description color="gray.500">{description}</Description>
        </Body>

        <Footer roundedBottom="xl" p={4} pt={3}>
          <HStack w="full" justify="space-between">
            <Flex>
              <Box className="center-y" gapX={3}>
                <Image src={avatar} w="50px" h="50px" rounded="full" />
                <Box>
                  <Heading fontSize="lg" mb={-1} as="h6">
                    {name}
                  </Heading>
                  <Text as="small" color="gray.400">
                    {createdAt.toLocaleDateString()}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Link
              _hover={{ textDecor: "underline" }}
              color="blue.500"
              href="/categories/1"
            >
              Read Post
            </Link>
          </HStack>
        </Footer>
      </Root>
    </>
  );
}
