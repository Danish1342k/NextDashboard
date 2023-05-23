import React from "react";
import BoxLayout from "../BoxLayout/BoxLayout";
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
  Grid,
  Progress,
} from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";
import { BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { AiFillWindows } from "react-icons/ai";

const tablesone = [
  {
    Name: "Marketplace",
    TECH: [
      <FaApple key="apple" />,
      <DiAndroid key="android" />,
      <AiFillWindows key="windows" />,
    ],
    DATE: "12.Jan.2021",
    PROGRESS: "75.5%",
    progressValue: "40",
  },
  {
    Name: "Venus DB PRO",
    TECH: <FaApple key="apple" />,
    DATE: "13.Mar.2021",
    PROGRESS: "35.4%",
    progressValue: "40",
  },
  {
    Name: "Venus DS",
    TECH: [<FaApple key="apple" />, <DiAndroid key="android" />],
    DATE: "24.Jan.2021",
    PROGRESS: "25%",
    progressValue: "40",
  },
  {
    Name: "Venus 3D Asset",
    TECH: [
      <FaApple key="apple" />,
      <DiAndroid key="android" />,
      <AiFillWindows key="windows" />,
    ],
    DATE: "Oct 24, 2022",
    PROGRESS: "100%",
    progressValue: "40",
  },
  {
    Name: "Marketplace",
    TECH: [<FaApple key="apple" />, <DiAndroid key="android" />],
    DATE: "Oct 24, 2022",
    PROGRESS: "75.5%",
    progressValue: "40",
  },
];

const tablesTwo = [
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "2458",
    Date: "12.Jan.2021",
  },
  {
    Name: "Venus DB PRO",
    Progress: "35.4%",
    Quantity: "1485",
    Date: "21.Feb.2021",
  },
  {
    Name: "Venus DS",
    Progress: "25%",
    Quantity: "1024",
    Date: "13.Mar.2021",
  },
  {
    Name: "Venus 3D Asset",
    Progress: "100%",
    Quantity: "858",
    Date: "24.Jan.2021",
  },
  {
    Name: "Venus 3D Asset",
    Progress: "100%",
    Quantity: "1024",
    Date: "24.Jan.2021",
  },
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "258",
    Date: "Oct 24, 2022",
  },
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "258",
    Date: "Oct 24, 2022",
  },
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "258",
    Date: "12.Jan.2021",
  },

  {
    Name: "Venus DB PRO",
    Progress: "35.4%",
    Quantity: "858",
    Date: "21.Feb.2021",
  },
  {
    Name: "Venus DS",
    Progress: "25%",
    Quantity: "258",
    Date: "13.Mar.2021",
  },
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "1024",
    Date: "Oct 24, 2022",
  },
];

const tablesThird = [
  {
    Name: "Marketplace",
    Progress: "75.5%",
    Quantity: "2458",
    Date: "12.Jan.2021",
  },
  {
    Name: "Venus DB PRO",
    Progress: "35.4%",
    Quantity: "1485",
    Date: "21.Feb.2021",
  },
  {
    Name: "Venus DS",
    Progress: "25%",
    Quantity: "1024",
    Date: "13.Mar.2021",
  },
  {
    Name: "Venus 3D Asset",
    Progress: "100%",
    Quantity: "858",
    Date: "24.Jan.2021",
  },
];

const tablesFour = [
  {
    Name: "Marketplace",
    icon: <BsCheckCircleFill />,
    STATUS: "Approved",
    Date: "24.Jan.2021",
    progressValue: "100",
    // PROGRESS: "2458",
  },
  {
    Name: "Marketplace",
    icon: <BsExclamationCircleFill />,
    STATUS: "Disable",
    Date: "30.Dec.2021",
    progressValue: "40",
  },
  {
    Name: "Marketplace",
    icon: <AiOutlineCloseCircle />,
    STATUS: "Error",
    Date: "20.May.2021",
    progressValue: "100",
  },
  {
    Name: "Marketplace",
    icon: <BsCheckCircleFill />,
    STATUS: "Approved",
    Date: "12.Jul.2021",
    progressValue: "80",
  },
];

