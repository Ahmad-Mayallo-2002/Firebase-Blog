import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import LatestArticles from "./latestArticles";
import Sidebar from "./sidebar";

export default function GridSystem() {
  return (
    <>
      <Box py={16} as="section" className="latest-articles">
        <Container>
          <Grid gap={4} gridTemplateColumns={{ base: "1fr", lg: "1fr 300px" }}>
            <GridItem>
              <LatestArticles />
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
