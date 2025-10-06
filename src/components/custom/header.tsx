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
  Spinner,
  Text,
} from "@chakra-ui/react";
import {
  FaBars,
  FaFeather,
  FaSearch,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { links } from "../../assets/data/nav-links";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import UserList from "./userList";

export default function Header() {
  const { Root, Item } = List;
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  return (
    <Box as="header" px={4} py={4} shadow="md">
      <Container
        gapY={open ? 3 : 0}
        className="space-between"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {/* Main Heading */}
        <Link href="/" className="center-y" fontWeight={700} gap={2}>
          <Icon fontSize={24}>
            <FaFeather color="var(--blue-600)" />
          </Icon>
          <Text as="span" fontSize={24}>
            BlogSpace
          </Text>
        </Link>

        {/* Bars Button */}
        <Button
          onClick={() => setOpen(!open)}
          display={{ base: "block", lg: "none" }}
          className="main-button"
        >
          <FaBars />
        </Button>

        {/* Navbar */}
        <Box
          display="flex"
          alignItems={{ base: "flex-start", lg: "center" }}
          flexDir={{ base: "column", lg: "row" }}
          flexGrow={1}
          as="nav"
          w={{ base: "full", lg: "fit" }}
          gapY={3}
          overflowY="hidden"
          h={{ base: open ? "100%" : "0px", lg: "100%" }}
        >
          {/* Links */}
          <Root
            flexGrow={1}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="center"
            gap="8px 16px"
            w={{ base: "full", lg: "fit" }}
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
            w={{ base: "full", lg: "fit" }}
            className="settings"
            gridTemplateColumns={{ base: "1fr", lg: "1fr auto auto" }}
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
            {loading ? (
              <Spinner
                borderWidth={3}
                animationDuration="600ms"
                borderColor="blue.500"
                borderTopColor="transparent"
                w="40px"
                h="40px"
              />
            ) : (
              <>
                {user ? (
                  <UserList />
                ) : (
                  <>
                    <Link
                      href="/sign-up"
                      p=".5rem 1rem"
                      className="main-button"
                      w="fit"
                    >
                      <Icon fontSize={24}>
                        <FaUserPlus />
                      </Icon>
                      Sign Up
                    </Link>
                    <Link
                      href="/login"
                      p=".5rem 1rem"
                      className="main-button"
                      w="fit"
                    >
                      <Icon fontSize={20}>
                        <FaUser />
                      </Icon>
                      Login
                    </Link>
                  </>
                )}
              </>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
