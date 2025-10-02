import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

export default function ProfileHero() {
  return (
    <Box
      as="section"
      py={8}
      bgColor="blue.100"
      minH={300}
      className="flex-center"
    >
      <Container pos="relative">
        <Box bg="#fff" p={6} rounded="xl" shadow="md">
          <Grid
            gridTemplateColumns={{ base: "1fr", lg: "auto 1fr auto" }}
            gap={4}
          >
            <GridItem>
              <Image
                w={125}
                h={125}
                rounded="full"
                bgColor={"red"}
                alt="user"
                mx={{ base: "auto", lg: "0" }}
              />
            </GridItem>
            <GridItem textAlign={{ base: "center", lg: "start" }}>
              <Heading fontSize="2xl">Username</Heading>
              <Text my={1} color="blue.500">
                Job Title
              </Text>
              <Text color="gray.400" lineHeight={1.7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptate accusantium voluptatum fugit explicabo eligendi beatae
                ex, distinctio in dolore, fugiat quos eum similique?
                Perspiciatis.
              </Text>
            </GridItem>
            <GridItem className="center-y">
              <Button mx={{ base: "auto", lg: "0" }} colorPalette="blue">
                <FaEdit /> Edit Profile
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
