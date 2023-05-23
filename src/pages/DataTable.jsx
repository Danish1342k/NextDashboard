import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../component/RoootLayout/Layout";
import DataTable from "../component/DataTable/DataTable";

const dataTable = () => {
  return (
    <Layout>
      <Box pt="4">
        <DataTable />
      </Box>
    </Layout>
  );
};
export default dataTable;
