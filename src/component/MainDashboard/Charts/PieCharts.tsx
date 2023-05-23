import React from "react";
import BoxLayout from "../../BoxLayout/BoxLayout";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Card,
  Divider,
} from "@chakra-ui/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 2 },
  { name: "Group B", value: 3 },
  { name: "Group C", value: 4 },
];

const COLORS = ["#4318ff", "#ebf0f8", "#6ad2ff"];

const PieCharts = (props: any) => {
  const { ...rest } = props;

  return (
    <BoxLayout {...rest} p="4">
      <Flex justifyContent="space-between">
        <Box>
          <Text color="gray.900" fontWeight="600" fontSize="md">
            Your Pie Chart
          </Text>
        </Box>
        <Menu>
          <MenuButton
            alignItems="center"
            fontWeight="600"
            fontSize="sm"
            color="gray.600"
          >
            Monthly
            <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="#fff">
            <MenuItem bg="#fff" color="black">
              Daily
            </MenuItem>
            <MenuItem bg="#fff" color="black">
              Monthly
            </MenuItem>
            <MenuItem bg="#fff" color="black">
              Year
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <BoxLayout
        {...rest}
        border="none"
        shadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
        bgColor="#fff"
        p="4"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Text color="gray.600" fontWeight="bold" fontSize="sx">
            Your files
          </Text>
          <Text color="gray.900" fontWeight="bold" fontSize="lg">
            63%
          </Text>
        </Box>
        <Divider w="1px" h="50px" bgColor="rgba(135, 140, 189, 0.3)" />
        <Box>
          <Text color="gray.600" fontWeight="bold" fontSize="sx">
            Sysytem
          </Text>
          <Text color="gray.900" fontWeight="bold" fontSize="lg">
            10%
          </Text>
        </Box>
      </BoxLayout>
    </BoxLayout>
  );
};
export default PieCharts;
