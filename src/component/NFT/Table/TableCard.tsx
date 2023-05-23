import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Avatar,
  Divider,
} from "@chakra-ui/react";

const tablesTask = [
  {
    src: "",
    Name: "@maddison_c21",
    ARTWORKS: "9821",
    RATING: "2458",
  },
  {
    src: "https://i.ibb.co/NSJYQYD/Horizon-UI-Avatar.png",
    Name: "@karl.will02",
    ARTWORKS: "7032",
    RATING: "1485",
  },
  {
    src: "https://i.ibb.co/7p0d1Cd/Frame-24.png",
    Name: "@andreea.1z",
    ARTWORKS: "5204",
    RATING: "1024",
  },
  {
    src: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    Name: "@abraham47.y",
    ARTWORKS: "4309",
    RATING: "858",
  },
  {
    src: "https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80",
    Name: "@simmmple.web",
    ARTWORKS: "3871",
    RATING: "258",
  },
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    Name: "@horizon.ui",
    ARTWORKS: "3152",
    RATING: "258",
  },
  {
    src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80",
    Name: "@venus.sys",
    ARTWORKS: "2907",
    RATING: "258",
  },
];

const TableCard = () => {
  return (
    <Box shadow="none" bgColor="#f8fafb" w="100%" borderRadius="3xl">
      <Flex
        bgColor="#fefeff"
        p="4"
        justifyContent="space-between"
        boxShadow="rgba(112, 144, 176, 0.26) 0px 40px 58px -20px"
      >
        <Text fontSize="xl" fontWeight="bold" color="#1b254b">
          Top Creators
        </Text>
        <Button
          borderRadius="full"
          color="#422afb"
          boxShadow="box-shadow: rgba(112, 144, 176, 0.08) 45px 76px 113px"
          bgColor="gray.300"
          fontSize="md"
          fontWeight="medium"
        >
          See all
        </Button>
      </Flex>
      <Divider />
      <Box bgColor="#ffffff">
        <Table color="black">
          <Thead>
            <Tr>
              <Th border="none">Name</Th>
              <Th border="none">ARTWORKS</Th>
              <Th border="none">RATING</Th>
            </Tr>
          </Thead>
          <Tbody alignItems="center">
            {tablesTask.map((tablesTask, i) => (
              <Tr key={i}>
                <Td
                  px="2"
                  border="none"
                  display="flex"
                  alignItems="center"
                  gap="2"
                >
                  <Avatar fontSize="sm" src={tablesTask.src} />
                  {tablesTask.Name}
                </Td>
                <Td border="none">{tablesTask.ARTWORKS}</Td>
                <Td border="none">{tablesTask.RATING}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
export default TableCard;
