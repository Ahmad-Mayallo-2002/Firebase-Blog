import { Box, Container, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import {
  FaGoogle,
  FaFacebook,
  FaMicrosoft,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const companies = [
  { icon: FaGoogle, title: "Google", color: "#DB4437" }, // Google red
  { icon: FaFacebook, title: "Meta", color: "#1877F2" }, // Meta blue
  { icon: FaMicrosoft, title: "Microsoft", color: "#F25022" }, // Microsoft orange
  { icon: FaTwitter, title: "Twitter", color: "#1DA1F2" }, // Twitter blue
  { icon: FaGithub, title: "GitHub", color: "#181717" }, // GitHub black
];

export default function RightPlace() {
  return (
    <Box as="section" py={16} className="right-place">
      <Container>
        <Heading textAlign="center" fontSize="3xl">
          You Are In Right Place
        </Heading>
        <Text textAlign="center" my={4} color="gray.400">
          Some of the best teams are already transforming their management
        </Text>

        <Flex justify="center" wrap="wrap" gap={8} mt={10}>
          {companies.map((company, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              textAlign="center"
              minW="120px"
            >
              <Icon as={company.icon} boxSize={12} color={company.color} />
              <Text mt={2} fontWeight="medium">
                {company.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
