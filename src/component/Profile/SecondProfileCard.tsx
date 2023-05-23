import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
  Image,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";

const cardData = [
  {
    id: 1,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Project1.d5952144f76e2cb9e5d6.png",
    name: "Technology behind the Blockchain",
    Project: "Project #1 • See project details",
  },
  {
    id: 2,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Project2.90f702366422b52138b1.png",
    name: "Greatest way to a good Economy",
    Project: "Project #2 • See project details",
  },
  {
    id: 3,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Project3.378b532af038bf47559c.png",
    name: "Most essential tips for Burnout",
    Project: "Project #3 • See project details",
  },
];

const cardDataTwo = [
  {
    id: 1,
    Detail: "Education",
    CompleteDetail: "Stanford University",
  },
  {
    id: 2,
    Detail: "Department",
    CompleteDetail: "Product Design",
  },
  {
    id: 3,
    Detail: "Organization",
    CompleteDetail: "Simmmple Web LLC",
  },
];

const cardDataThree = [
  {
    id: 1,
    Detail: "Languages",
    CompleteDetail: "English, Spanish, Italian",
  },
  {
    id: 2,
    Detail: "Work History",
    CompleteDetail: "Google, Facebook",
  },
  {
    id: 3,
    Detail: "Birthday",
    CompleteDetail: "20 July 1986",
  },
];

const SecondProfileCard = () => {
  return (
    <Grid
      gap="4"
      gridTemplateRows={{ base: "1fr", md: "repeat(1, 1fr)" }}
      gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
    >
      {/* LeftSide Card   */}
      <Card mt="5" bgColor="#fff" borderRadius="2xl">
        <CardBody>
          <Box>
            <CardHeader
              px="0"
              color="gray.900"
              fontSize="2xl"
              fontWeight="bold"
            >
              All projects
            </CardHeader>
            <Text fontSize="md" fontWeight="normal" color="#a0aec0">
              Here you can find more details about your projects. Keep you user
              engaged by providing meaningful information.
            </Text>
          </Box>

          <Box>
            {cardData.map((data) => (
              <Flex
                key={data.id}
                //   bg="#fff"
                alignItems="center"
                justifyContent="space-between"
                boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
                borderRadius="2xl"
                bgColor="#fff"
                p="4"
                mb="5"
              >
                <Box>
                  <Image
                    w="66px"
                    h="66px"
                    borderRadius="2xl"
                    src={data.imageSrc}
                    alt="Wallpaper"
                  />
                </Box>
                <Box>
                  <Text color="Black" fontWeight="bold" fontSize="md" mb="2">
                    {data.name}
                  </Text>
                  <Text fontSize="sm" color="#a3aed0" fontWeight="normal">
                    {data.Project}
                  </Text>
                </Box>
                <Box color="#a3aed0" fontSize="sm" fontWeight="bold">
                  <MdEdit />
                </Box>
              </Flex>
            ))}
          </Box>
        </CardBody>
      </Card>

      {/* RightSide Card */}
      <Card mt="5" bgColor="#fff" borderRadius="2xl">
        <CardBody>
          <Box>
            <CardHeader
              px="0"
              color="gray.900"
              fontSize="2xl"
              fontWeight="bold"
            >
              General Information
            </CardHeader>
            <Text fontSize="md" fontWeight="normal" color="gray.400" mb="10">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all...
            </Text>
          </Box>
          <Flex gap="4" mt="4" w="100%">
            <Box w="50%">
              {cardDataTwo.map((data) => (
                <Flex
                  key={data.id}
                  alignItems="center"
                  justifyContent="space-between"
                  boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
                  p="4"
                  mb="5"
                  gap="4"
                  bgColor="#fff"
                  borderRadius="2xl"
                >
                  <Box>
                    <Text
                      color="gray.400"
                      fontWeight="normal"
                      fontSize="sm"
                      mb="2"
                    >
                      {data.Detail}
                    </Text>
                    <Text fontSize="md" color="gray.900" fontWeight="medium">
                      {data.CompleteDetail}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
            <Box w="50%">
              {cardDataThree.map((data) => (
                <Flex
                  key={data.id}
                  alignItems="center"
                  justifyContent="space-between"
                  boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
                  p="4"
                  mb="5"
                  gap="4"
                  bgColor="#fff"
                  borderRadius="2xl"
                >
                  <Box>
                    <Text
                      color="gray.400"
                      fontWeight="normal"
                      fontSize="sm"
                      mb="2"
                    >
                      {data.Detail}
                    </Text>
                    <Text fontSize="md" color="gray.900" fontWeight="medium">
                      {data.CompleteDetail}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </Grid>
  );
};
export default SecondProfileCard;
