import { Box, Container, Heading, Text } from "@chakra-ui/react";
import contact from "../../assets/images/hero-contact.jpg";

export default function Hero() {
  return (
    <>
      <Box as="section" className="hero center-y" bgImage={`url(${contact})`}>
        <Container textAlign="center">
          <Heading mb={5} color="#fff" fontSize="5xl">
            GetIn Touch
          </Heading>
          <Text color="#fff" maxW={550} mx="auto" lineHeight={2}>
            Have a question, suggestion, or want to contribute? We'd love to
            hear from you. Reach out and let's start a conversation.
          </Text>
        </Container>
      </Box>
    </>
  );
}
