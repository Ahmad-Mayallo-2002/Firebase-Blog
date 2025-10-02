import {
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function ProfileCounts() {
  return (
    <>
      <Container transform="translateY(-20px)">
        <SimpleGrid textAlign="center" columns={{ base: 2, lg: 4 }} gap={4}>
          <GridItem bgColor="#fff" p={4} rounded="xl" shadow="md">
            <Heading color="blue.500" fontSize="2xl">
              15
            </Heading>
            <Text color="gray.400">Articles Published</Text>
          </GridItem>

          <GridItem bgColor="#fff" p={4} rounded="xl" shadow="md">
            <Heading color="green.500" fontSize="2xl">
              15
            </Heading>
            <Text color="gray.400">Total Views</Text>
          </GridItem>

          <GridItem bgColor="#fff" p={4} rounded="xl" shadow="md">
            <Heading color="purple.500" fontSize="2xl">
              15
            </Heading>
            <Text color="gray.400">Followers</Text>
          </GridItem>

          <GridItem bgColor="#fff" p={4} rounded="xl" shadow="md">
            <Heading color="orange.500" fontSize="2xl">
              15
            </Heading>
            <Text color="gray.400">Following</Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}
