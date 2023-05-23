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
  Progress,
} from "@chakra-ui/react";
import { BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

const tablesTask = [
  {
    Name: "Horizon UI PRO",
    icon: <BsCheckCircleFill />,
    STATUS: "Approved",
    DATE: "18 Apr 2022",
    progressValue: "80",
  },
  {
    Name: "Horizon UI Free",
    icon: <AiOutlineCloseCircle />,
    STATUS: "Disable",
    DATE: "18 Apr 2022",
    progressValue: "20",
  },
  {
    Name: "Marketplace",
    icon: <BsExclamationCircleFill />,
    STATUS: "Error",
    DATE: "20 May 2021",
    progressValue: "100",
  },
  {
    Name: "Weekly Updates",
    icon: <BsCheckCircleFill />,
    STATUS: "Approved",
    DATE: "12 Jul 2021",
    progressValue: "50",
  },
];
const TableTwo = (props: any) => {
  const { ...rest } = props;
  return (
    <BoxLayout {...rest} p="4" mt="20px" color="black" overflow="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Text color="gray.900" fontSize="xl" fontWeight="bold">
          Complex Table
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
      <Table whiteSpace="nowrap">
        <Thead>
          <Tr>
            <Th border="none">NAME</Th>
            <Th border="none">STATUS</Th>
            <Th border="none">DATE</Th>
            <Th border="none">PROGRESS</Th>
            {/* <Th border="none">PROGRESS</Th> */}
          </Tr>
        </Thead>
        <Tbody color="#1b2559" fontWeight="bold" fontSize="sm">
          {tablesTask.map((tablesTask, i) => (
            <Tr key={i}>
              <Td px="0" border="none">
                <Flex alignItems="center">
                  <Checkbox
                    defaultChecked
                    mx="10px"
                    border="#E2E8F0"
                  ></Checkbox>
                  {tablesTask.Name}
                </Flex>
              </Td>
              <Td px="0" border="none">
                <Flex
                  alignItems="center"
                  fontSize="1xl"
                  color={i === 1 ? "red" : i === 2 ? "yellow" : "green"}
                >
                  {tablesTask.icon}
                  <Text ml="8px" fontSize="md" color="#1b2559">
                    {tablesTask.STATUS}
                  </Text>
                </Flex>
                {/* <Flex
                  fontSize="2xl"
                  color={i === 1 ? "red" : i === 2 ? "yellow" : "green"}
                  // w={i === 1 ? "100px" : i === 2 ? "75px" : "100px"}
                >
                  {tablesTask.icon}
                  <Text color="gray.900" fontSize="md">
                    {tablesTask.STATUS}
                  </Text>
                </Flex> */}
              </Td>
              <Td px="0" border="none">
                {tablesTask.DATE}
              </Td>
              <Td px="0" border="none" width="50px" height="10px">
                <Flex alignItems="center">
                  <Box flex="1" mr="2">
                    <Progress
                      color="#4fd1c5"
                      bg="gray.100"
                      value={tablesTask.progressValue}
                      h="5px"
                    />
                  </Box>
                </Flex>
                {/* <Progress
                  color="#4fd1c5"
                  bg="gray.100"
                  value={tablesTask.progressValue}
                  h="5px"
                /> */}
              </Td>

              {/* <Td border="none">{tablesTask.PROGRESS}</Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </BoxLayout>
  );
};

export default TableTwo;
