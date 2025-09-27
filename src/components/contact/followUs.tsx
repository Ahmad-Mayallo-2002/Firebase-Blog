import {
  Box,
  GridItem,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { links } from "../../assets/data/follow-us";

export default function FollowUs() {
  return (
    <>
      <Box mt={4} className="main-box">
        <Heading as="h3">Follow Us</Heading>
        <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
          {links.map((link, i) => (
            <GridItem key={i}>
              <Link
                w="full"
                href={link.href}
                borderWidth={2}
                borderRadius={6}
                p={2}
                transitionDuration="300ms"
                _hover={{ bgColor: "gray.100" }}
              >
                <Icon color={link.iconColor}>
                  <link.icon />
                </Icon>
                <Text as="span">{link.title}</Text>
              </Link>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
