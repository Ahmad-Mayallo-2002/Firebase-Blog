import { Box, For, Heading, HStack, Icon, List, Text } from "@chakra-ui/react";
import { FaFolder } from "react-icons/fa";

export default function Categories() {
  const { Root, Item } = List;
  return (
    <Box
      className="popular-tags"
      my={4}
      bgColor="#fff"
      rounded="xl"
      shadow="lg"
      p={5}
    >
      <Heading mb={4}>
        <Icon color="blue.600" me={3}>
          <FaFolder />
        </Icon>
        Categories
      </Heading>
      <Root>
        <For
          each={[
            "Web Development",
            "Mobile Application",
            "AI & ML",
            "Big Data",
            "Desktop Application",
            "Apple",
          ]}
        >
          {(v, i) => (
            <Item mb={3} key={i}>
              <HStack w="full" justify="space-between">
                <Text>{v}</Text>
                <Text bgColor="gray.100" color="gray.500" px={2} rounded="full">
                  {(i + 1) * 10}
                </Text>
              </HStack>
            </Item>
          )}
        </For>
      </Root>
    </Box>
  );
}
