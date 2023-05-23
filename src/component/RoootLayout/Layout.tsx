import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        w="300px"
        as="aside"
        // minW="80"
        colSpan={{ base: 6, lg: 1, xl: 1 }}
        bg="#fff"
        color="black"
        minHeight={{ lg: "100vh" }}
        pt="4"
        display={{ base: "none", md: "none", lg: "block" }}
        boxShadow="rgba(112, 144, 176, 0.08) 14px 17px 40px 4px"
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
