import React from "react";
import BoxLayout from "../../BoxLayout/BoxLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Circle, Flex, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarIcon } from "@chakra-ui/icons";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const LineCharts = (props: any) => {
  const { ...rest } = props;
  return (
    <BoxLayout {...rest} py="4" mt="20px">
      <Flex justifyContent="space-between" p="4" overflowX="auto">
        <Button
          leftIcon={<CalendarIcon />}
          bgColor="#f4f7fe"
          color="#a3aed0"
          variant="solid"
        >
          This month
        </Button>
        <Circle
          w="40px"
          h="40px"
          bg="#f4f7fe"
          color="white"
          alignItems="center"
          justifyContent="center"
          fontSize="1xl"
          borderRadius="2xl"
          // px="4"
        >
          <FontAwesomeIcon color="#422afb" icon={faChartLine} />
        </Circle>
      </Flex>
      <Flex w="100%">
        <Box p="4">
          <Heading
            color="#1b2559"
            fontSize="3xl"
            fontWeight="bold"
            lineHeight="100%"
          >
            $37.5K
          </Heading>
          <Flex w="132px">
            <Text
              color="gray.600"
              fontSize="sm"
              fontWeight="medium"
              lineHeight="100%"
              mt="4px"
              mr="2"
            >
              Total Spent
            </Text>
            <Text color="green.500" fontSize="sm" fontWeight="bold">
              +2.45%
            </Text>
          </Flex>
          <Text color="green.500" fontSize="md" fontWeight="bold">
            On track
          </Text>
        </Box>
        <ResponsiveContainer width="80%" height={250}>
          <LineChart
            //   width={300}
            //   height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </BoxLayout>
  );
};
export default LineCharts;
