import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Articles from "./articles";
import Sidebar from "./sidebar";

export default function GridSystem() {
  return (
    <>
      <Box className="content" py={16}>
        <Container>
          <Grid gap={6} gridTemplateColumns={{ base: "1fr", lg: "1fr 440px" }}>
            <GridItem>
              <Articles />
            </GridItem>
            <GridItem>
              <Sidebar />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
