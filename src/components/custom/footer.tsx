import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  Icon,
  Link,
  List,
  Separator,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaFeather } from "react-icons/fa";
import { footerLinks, social } from "../../assets/data/footer-links";

export default function Footer() {
  const { Root, Item } = List;
  return (
    <Box as="footer" pb="32px" pt="64px" bgColor="#111827">
      <Container>
        <SimpleGrid
          textAlign={{ base: "center", md: "left" }}
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={4}
        >
          <GridItem>
            <Link
              href="/"
              justifyContent={{ base: "center", md: "flex-start" }}
              className="center-y"
              mb={3}
              gap={2}
            >
              <Icon fontSize={24}>
                <FaFeather color="var(--blue-600)" />
              </Icon>
              <Text color="#fff" as="span" fontSize={24}>
                BlogSpace
              </Text>
            </Link>
            <Text color="gray.500" lineHeight={2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus dolorem ipsam repellendus deleniti cupiditate
              doloremque?
            </Text>
            <Flex
              mt={3}
              gapX={4}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {social.map((icon, i) => (
                <Link href={icon.href} key={i}>
                  <Icon
                    fontSize={24}
                    color="gray.500"
                    transitionDuration="300ms"
                    _hover={{ color: "blue.600" }}
                  >
                    <icon.icon />
                  </Icon>
                </Link>
              ))}
            </Flex>
          </GridItem>
          {footerLinks.map((link, i) => (
            <GridItem key={i}>
              <Heading color="#fff" mb={5} fontSize={25}>
                {link.heading}
              </Heading>
              {link.links.map((val, ind) => (
                <Root key={ind}>
                  <Item>
                    <Link
                      color="gray.500"
                      mb={2}
                      transitionDuration="300ms"
                      _hover={{ color: "#fff" }}
                      href={val.href}
                    >
                      {val.name}
                    </Link>
                  </Item>
                </Root>
              ))}
            </GridItem>
          ))}
        </SimpleGrid>

        <Separator mt={4} mb={6} borderColor="gray.600" />

        <Text color="gray.500" textAlign="center">
          &copy; All copyrights are reserved 2025
        </Text>
      </Container>
    </Box>
  );
}
