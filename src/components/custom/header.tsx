import {
  Box,
  Button,
  Container,
  Grid,
  Icon,
  Input,
  InputGroup,
  Link,
  List,
  Text,
} from "@chakra-ui/react";
import { FaBars, FaFeather, FaSearch, FaUserPlus } from "react-icons/fa";
import { links } from "../../assets/data/nav-links";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const { Root, Item } = List;
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const onToggle = () => setOpen(!open);
  return (
    <Box as="header" px={4} py={4} shadow="md">
      <Container
        gapY={open ? 3 : 0}
        className="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        {/* Main Heading */}
        <Link href="/" className="center-y" gap={2}>
          <Icon fontSize={24}>
            <FaFeather color="var(--blue-600)" />
          </Icon>
          <Text as="span" fontSize={24}>
            BlogSpace
          </Text>
        </Link>

        {/* Bars Button */}
        <Button
          onClick={onToggle}
          display={{ base: "block", md: "none" }}
          className="main-button"
        >
          <FaBars />
        </Button>

        {/* Navbar */}
        <Box
          display="flex"
          alignItems={{ base: "flex-start", md: "center" }}
          flexDir={{ base: "column", md: "row" }}
          flexGrow={1}
          as="nav"
          w={{ base: "full", md: "fit" }}
          gapY={3}
          overflowY="hidden"
          h={{ base: open ? "100%" : "0px", md: "100%" }}
        >
          {/* Links */}
          <Root
            flexGrow={1}
            flexDir={{ base: "column", md: "row" }}
            justifyContent="center"
            gap="8px 16px"
            w={{ base: "full", md: "fit" }}
          >
            {links.map((link) => (
              <Item key={link.name} asChild>
                <Link
                  color={
                    location.pathname === link.href
                      ? "var(--blue-600)"
                      : "black"
                  }
                  _hover={{ color: "var(--blue-600)" }}
                  transitionDuration="300ms"
                  href={link.href}
                  fontWeight={600}
                  fontSize={18}
                >
                  {link.name}
                </Link>
              </Item>
            ))}
          </Root>

          {/* Settings */}
          <Grid
            w="full"
            md={{ w: "fit" }}
            className="settings"
            gridTemplateColumns="1fr auto"
            gap={3}
          >
            <InputGroup startElement={<FaSearch color="#b3b8c2" />}>
              <Input
                borderWidth={1}
                _focus={{ borderColor: "blue.500" }}
                placeholder="Search articles..."
                borderRadius="full"
              />
            </InputGroup>
            <Link href="/sign-in" px={4} className="main-button">
              <Icon fontSize={24}>
                <FaUserPlus />
              </Icon>
              Sign In
            </Link>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
