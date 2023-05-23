import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      textAlign="center"
      pt="10"
      pb="6"
      color="gray.400"
    >
      <Text w="60%" textAlign="start">
        Horizon UI. All Rights Reserved. Made with love by Danish
      </Text>
      <Flex w="40%" textAlign="center" justifyContent="space-between">
        <Text>Support</Text>
        <Text>License</Text>
        <Text>Terms of Use</Text>
        <Text>Blog</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
