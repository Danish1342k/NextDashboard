import React from "react";
import TableCard from "../Table/TableCard";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  AvatarGroup,
  Avatar,
  Box,
  Grid,
  Center,
  Square,
  Circle,
  Flex,
  Link,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <Flex>
        <Box>
          <Box maxWidth="100%">
            <Flex justifyContent="space-between" mt="12" mb="5">
              <Box>
                <Text fontSize="2xl" color="#1b2559" ml="5">
                  Trending NFTs
                </Text>
              </Box>
              <Flex
                w="50%"
                color="#422afb"
                fontWeight="medium"
                justifyContent="space-around"
              >
                <Link>Art</Link>
                <Link>Music</Link>
                <Link>Collectibles</Link>
                <Link>Sports</Link>
              </Flex>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                    position="relative"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button
                    py="5px"
                    color="#fff"
                    bgColor="#11047a"
                    fontSize="sm"
                    borderRadius="full"
                    w="80%"
                    boxShadow="rgba(112, 144, 176, 0.08) 45px 76px 113px 7px"
                    _hover={{ background: "#11047a" }}
                  >
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" bgColor="#11047a" borderRadius="full">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" bgColor="#11047a" borderRadius="full">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </Box>
          <Box maxWidth="100%">
            <Box mt="12" mb="8">
              <Text fontSize="2xl" color="#1b2559" ml="5">
                Recently Added
              </Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                    position="relative"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" bgColor="#11047a" borderRadius="full">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" bgColor="#11047a" borderRadius="full">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
              <Card shadow="none" mt="5" bgColor="#fff">
                <CardBody>
                  <Image
                    src="https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png"
                    alt="Green double couch with wooden legs"
                    borderRadius="3xl"
                  />
                  <Circle
                    size="30px"
                    bg="#fff"
                    color="#422afb"
                    position="absolute"
                    top="30px"
                    right="30px"
                  >
                    <FaHeart />
                  </Circle>
                  <Stack mt="6" spacing="3">
                    <Heading color="#1b254b" fontWeight="medium" fontSize="lg">
                      Abstract Colors
                    </Heading>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                      By Esthera Jackson
                    </Text>
                    <AvatarGroup size="md" max={3}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar2.5692c39db4f8c0ea999e.png"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar3.9f646ac5920fa40adf00.png"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontSize="sm" fontWeight="bold" color="#422afb">
                      Current Bid: 0.91 ETH
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" bgColor="#11047a" borderRadius="full">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default Cards;
