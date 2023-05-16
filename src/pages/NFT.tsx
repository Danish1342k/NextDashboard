import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import BigCard from "../component/NFT/FirstCard/BigCard";
import Cards from "../component/NFT/SecondCard/Cards";
import TableCard from "../component/NFT/Table/TableCard";
import History from "../component/NFT/ThirdCard/HistoryCards";

const NFT = () => {
  return (
    <Flex
      w="100%"
      gap="4"
      flexDirection={{ base: "column", md: "column", lg: "row" }}
    >
      <Box pt="4" w={{ base: "100%", md: "100%", lg: "60%" }}>
        <BigCard />
        <Flex>
          <Box>
            <Cards />
          </Box>
        </Flex>
      </Box>
      <Box pt="4" w={{ base: "100%", md: "100%", lg: "40%" }}>
        <TableCard />
        <History />
      </Box>
    </Flex>
  );
};
export default NFT;
