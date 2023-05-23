import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Menu,
  MenuButton,
  Flex,
  MenuList,
  MenuItem,
  Box,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const cardData = [
  {
    id: 1,
    Content: "Item update notifications",
  },
  {
    id: 2,
    Content: "Item comment notifications",
  },
  {
    id: 3,
    Content: "Buyer review notifications",
  },
  {
    id: 4,
    Content: "Rating reminders notifications",
  },
  {
    id: 5,
    Content: "Meetups near you notifications",
  },
  {
    id: 6,
    Content: "Company news notifications",
  },
  {
    id: 7,
    Content: "New launches and projects",
  },
  {
    id: 8,
    Content: "Monthly product changes",
  },
  {
    id: 9,
    Content: "Subscribe to newsletter",
  },
  {
    id: 10,
    Content: "Email me when someone follows me",
  },
];

const NotificationCard = () => {
  return (
    <Card mt="5" bgColor="#fff">
      <CardBody>
        <Flex justifyContent="space-between">
          <CardHeader color="gray.900" fontWeight="bold" fontSize="2xl" px="0">
            Notifications
          </CardHeader>
          <Menu>
            <MenuButton
              pb="4"
              w="37px"
              h="37px"
              bg="#f4f7fe"
              color="#422afb"
              borderRadius="4"
              fontSize="3xl"
            >
              ...
            </MenuButton>
            <MenuList bg="#fff">
              <MenuItem bg="#fff" color="gray.900">
                Panel 1
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 2
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 3
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 4
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Box>
          {cardData.map((data) => (
            <FormControl key={data.id} display="flex" alignItems="center">
              <Switch
                bgColor="gray.300"
                borderRadius="full"
                id="email-alerts"
              />
              <FormLabel
                htmlFor="email-alerts"
                m="4"
                color="gray.900"
                fontSize="md"
                fontWeight="medium"
              >
                {data.Content}
              </FormLabel>
            </FormControl>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};
export default NotificationCard;
