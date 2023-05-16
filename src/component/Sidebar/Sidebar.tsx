import React, { useState } from "react";
import Link from "next/link";
import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
// import { EditIcon  } from '@chakra-ui/icons';
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { androidCart } from "react-icons-kit/ionicons/androidCart";
import { person } from "react-icons-kit/iconic/person";
import { iosUnlocked } from "react-icons-kit/ionicons/iosUnlocked";

const Sidebar = () => {
  // const [select, setSelect] = useState();
  // const [color, setColor] = useState(false);

  // const handleCLik = () => {
  //   setColor(!color);
  // };

  return (
    <List position="fixed" w="320px">
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
      <ListItem
        px="8"
        pt="8"
        pb="2"
        borderTop="1px solid #dbdceb"
        // onClick={handleCLik}
      >
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={home} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/">
              <a>Main Dashboard</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={androidCart} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/NFT">
              <a>NFT Marketplace</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={androidCart} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/DataTable">
              <a>Data Table</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={person} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/Profile">
              <a>Profile</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={iosUnlocked} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/Sign">
              <a>Sign in</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
      <ListItem px="8" py="2">
        <Flex>
          <Box mr="18px" color="#8f9bba">
            <Icon icon={home} />
          </Box>
          <Box color="#dbdceb">
            <Link href="/RtlAdmin">
              <a>RTl Admin</a>
            </Link>
          </Box>
        </Flex>
      </ListItem>
    </List>
  );
};

export default Sidebar;
