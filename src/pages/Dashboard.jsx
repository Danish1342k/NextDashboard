import Head from "next/head";
import FirstCard from "../component/MainDashboard/FirstCard/FirstCard";
import { SimpleGrid, Flex, Box } from "@chakra-ui/react";
import LineCharts from "../component/MainDashboard/Charts/LineCharts";
import BarCharts from "../component/MainDashboard/Charts/BarCharts";
import Table from "../component/MainDashboard/Table/Tables";
import BarChartsTwo from "../component/MainDashboard/Charts/BarChartsTwo";
import PieCharts from "../component/MainDashboard/Charts/PieCharts";
import TableTwo from "../component/MainDashboard/Table/TableTwo";
import Task from "../component/MainDashboard/Task/Task";
import Calender from "../component/MainDashboard/Calender/Calender";

import {
  faChartLine,
  faDollarSign,
  faTasks,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "@/component/RoootLayout/Layout";

const cardData = [
  {
    title: "Earnings",
    amount: "$350.4",
    icon: faChartLine,
  },
  {
    title: "Spends This month",
    amount: "$642.39",
    icon: faDollarSign,
  },
  {
    title: "Sales",
    amount: "+3,020",
    percentage: "+23%",
    discription: "since last month",
  },
  {
    title: "Your Balance",
    amount: "$1,000",
    icon: faChartLine,
  },
  {
    title: "New Task",
    amount: "154",
    icon: faTasks,
  },
  {
    title: "Totall project",
    amount: "2935",
    icon: faFile,
  },
];

const mainDashboard = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Horizon</title>
        </Head>
        <main>
          <SimpleGrid
            spacing={7}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            pt="4"
          >
            {cardData.map((card, i) => (
              <FirstCard
                key={i}
                cardData={card}
                isLeftIcon={i !== 3}
                isRightIcon={i === 3}
                // {...(i === 0 && { bgColor: "black", boxShadow: "0 0 10px #000" })}
              />
            ))}
          </SimpleGrid>
          <Flex
            w="100%"
            gap="4"
            mt="5"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <LineCharts />
            </Box>
            <Box w={{ base: "100%", md: "50%" }}>
              <BarCharts />
            </Box>
          </Flex>
          <Flex
            mt="5"
            w={{ base: "100%", md: "100%" }}
            gap="4"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            alignItems="end"
          >
            <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
              <Table />
            </Box>
            <Flex
              w={{ base: "100%", md: "100%", lg: "50%" }}
              gap="4"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="baseline"
            >
              <Box w={{ base: "100%", md: "50%", lg: "50%" }}>
                <BarChartsTwo />
              </Box>
              <Box w={{ base: "100%", md: "50%", lg: "50%" }}>
                <PieCharts />
              </Box>
            </Flex>
          </Flex>
          <Flex
            mt="5"
            w={{ base: "100%", md: "100%" }}
            gap="4"
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
              <TableTwo />
            </Box>
            <Flex
              w={{ base: "100%", md: "100%", lg: "50%" }}
              gap="4"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box w={{ base: "100%", md: "50%" }}>
                <Task />
              </Box>
              <Box w={{ base: "100%", md: "50%" }}>
                <Calender />
              </Box>
            </Flex>
          </Flex>
        </main>
      </Layout>
    </>
  );
};
export default mainDashboard;

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       permanent: false,
//       destination: "/sign",
//     },
//   };
// }
