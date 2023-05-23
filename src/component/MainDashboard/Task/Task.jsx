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
import { DragHandleIcon } from "@chakra-ui/icons";
import BoxLayout from "../../BoxLayout/BoxLayout";

const Task = (props, any) => {
  const { ...rest } = props;
  return (
    <BoxLayout {...rest} p="4" my="5">
      <Flex justifyContent="space-between" mb="5" alignItems="center">
        <Flex>
          <Checkbox defaultChecked mr="10px" border="#E2E8F0"></Checkbox>
          <Text color="black">Task</Text>
        </Flex>
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
        <Flex my="6" alignItems="center">
          <Checkbox
            border="#E2E8F0"
            mr="10px"
            _checked={{
              background: "#422afb",
              borderColor: "#422afb",
              color: "#fff",
            }}
          ></Checkbox>
          <Flex alignItems="center" justifyContent="space-between" flex="1">
            <Text color="black">Landing Page Design</Text>
            <Box color="#a3aed0">
              <DragHandleIcon />
            </Box>
          </Flex>
        </Flex>
        <Flex my="6">
          <Checkbox defaultChecked mr="10px" border="#E2E8F0"></Checkbox>
          <Flex alignItems="center" justifyContent="space-between" flex="1">
            <Text color="black">Dashboard Builder</Text>
            <Box color="#a3aed0" mr="2px">
              <DragHandleIcon />
            </Box>
          </Flex>
        </Flex>
        <Flex my="6">
          <Checkbox defaultChecked mr="10px" border="#E2E8F0"></Checkbox>
          <Flex alignItems="center" justifyContent="space-between" flex="1">
            <Text color="black">Mobile App Design</Text>
            <Box color="#a3aed0" mr="2px">
              <DragHandleIcon />
            </Box>
          </Flex>
        </Flex>
        <Flex my="6">
          <Checkbox defaultChecked mr="10px" border="#E2E8F0"></Checkbox>
          <Flex alignItems="center" justifyContent="space-between" flex="1">
            <Text color="black">Illustrations</Text>
            <Box color="#a3aed0" mr="2px">
              <DragHandleIcon />
            </Box>
          </Flex>
        </Flex>
        <Flex my="6">
          <Checkbox defaultChecked mr="10px" border="#E2E8F0"></Checkbox>
          <Flex alignItems="center" justifyContent="space-between" flex="1">
            <Text color="black">Promotional LP</Text>
            <Box color="#a3aed0" mr="2px">
              <DragHandleIcon />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </BoxLayout>
  );
};
export default Task;
