import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import BoxLayout from "../../BoxLayout/BoxLayout";
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

const BarChartsTwo = (props: any) => {
  const { ...rest } = props;

  return (
    <BoxLayout {...rest} p="4">
      <Flex justifyContent="space-between">
        <Box>
          <Text color="gray.600" fontWeight="500" fontSize="sm">
            Daily Traffic
          </Text>
          <Flex alignItems="center">
            <Text color="gray.900" fontSize="34px" fontWeight="700">
              2.579
            </Text>
            <Text color="gray.600" fontWeight="500" fontSize="sm">
              Visitors
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            alignItems="center"
            color="green.500"
            fontWeight="700"
            fontSize="sm"
          >
            <TriangleUpIcon />
            +2.45%
          </Flex>
        </Box>
      </Flex>
      <ResponsiveContainer width="100%" height={290}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#7655ff" />
        </BarChart>
      </ResponsiveContainer>
    </BoxLayout>
  );
};
export default BarChartsTwo;
