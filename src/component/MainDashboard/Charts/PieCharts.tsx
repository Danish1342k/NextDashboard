import React from "react";
import BoxLayout from "../../BoxLayout/BoxLayout";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
          <MenuButton fontWeight="600" fontSize="sm" color="gray.600">
            Monthly
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
      <ResponsiveContainer width="100%" height={250}>
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
    </BoxLayout>
  );
};
export default PieCharts;
