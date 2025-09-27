import {
  Box,
  Container,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { values } from "../../assets/data/our-values";

export default function Values() {
  return (
    <>
      <Box as="section" className="our-values" py={16}>
        <Container>
          <Heading className="special-heading">Our Values</Heading>
          <Text as="p">
            These core principles guide everything we do and help us deliver
            exceptional content to our community.
          </Text>
          <SimpleGrid gap={4} mt={8} columns={{ base: 1, md: 2, lg: 3 }}>
            {values.map((v, i) => (
              <GridItem key={i} textAlign="center">
                <Icon
                  mx="auto"
                  p={3}
                  fontSize={64}
                  rounded="full"
                  color={v.iconColor}
                  bgColor={v.bgIconColor}
                >
                  <v.icon />
                </Icon>
                <Heading my={3}>{v.title}</Heading>
                <Text color="gray.400" lineHeight={1.7}>
                  {v.description}
                </Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
