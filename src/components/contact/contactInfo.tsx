import { Box, Flex, Heading, Icon, List, Text } from "@chakra-ui/react";
import { info } from "../../assets/data/contact-info";

export default function ContactInfo() {
  const { Root, Item } = List;
  return (
    <>
      <Box className="main-box">
        <Heading as="h3">Contact Information</Heading>

        <Root>
          {info.map((v, i) => (
            <Item key={i} mb={i < info.length - 1 ? 4 : 0}>
              <Flex gap={3}>
                <Icon
                  color={v.iconColor}
                  bgColor={v.bgIconColor}
                  p={3}
                  rounded="full"
                  fontSize={48}
                >
                  <v.icon />
                </Icon>
                <div>
                  <Heading fontSize="md" mb={-2} as="h5">
                    {v.title}
                  </Heading>
                  <Text color="gray.400" as="small">
                    {v.description}
                  </Text>
                </div>
              </Flex>
            </Item>
          ))}
        </Root>
      </Box>
    </>
  );
}
