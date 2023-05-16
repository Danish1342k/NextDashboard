import React from "react";
// import BoxLayout from "../../BoxLayout/BoxLayout"
// import BoxCharts from "../MainDashboard/Charts/BarCharts";
// import PieCharts from "../MainDashboard/Charts/PieCharts";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  MenuButton,
  MenuItem,
  Portal,
  Menu,
  MenuList,
  Text,
} from "@chakra-ui/react";

const tablesTask = [
  {
    Name: "Horizon UI PRO",
    STATUS: "Approved",
    DATE: "18 Apr 2022",
  },
  {
    Name: "Horizon UI Free",
    STATUS: "Disable",
    DATE: "18 Apr 2022",
  },
  {
    Name: "Marketplace",
    STATUS: "Error",
    DATE: "20 May 2021",
  },
  {
    Name: "Weekly Updates",
    STATUS: "Approved",
    DATE: "12 Jul 2021",
  },
];
const TableTwo = () => {
  return (
    <Box
      // w="50%"
      color="black"
      mt="20px"
      borderRadius="16px"
      p="4"
      boxShadow="md"
      bg="white"
      // overflowX="auto"
      // w={{ base: "100%", md: "50%" }}
    >
      <Flex justifyContent="space-between">
        <Text color="gray.900" fontSize="22px" fontWeight="600">
          Complex Table
        </Text>
        <Menu>
          <MenuButton px="4" bg="#f4f7fe" color="#422afb" borderRadius="4">
            ...
          </MenuButton>
          <Portal>
            <MenuList bg="#fff" color="black">
              <MenuItem bg="#fff">Panel 1</MenuItem>
              <MenuItem bg="#fff">Panel 2</MenuItem>
              <MenuItem bg="#fff">Panel 3</MenuItem>
              <MenuItem bg="#fff">Panel 4</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Flex>
      <Table>
        <Thead>
          <Tr>
            <Th border="none">NAME</Th>
            <Th border="none">STATUS</Th>
            <Th border="none">DATE</Th>
            {/* <Th border="none">PROGRESS</Th> */}
          </Tr>
        </Thead>
        <Tbody justifyContent="center">
          {tablesTask.map((tablesTask) => (
            <Tr key={tablesTask}>
              <Td border="none" display="flex">
                <Checkbox defaultChecked mx="10px"></Checkbox>
                {tablesTask.Name}
              </Td>
              <Td border="none">{tablesTask.STATUS}</Td>
              <Td border="none">{tablesTask.DATE}</Td>
              {/* <Td border="none">{tablesTask.PROGRESS}</Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableTwo;
