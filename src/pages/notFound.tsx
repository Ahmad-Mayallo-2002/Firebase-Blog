import { Box, Center, Heading, Link } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading fontSize="5xl">404 Page not found</Heading>
        <Link
          color="blue.500"
          mt={8}
          _hover={{ textDecoration: "underline" }}
          href="/"
        >
          Go to home page
        </Link>
      </Box>
    </Center>
  );
}
