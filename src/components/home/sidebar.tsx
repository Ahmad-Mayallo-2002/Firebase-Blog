import { Box } from "@chakra-ui/react";
import PopularPosts from "./popularPosts";
import PopularTags from "./popularTags";
import Categories from "./categories";

export default function Sidebar() {
  return (
    <Box as="aside">
      <PopularPosts />
      <Categories />
      <PopularTags />
    </Box>
  );
}
