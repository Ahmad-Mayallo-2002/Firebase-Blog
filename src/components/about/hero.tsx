import { Box, Container, Heading, Text } from "@chakra-ui/react";
import hero from "../../assets/images/hero-about.png";

export default function Hero() {
  return (
    <>
      <Box className="hero center-y" bgImage={`url(${hero})`}>
        <Container textAlign="center" color="#fff">
          <Heading as="h2" fontSize={40} mb={6}>
            About BlogSpace
          </Heading>
          <Text maxW={600} mx="auto" lineHeight={2}>
            We're passionate about sharing knowledge and insights that help
            professionals stay ahead in the rapidly evolving world of technology
            and digital innovation.
          </Text>
        </Container>
      </Box>
    </>
  );
}
