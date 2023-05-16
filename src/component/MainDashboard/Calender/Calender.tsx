import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Calendar from "react-widgets/Calendar";
import "react-widgets/styles.css";
const Calender = () => {
  return (
    <>
      <Box color="white" p="4" my="5" boxShadow="md" borderRadius="6" bg="#fff">
        <Calendar max={new Date()} />;
      </Box>
    </>
  );
};
export default Calender;
