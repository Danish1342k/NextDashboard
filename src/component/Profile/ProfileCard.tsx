// import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Card,
  CardBody,
  Box,
  Image,
  Stack,
  Text,
  CardFooter,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Progress,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

// import { Progress } from "@chakra-ui/react";
const ProfileCard = () => {
  return (
    <Grid
      gap="5"
      gridTemplateRows={{ base: "repeat(3, 1fr)", md: "1fr" }}
      gridTemplateColumns={{ base: "1fr", md: "1.34fr 1fr 1.62fr" }}
      // grid-template-rows: repeat(3, 1fr);
      // grid-template-columns: 1fr;
    >
      <Card mt="5" bgColor="#fff" pb="4" mt="0">
        <CardBody>
          <Image
            src="https://horizon-ui.com/horizon-ui-chakra/static/media/banner.80db2a895510dd2719aa.png"
            alt="Green double couch with wooden legs"
            borderRadius="3xl"
            h="180px"
            w="100%"
            position="relative"
          />
          <Avatar
            w="80px"
            h="80px"
            border="2px solid #fff"
            size="30px"
            bg="#fff"
            color="#422afb"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -50%)"
            name="Dan Abrahmov"
            src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar4.54d5c1de851c273b2cd9.png"
          />
          <Stack mt="16" spacing="3" textAlign="center">
            <Text color="#1b254b" fontWeight="medium" fontSize="lg">
              Abstract Colors
            </Text>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              By Esthera Jackson
            </Text>
          </Stack>
        </CardBody>
        <CardFooter
          p="0"
          dir="flex"
          justifyContent="space-around"
          textAlign="center"
        >
          <Box>
            <Text fontSize="2xl" color="gray.900" fontWeight="bold">
              17
            </Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Posts
            </Text>
          </Box>
          <Box>
            <Text fontSize="2xl" color="gray.900" fontWeight="bold">
              9.7k
            </Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Followers
            </Text>
          </Box>
          <Box>
            <Text fontSize="2xl" color="gray.900" fontWeight="bold">
              274
            </Text>
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              Following
            </Text>
          </Box>
        </CardFooter>
      </Card>
      <Card mt="5" bgColor="#fff" py="4" mt="0" pos="relative">
        <Flex justifyContent="end" p="2">
          <Menu>
            <MenuButton
              pb="4"
              w="37px"
              h="37px"
              bg="#f4f7fe"
              color="#422afb"
              borderRadius="4"
              fontSize="3xl"
            >
              ...
            </MenuButton>
            <MenuList bg="#fff">
              <MenuItem bg="#fff" color="gray.900">
                Panel 1
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 2
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 3
              </MenuItem>
              <MenuItem bg="#fff" color="gray.900">
                panel 4
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <CardBody>
          <Avatar
            w="80px"
            h="60px"
            border="2px solid #fff"
            size="30px"
            bgColor="#f4f7fe"
            color="#f4f7fe"
            position="absolute"
            top="50%"
            right="50%"
            transform="translate(50%, -230%)"
            name="Dan Abrahmov"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzmwpezGzmSaGURnhvpp7lWtr84ObV_h5LXOYJTWJ5w&usqp=CAU&ec=48665699"
          />
          <Stack mt="16" spacing="3" textAlign="center">
            <Text color="#1b254b" fontWeight="medium" fontSize="lg">
              Your storage
            </Text>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              Supervise your drive space in the easiest way
            </Text>
          </Stack>
        </CardBody>
        <Box p="4">
          <Flex
            w="100%"
            justifyContent="space-between"
            textAlign="center"
            color="black"
          >
            <Text>25.6 GB</Text>
            <Text>50 GB</Text>
          </Flex>
          <Box w="100%" color="black">
            <Text>50 GB</Text>
            <Progress value={80} bgColor="gray" borderRadius="full" />
          </Box>
        </Box>
      </Card>
      <Card bgColor="#fff" p="4" pos="relative">
        <Card bgColor="#fafcfe" px="4" py="2">
          <Stack textAlign="center">
            <Flex fontSize="7xl" color="#422afb" justifyContent="center">
              <FaUpload />
            </Flex>
            <Box>
              <Heading fontSize="2xl" fontWeight="bold" mt="5" color="#1b2559">
                Upload Files
              </Heading>
              <Text py="2" color="#a0aec0" fontWeight="medium" fontSize="md">
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          </Stack>
        </Card>
        <CardBody>
          <Stack textAlign="start">
            <Text color="#1b254b" fontWeight="medium" fontSize="lg">
              Complete your profile
            </Text>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              Stay on the pulse of distributed projects with an anline
              whiteboard to plan, coordinate and discuss
            </Text>
          </Stack>
        </CardBody>
        <Box px="4" borderRadius="2xl">
          <Button variant="solid" bgColor="#422afb" borderRadius="3xl">
            Publish now
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};
export default ProfileCard;
