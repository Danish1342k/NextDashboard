import React from "react";
import BoxLayout from "../../BoxLayout/BoxLayout";
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
// import { CheckIcon } from "@chakra-ui/icons";

const tablesTask = [
  {
    Name: "Horizon UI Free",
    Progress: "17.5%",
    Quantity: "2458",
    Date: "12 Jan 2021",
  },
  {
    Name: "Horizon Ui Pro",
    Progress: "10.8%",
    Quantity: "1485",
    Date: "21 Fab 2021",
  },
  {
    Name: "Weekly Update",
    Progress: "21.3%",
    Quantity: "1024",
    Date: "13 Mar 2021",
  },
  {
    Name: "Venus 3D Asset",
    Progress: "31.5%",
    Quantity: "858",
    Date: "24 Jan 2021",
  },
  {
    Name: "Marketplace",
    Progress: "12.2%",
    Quantity: "258",
    Date: "24 Oct 2022",
  },
];
const Tables = (props: any) => {
  const { ...rest } = props;
  return (
    <BoxLayout {...rest} mt="20px" py="4" overflowX="auto">
      <Flex justifyContent="space-between" p="4">
        <Text color="gray.900" fontSize="xl" fontWeight="bold">
          Check Table
        </Text>
        <Menu>
          <MenuButton
            w="37px"
            h="37px"
            bg="#f4f7fe"
            color="#422afb"
            borderRadius="4"
            fontSize="3xl"
            pb="4"
          >
            ...
          </MenuButton>
          <Portal>
            <MenuList bg="#fff">
              <MenuItem bg="#fff" color="gray.900">
                Panel 1
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                Panel 2
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                Panel 3
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                Panel 4
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Flex>
      <Table my="7" whiteSpace="nowrap" color="black">
        <Thead>
          <Tr>
            <Th border="none">Name</Th>
            <Th border="none">Progress</Th>
            <Th border="none">Quantity</Th>
            <Th border="none">Date</Th>
          </Tr>
        </Thead>

        <Tbody justifyContent="center">
          {tablesTask.map((tablesTask, i) => (
            <Tr key={i}>
              <Td
                p="10px"
                border="none"
                display="flex"
                color="gray.900"
                fontWeight="bold"
                fontSize="sm"
              >
                <Checkbox defaultChecked mx="10px"></Checkbox>
                {tablesTask.Name}
              </Td>
              <Td
                p="10px"
                border="none"
                color="gray.900"
                fontWeight="bold"
                fontSize="sm"
                textAlign="center"
              >
                {tablesTask.Progress}
              </Td>
              <Td
                p="10px"
                border="none"
                color="gray.900"
                fontWeight="bold"
                fontSize="sm"
                textAlign="center"
              >
                {tablesTask.Quantity}
              </Td>
              <Td
                p="10px"
                border="none"
                color="gray.900"
                fontWeight="bold"
                fontSize="sm"
              >
                {tablesTask.Date}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BoxLayout>
  );
};

export default Tables;
