import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Circle,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import {
  Search2Icon,
  BellIcon,
  InfoOutlineIcon,
  LinkIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Box
        position="sticky"
        top="7"
        zIndex="docked"
        boxShadow="var(--chakra-shadows-none)"
        bg="center center / cover rgba(244, 247, 254, 0.2)"
        borderColor="var(--chakra-colors-transparent)"
        filter="none"
        backdropFilter="blur(20px)"
        mx="-7"
      >
        <Flex
          py="4"
          px="6"
          width="100%"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          borderRadius="2xl"
        >
          <Flex flexDirection="column">
            <Breadcrumb>
              <BreadcrumbItem color="#2d3748" fontSize="sm">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color="#2d3748" fontSize="sm">
                <BreadcrumbLink href="#">Main Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading
              color="#1b254b"
              fontWeight="bold"
              fontSize="4xl"
              cursor="pointer"
            >
              Main Dashboard
            </Heading>
          </Flex>
          <Flex
            bg="#fff"
            boxShadow="rgba(112, 144, 176, 0.18) 14px 17px 40px 4px"
            borderRadius="30px"
            alignItems="center"
            justifyContent="space-between"
            // gridGap="4"
            p="2"
          >
            <Box>
              <InputGroup>
                <InputLeftElement display={{ base: "none", md: "flex" }}>
                  <Search2Icon color="gray.700" w="4" h="4" />
                </InputLeftElement>
                <Input
                  display={{ base: "flex", md: "flex" }}
                  type="text"
                  w="100%"
                  placeholder="Search..."
                  bg="#f3f6fd"
                  color="black"
                  fontSize="xs"
                  fontWeight="500"
                  cursor="pointer"
                  borderRadius="3xl"
                  _focus={{
                    zIndex: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
            </Box>
            <Stack
              flexDirection={{ base: "row", md: "row" }}
              // w={{ base: "100%", md: "none" }}
              justifyContent={{ base: "space-between", md: "none" }}
              alignItems="end"
              spacing="10px"
            >
              <Box h="10" color="#a0aec0" mt="0">
                <IconButton
                  bgColor="#fff"
                  aria-label="Search database"
                  icon={<BellIcon />}
                />
              </Box>
              <Box h="10" color="#a0aec0">
                <IconButton
                  bgColor="#fff"
                  aria-label="Search database"
                  icon={<InfoOutlineIcon />}
                />
              </Box>
              <Box h="10" color="#a0aec0">
                <IconButton
                  bgColor="#fff"
                  aria-label="Search database"
                  icon={<LinkIcon />}
                />
              </Box>
              <Circle size="40px" bg="rgb(17 0 123)" color="white">
                <Text>AP</Text>
              </Circle>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default Navbar;
