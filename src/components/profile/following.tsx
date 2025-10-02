import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  Text,
} from "@chakra-ui/react";
import { followings } from "../../assets/data/followings";

export default function Following() {
  const { Root, Item } = List;
  return (
    <>
      <Box className="followings" p={6} bgColor="#fff" shadow="md" rounded="xl">
        <Heading mb={4}>Followings</Heading>
        <Root mb={2}>
          {followings.map((f) => (
            <Item key={f.name} mb={3}>
              <Flex gap={4}>
                <Image
                  src={f.img}
                  w="50px"
                  h="50px"
                  alt={f.name}
                  rounded="full"
                />
                <Box>
                  <Heading fontSize="md" fontWeight={500} as="h5">
                    {f.name}
                  </Heading>
                  <Text color="gray.400">{f.job}</Text>
                </Box>
              </Flex>
            </Item>
          ))}
        </Root>
        <Button variant="ghost" colorPalette="blue">
          View All Followings
        </Button>
      </Box>
    </>
  );
}
