import { useState } from "react";
import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
} from "@chakra-ui/react";

// import { FaGoogle } from "react-icons/fa";
import Footer from "../component/Footer/Footer";

// localStorage.getItem("user");

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      console.log("Login successful!");
      // router.push("/Dashboard");
    } else {
      console.log("Invalid email or password");
      // router.push("/login");
    }
  };

  return (
    <>
      <Box>
        <Flex bg="#fff" color="black" pl="20" w="100%" minH="100vh">
          <Box w="40%" pr="16" pt="20">
            {/* <Box my="6">
              <Link href="/Dashboard">Back to Simmmple</Link>
            </Box> */}
            <Heading mb="2">Sign In</Heading>
            <Text>Enter your email and password to sign in!</Text>
            {/* <HStack>
              <Button
                my="4"
                gap="4"
                w="100%"
                p="4"
                fontWeight="medium"
                bgColor="#f4f7fe"
                borderRadius="3xl"
                color="#1b254b"
              >
                <Box color="#1b254b">
                  <FaGoogle />
                </Box>
                <Link href="https://accounts.google.com/v3/signin/identifier?dsh=S-1441900902%3A1684735301750293&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&ifkv=Af_xneGEZ8lAx2So4ahkhBrD402rbHiVo52SSvpYOseUuOdrA7P-duIpX-p9_NAdS6LWDHM6AOFuQg&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                  Sign in with Google
                </Link>
              </Button>
            </HStack> */}
            {/* <Flex alignItems="center" mb="6">
              <Text h="2px" w="100%" bgColor="rgba(135, 140, 189, 0.3)"></Text>
              <Text mx="2">OR</Text>
              <Text h="2px" w="100%" bgColor="rgba(135, 140, 189, 0.3)"></Text>
            </Flex> */}
            <FormControl isRequired>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  mb="5"
                  type="email"
                  // pattern=".{8,}"
                  // title="Password must be at least 8 characters long"
                  border="1px solid lightgray"
                  placeholder="mail@horizon.com"
                  onChange={handleEmailChange}
                  _hover={{ borderColor: "none" }}
                  _placeholder={{ color: "gray" }}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  mb="5"
                  type="password"
                  border="1px solid lightgray"
                  placeholder="Min. 8 characters"
                  onChange={handlePasswordChange}
                  _hover={{ borderColor: "none" }}
                  _placeholder={{ color: "gray" }}
                />
              </Box>
              <Flex py="2" justifyContent="space-between">
                <Box>
                  <Checkbox defaultChecked>Keep me logged in</Checkbox>
                </Box>
                <Box>
                  <Text>Forgot password?</Text>
                </Box>
              </Flex>
              <Button
                type="submit"
                w="100%"
                bgColor="#422afb"
                color="#fff"
                fontSize="sm"
                fontWeight="medium"
                boxShadow="rgba(112, 144, 176, 0.08) 45px 76px 113px"
                onClick={handleFormSubmit}
                _hover={{ background: "#422afb" }}
              >
                <Link href="/Dashboard"> Button </Link>
              </Button>
            </FormControl>
            <Flex py="2" justifyContent="start">
              <Box>
                <Text>Not registered yet?</Text>
              </Box>
              <Box>
                <Text>Create an Account</Text>
              </Box>
            </Flex>
          </Box>
          <Box
            backgroundImage="url(https://horizon-ui.com/horizon-ui-chakra/static/media/auth.20d5979b439e1531640d.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            borderBottomLeftRadius="200px"
            w="60%"
            minH="100%"
            //   px="4"
          ></Box>
        </Flex>
        <Box bgColor="#fff">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Login;
