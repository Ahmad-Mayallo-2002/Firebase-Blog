import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function Skills() {
  return (
    <Box bgColor="#fff" p={6} rounded="xl" shadow="md" className="skills">
      <Heading mb={4}>My Skills</Heading>
      <Flex flexWrap="wrap" gap={3}>
        {[1, 2, 3, 4, 5, 6, 7].map((v) => (
          <Text
            key={v}
            rounded="full"
            bgColor="red.200"
            color="red.500"
            as="span"
            px={3}
          >
            Skill {v}
          </Text>
        ))}
      </Flex>
      <Button colorPalette="blue" variant="ghost" size="sm" mt={4}>
        <FaPlus /> Add Skill
      </Button>
    </Box>
  );
}
