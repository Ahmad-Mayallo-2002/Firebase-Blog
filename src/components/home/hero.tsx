import { Box, Container, Heading, Icon, Link, Text } from "@chakra-ui/react";
import hero from "../../assets/images/hero-bg.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <Box as="section" className="hero center-y" bgImage={`url(${hero})`}>
        <Container>
          <Heading
            mt={6}
            color="#fff"
            textAlign="center"
            fontSize={34}
            lineHeight={1.5}
          >
            The Future of Web Development:{" "}
            <Text as="span" display="block">
              Trends to Watch in 2025
            </Text>
          </Heading>
          <Text
            textAlign="center"
            maxW={800}
            mx="auto"
            my={4}
            color="#fff"
            fontSize={18}
            lineHeight={2}
          >
            Discover the latest innovations and emerging technologies that will
            shape the web development landscape in the coming year. From AI
            integration to new frameworks.
          </Text>
          <Link
            href="/posts"
            p="8px 16px"
            className="center-y main-button"
            mx="auto"
            w="fit"
          >
            Read Full Article
            <Icon ms={2}>
              <FaArrowRight />
            </Icon>
          </Link>
        </Container>
      </Box>
    </>
  );
}
