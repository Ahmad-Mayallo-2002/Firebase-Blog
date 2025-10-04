import { Box, Container, Heading, Text } from "@chakra-ui/react";
import hero from "../../assets/images/blog-1.jpg";

export default function Hero() {
  return (
    <>
      <Box as="section" bgImage={`url(${hero})`} className="hero center-y">
        <Container textAlign="center" color="#fff">
          <Heading fontSize="4xl" mb={4}>
            Explore Our Posts
          </Heading>
          <Text maxW="550px" mx="auto">
            Discover articles organized by topics that matter to you. From
            cutting-edge technology to creative design insights.
          </Text>
        </Container>
      </Box>
    </>
  );
}
