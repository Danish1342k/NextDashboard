import React from "react";
import { Circle, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BoxLayout from "@/component/BoxLayout/BoxLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    name: "17",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "18",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "19",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "20",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "21",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "22",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "23",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "24",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "25",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarCharts = (props: any) => {
  const { ...rest } = props;

  return (
    <BoxLayout
      {...rest}
      // w={{ base: "100%", md: "100%" }}
      py="4"
      mt="20px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="4"
        overflowX="auto"
      >
        <Text color="#1b2559" fontSize="xl" lineHeight="100%" fontWeight="bold">
          Weekly Revenue
        </Text>
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
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          //   width={300}
          //   height={500}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="pv" stackId="a" fill="#7655ff" />
          <Bar dataKey="uv" stackId="a" fill="#80d9ff" />
          <Bar dataKey="amt" stackId="a" fill="#e5ecf9" />
        </BarChart>
      </ResponsiveContainer>
    </BoxLayout>
  );
};
export default BarCharts;
