import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import mission from "../../assets/images/mission.jpg";

export default function Mission() {
  return (
    <>
      <Box className="our-mission" py="16" as="section">
        <Container>
          <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
            <GridItem>
              <Heading
                textAlign={{ base: "center", md: "start" }}
                mb={4}
                fontSize="3xl"
                color="blue.500"
              >
                Our Mission
              </Heading>
              <Text
                textAlign={{ base: "center", md: "start" }}
                mb={6}
                lineHeight={1.7}
                color="gray.400"
              >
                At BlogSpace, we believe that knowledge should be accessible,
                actionable, and inspiring. Our mission is to bridge the gap
                between complex technical concepts and practical implementation,
                making cutting-edge insights available to everyone.
              </Text>

              <Text
                textAlign={{ base: "center", md: "start" }}
                lineHeight={1.7}
                color="gray.400"
              >
                We curate and create content that not only informs but empowers
                our readers to make better decisions, adopt new technologies,
                and advance their careers in the digital landscape.
              </Text>

              <Flex
                className="goals"
                mt={6}
                justifyContent="space-between"
                textAlign="center"
              >
                <div>
                  <Heading as="h4" color="blue.500" fontSize="2xl" mb={1}>
                    500K+
                  </Heading>
                  <Text color="gray.400">Monthly Readers</Text>
                </div>
                <div>
                  <Heading as="h4" color="blue.500" mb={1} fontSize="2xl">
                    1200+
                  </Heading>
                  <Text color="gray.400">Articles Published</Text>
                </div>
                <div>
                  <Heading as="h4" color="blue.500" mb={1} fontSize="2xl">
                    50+
                  </Heading>
                  <Text color="gray.400">Export Contributors</Text>
                </div>
              </Flex>
            </GridItem>
            <GridItem>
              <Image
                shadow="md"
                src={mission}
                borderRadius="xl"
                w={{ base: "100%", md: "80%" }}
                h="100%"
                ms={{ base: "0", md: "auto" }}
              />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
