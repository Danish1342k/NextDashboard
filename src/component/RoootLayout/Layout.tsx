import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        minW="80"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bg="#fff"
        color="black"
        minHeight={{ lg: "100vh" }}
        pt="4"
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        pos="relative"
        colSpan={{ base: 6, lg: 5, xl: 5 }}
        p="7"
        pb="0"
        bg="#f4f7fe"
      >
        <Navbar />
        {children}
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
