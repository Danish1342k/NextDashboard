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
    <BoxLayout {...rest} mt="20px" p="4">
      <Flex justifyContent="space-between">
        <Text color="gray.900" fontSize="22px" fontWeight="600">
          Check Table
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
      <Table whiteSpace="nowrap" color="black">
        <Thead>
          <Tr>
            <Th border="none">Name</Th>
            <Th border="none">Progress</Th>
            <Th border="none">Quantity</Th>
            <Th border="none">Date</Th>
          </Tr>
        </Thead>
        <Tbody justifyContent="center">
          {tablesTask.map((tablesTask) => (
            <Tr key={tablesTask}>
              <Td p="10px" border="none" display="flex">
                <Checkbox defaultChecked mx="10px"></Checkbox>
                {tablesTask.Name}
              </Td>
              <Td p="10px" border="none">
                {tablesTask.Progress}
              </Td>
              <Td p="10px" border="none">
                {tablesTask.Quantity}
              </Td>
              <Td p="10px" border="none">
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
