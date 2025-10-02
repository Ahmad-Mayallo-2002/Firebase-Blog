import { Box, Heading, Flex, Icon, List, Text } from "@chakra-ui/react";
import { activities } from "../../assets/data/activities";

export default function RecentActivities() {
  const { Root, Item } = List;
  return (
    <Box
      my={4}
      className="recent-activities"
      bgColor="#fff"
      p={6}
      shadow="md"
      rounded="xl"
    >
      <Heading mb={4} fontSize="xl">
        Recent Activities
      </Heading>
      <Root display="grid" gap={3}>
        {activities.map((activity, index) => (
          <Item key={index}>
            <Flex gap={3}>
              <Icon
                as={activity.icon}
                bgColor={activity.bg}
                fontSize={35}
                p={2}
                rounded="full"
                color={activity.color}
              />
              <Box>
                <Text>{activity.text}</Text>
                <Text as="small" color="gray.400">
                  {activity.time}
                </Text>
              </Box>
            </Flex>
          </Item>
        ))}
      </Root>
    </Box>
  );
}
