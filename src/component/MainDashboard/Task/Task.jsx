import React from "react";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function Task() {
  return (
    <Box
      color="white"
      p="4"
      my="5"
      boxShadow="md"
      borderRadius="16px"
      bg="#fff"
    >
      <Flex justifyContent="space-between" mb="5">
        <Flex>
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Task</Text>
        </Flex>
        <Menu>
          <MenuButton color="black">...</MenuButton>
          <MenuList bg="#fff">
            <MenuItem bg="#fff" color="black">
              Panel 1
            </MenuItem>
            <MenuItem bg="#fff" color="black">
              Panel 2
            </MenuItem>
            <MenuItem bg="#fff" color="black">
              Panel 3
            </MenuItem>
            <MenuItem bg="#fff" color="black">
              Panel 4
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box>
        <Flex my="5" alignItems="center">
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Landing Page Design</Text>
        </Flex>
        <Flex my="5">
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Dashboard Builder</Text>
        </Flex>
        <Flex my="5">
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Mobile App Design</Text>
        </Flex>
        <Flex my="5">
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Illustrations</Text>
        </Flex>
        <Flex my="5">
          <Checkbox defaultChecked mr="10px"></Checkbox>
          <Text color="black">Promotional LP</Text>
        </Flex>
      </Box>
    </Box>
  );
}
export default Task;
