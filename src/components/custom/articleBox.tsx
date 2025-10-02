import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaComment, FaEdit, FaHeart, FaTrash } from "react-icons/fa";
import type { ArticleProps } from "../../assets/data/article-props";

export default function ArticleBox({
  image,
  title,
  description,
  likes = 0,
  comments = 0,
}: ArticleProps) {
  return (
    <>
      <Box
        className="article-box"
        p={6}
        bgColor="#fff"
        shadow="md"
        rounded="xl"
      >
        <Flex gap={3}>
          <Image src={image} alt={title} w="100px" rounded="lg" />
          <Box>
            <Heading mb={2} fontSize="lg">
              {title}
            </Heading>
            <Text color="gray.400">{description}</Text>
            <HStack justifyContent="space-between">
              <Flex gap={4} mt={2}>
                <Text className="center-y" gap={1} color="gray.400">
                  <FaHeart />
                  {likes}
                </Text>
                <Text className="center-y" gap={1} color="gray.400">
                  <FaComment />
                  {comments}
                </Text>
              </Flex>
              <ButtonGroup attached size="xs" gap={0}>
                <Button colorPalette="blue">
                  <FaEdit />
                </Button>
                <Button colorPalette="red">
                  <FaTrash />
                </Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
