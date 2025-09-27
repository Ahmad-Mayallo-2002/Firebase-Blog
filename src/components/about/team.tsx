import {
  Box,
  Container,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { team } from "../../assets/data/our-team";

export default function Team() {
  return (
    <>
      <Box as="section" className="our-team" bgColor="gray.50" py="16">
        <Container>
          <Heading className="special-heading">Meet Our Team</Heading>
          <Text>
            Our diverse team of writers, developers, and industry experts brings
            years of experience and passion for sharing knowledge.
          </Text>

          <SimpleGrid mt={8} gap={4} columns={{ base: 1, md: 2, lg: 4 }}>
            {team.map((t, i) => (
              <GridItem key={i} p={4} borderRadius="xl" shadow="lg">
                <Image mx="auto" src={t.image} borderRadius="full" w="100px" />
                <Heading textAlign="center" mt={4} fontSize={23}>
                  {t.name}
                </Heading>
                <Text
                  my={2}
                  textAlign="center"
                  color="blue.500"
                  fontWeight={500}
                  fontSize={16}
                >
                  {t.jobTitle}
                </Text>
                <Text textAlign="center" color="gray.400">
                  {t.desctiption}
                </Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
