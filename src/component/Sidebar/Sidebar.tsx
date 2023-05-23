import React, { useState } from "react";
import Link from "next/link";
import { Box, Divider, Flex, Heading, List, ListItem } from "@chakra-ui/react";
// import { EditIcon  } from '@chakra-ui/icons';
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { androidCart } from "react-icons-kit/ionicons/androidCart";
import { person } from "react-icons-kit/iconic/person";
import { iosUnlocked } from "react-icons-kit/ionicons/iosUnlocked";

const Sidebar = () => {
  // const [selected, setSelected] = useState(false);
  // const [color, setColor] = useState(null);

  // const handleCLik = (index) => {
  //   setColor(index);
  //   // setSelected(!selected);
  // };

  const [activeItem, setActiveItem] = useState("/Dashboard"); // Set the initial active item based on the current page

  const handleItemClick = (path) => {
    setActiveItem(path);
    console.log(path);
  };

  return (
    <List position="fixed" w="300px">
      <Flex
        my="8"
        display="flex"
        justifyContent="center"
        fontSize="lg"
        alignItems="center"
      >
        <Heading color="#1b254b">Horizon</Heading>
        <Heading color="#1b254b" fontWeight="400">
          Free
        </Heading>
      </Flex>
      <Box h="1px" bgColor="rgba(135, 140, 189, 0.3)" mb="20px">
        <Divider />
      </Box>
      <ListItem py="2" pl="8" mt="2">
        <Flex px="2" alignItems="center">
          <Box
            mr="18px"
            color={activeItem === "/Dashboard" ? "#8f9bba" : "#422afb"}
            w="20px"
            h="30px"
          >
            <Icon icon={home} />
          </Box>
          <Box
            onClick={() => handleItemClick("/Dashboard")}
            color={activeItem === "/Dashboard" ? "#8f9bba" : "#1a202c"}
            fontWeight={activeItem === "/Dashboard" ? "normal" : "bold"}
          >
            <Link href="/Dashboard">Main Dashboard</Link>
          </Box>
          <Box
            display={activeItem === "/Dashboard" ? "none" : "flex"}
            w="4px"
            h="36px"
            bgColor="#422afb"
            borderRadius="2xl"
            ml="20"
          >
            <Divider />
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex px="2" alignItems="center">
          <Box
            mr="18px"
            color={activeItem === "/nft" ? "#8f9bba" : "#422afb"}
            w="20px"
            h="30px"
          >
            <Icon icon={androidCart} />
          </Box>
          <Box
            onClick={() => handleItemClick("/nft")}
            color={activeItem === "/nft" ? "#8f9bba" : "#1a202c"}
            fontWeight={activeItem === "/nft" ? "normal" : "bold"}
          >
            <Link href="/nft"> NFT Marketplace </Link>
          </Box>
          <Box
            display={activeItem === "/nft" ? "none" : "flex"}
            w="4px"
            h="36px"
            bgColor="#422afb"
            borderRadius="2xl"
            ml="20"
          >
            <Divider />
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex px="2" alignItems="center">
          <Box mr="18px" color="#8f9bba" w="20px" h="30px">
            <Icon icon={androidCart} />
          </Box>
          <Box color="#8f9bba" fontWeight="normal">
            <Link href="/dataTable"> Data Table </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex px="2" alignItems="center">
          <Box mr="18px" color="#8f9bba" w="20px" h="30px">
            <Icon icon={person} />
          </Box>
          <Box color="#8f9bba" fontWeight="normal">
            <Link href="/profile"> Profile </Link>
          </Box>
        </Flex>
      </ListItem>
      {/* <ListItem px="8" py="2">
        <Flex px="2" alignItems="center">
          <Box mr="18px" color="#8f9bba" w="20px" h="30px">
            <Icon icon={iosUnlocked} />
          </Box>
          <Box color="#8f9bba" fontWeight="normal">
            <Link href="/SignUp">Sign Up</Link>
          </Box>
        </Flex>
      </ListItem> */}
      <ListItem px="8" py="2">
        <Flex px="2" alignItems="center">
          <Box mr="18px" color="#8f9bba" w="20px" h="30px">
            <Icon icon={home} />
          </Box>
          <Box color="#8f9bba" fontWeight="normal">
            <Link href="/rtlAdmin"> RTl Admin </Link>
          </Box>
        </Flex>
      </ListItem>
    </List>
  );
};

export default Sidebar;
