import { Box } from "@chakra-ui/react";
import Categories from "./categories";
import PopularPosts from "./popularPosts";
import PopularTags from "./popularTags";

export default function Sidebar() {
  return (
    <Box as="aside">
      <PopularPosts />
      <Categories />
      <PopularTags />
    </Box>
  );
}