const DataTable = (props: any) => {
  const { ...rest } = props;
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, minmax(0px, 1fr))",
          md: "repeat(2, minmax(0px, 1fr))",
        }}
        gap="4"
      >
        <BoxLayout {...rest} mt="20px" py="4" overflowX="auto">
          <Flex justifyContent="space-between" px="4">
            <Text color="gray.900" fontSize="22px" fontWeight="600">
              Development Table
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
          <Table whiteSpace="nowrap" color="black">
            <Thead>
              <Tr>
                <Th border="none">Name</Th>
                <Th border="none">TECH</Th>
                <Th border="none">DATE</Th>
                <Th border="none">PROGRESS</Th>
              </Tr>
            </Thead>

            <Tbody justifyContent="center">
              {tablesone.map((tablesone, i) => (
                <Tr key={i}>
                  <Td
                    p="10px"
                    border="none"
                    display="flex"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {/* <Checkbox defaultChecked mx="10px"></Checkbox> */}
                    {tablesone.Name}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    <Flex gap="2" color="#8f9bba" h="15px">
                      {tablesone.TECH}
                    </Flex>
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesone.DATE}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                    display="flex"
                    alignItems="center"

                    // gap="4"
                  >
                    <Box flex="1" mr="5">
                      <Text>{tablesone.PROGRESS}</Text>
                    </Box>
                    <Box flex="2">
                      <Progress
                        color="#4fd1c5"
                        bg="gray.100"
                        value={tablesone.progressValue}
                        h="5px"
                      />
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </BoxLayout>
        <BoxLayout {...rest} mt="20px" py="4" overflowX="auto">
          <Flex justifyContent="space-between" px="4">
            <Text color="gray.900" fontSize="22px" fontWeight="600">
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
              {tablesTwo.map((tablesTwo, i) => (
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
                    {tablesTwo.Name}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesTwo.Progress}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesTwo.Quantity}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesTwo.Date}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </BoxLayout>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(1, minmax(0px, 1fr))",
          md: "repeat(2, minmax(0px, 1fr))",
        }}
        gap="4"
      >
        <BoxLayout {...rest} mt="20px" py="4" overflowX="auto">
          <Flex justifyContent="space-between" px="4">
            <Text color="gray.900" fontSize="22px" fontWeight="600">
              4-Column Table
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
              {tablesThird.map((tablesThird, i) => (
                <Tr key={i}>
                  <Td
                    p="10px"
                    border="none"
                    display="flex"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {/* <Checkbox defaultChecked mx="10px"></Checkbox> */}
                    {tablesThird.Name}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesThird.Progress}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesThird.Quantity}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesThird.Date}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </BoxLayout>
        <BoxLayout {...rest} mt="20px" py="4" overflowX="auto">
          <Flex justifyContent="space-between" px="4">
            <Text color="gray.900" fontSize="22px" fontWeight="600">
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
          <Table whiteSpace="nowrap" color="black">
            <Thead>
              <Tr>
                <Th border="none">NAME</Th>
                <Th border="none">STATUS</Th>
                <Th border="none">DATE</Th>
                <Th border="none">PROGRESS</Th>
              </Tr>
            </Thead>

            <Tbody justifyContent="center">
              {tablesFour.map((tablesFour, i) => (
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
                    {tablesFour.Name}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    <Flex
                      alignItems="center"
                      fontSize="1xl"
                      color={i === 1 ? "red" : i === 2 ? "yellow" : "green"}
                    >
                      {tablesFour.icon}
                      <Text ml="8px" fontSize="md" color="#1b2559">
                        {tablesFour.STATUS}
                      </Text>
                    </Flex>
                    {/* {tablesFour.STATUS} */}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {tablesFour.Date}
                  </Td>
                  <Td
                    p="10px"
                    border="none"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="sm"
                  >
                    {/* {tablesFour.PROGRESS} */}
                    <Progress
                      color="#422AFB"
                      bg="gray.100"
                      value={tablesFour.progressValue}
                      h="5px"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </BoxLayout>
      </Grid>
    </>
  );
};

export default DataTable;
