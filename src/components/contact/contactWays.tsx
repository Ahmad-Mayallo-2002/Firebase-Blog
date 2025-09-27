import { Box, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import SendMessage from "./sendMessage";
import ContactInfo from "./contactInfo";
import FollowUs from "./followUs";
import "./contact.scss";

export default function ContactWays() {
  return (
    <>
      <Box as="section" className="contact-ways" py={16}>
        <Container>
          <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
            <GridItem>
              <SendMessage />
            </GridItem>
            <GridItem>
              <ContactInfo />
              <FollowUs />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
