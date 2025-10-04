import { Box, Flex, For, Heading, Icon, Text } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

export default function PopularTags() {
  return (
    <Box className="popular-tags" bgColor="#fff" rounded="xl" shadow="lg" p={5}>
      <Heading mb={4}>
        <Icon color="green.600" me={3}>
          <FaLeaf />
        </Icon>
        Popular Tags
      </Heading>
      <Flex gap={2} flexWrap="wrap">
        <For each={["React JS", "HTML", "CSS", "JS", "TS", "C#", "JAVA"]}>
          {(v, i) => (
            <Text
              bgColor="gray.100"
              px={2}
              rounded="full"
              _hover={{
                bgColor: "blue.100",
                color: "blue.500",
              }}
              transitionDuration="300ms"
              key={i}
            >
              {v}
            </Text>
          )}
        </For>
      </Flex>
    </Box>
  );
}
