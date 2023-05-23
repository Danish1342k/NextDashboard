import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";

const Signin = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("Required First Name")
      .max(10, "Must be 10 characters or less")
      .matches(/^[a-zA-Z]+$/, "Letters only."),

    lastName: yup
      .string()
      .required("Required Last Name")
      .max(10, "Must be 10 characters or less")
      .matches(/^[a-zA-Z]+$/, "Letters only."),

    email: yup
      .string()
      .email("Invalid email address")
      .required("Required email"),

    password: yup.string().min(8).required("Required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required Confirm Password"),
  });

  const router = useRouter();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(values));
      console.log(values);
      setSubmitting(false);
      router.push("/login");
      // console.log(localStorage.getItem("user"));
    }, 400);
  };

  return (
    <Box>
      <Flex bg="#fff" color="black" pl="16" w="100%" minH="100vh">
        <Box w="40%" pr="12">
          <Heading mt="4" mb="2">
            Create An Account !
          </Heading>
          {/* <Text mb="6">Create An Account !</Text> */}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ values, isSubmitting, errors, touched }) => (
              <Form noValidate={true}>
                <FormControl>
                  <Flex gap="4">
                    <Field name="firstName">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            {...field}
                            name="firstName"
                            // color={errors.firstName ? "red" : "green"}
                            mb="5"
                            type="text"
                            pattern=".{8,}"
                            title="Password must be at least 8 characters long"
                            border="1px solid lightgray"
                            placeholder="First Name"
                            // onChange={(e) => setfirstName(e.target.value)}
                            _hover={{ borderColor: "none" }}
                            _placeholder={{ color: "gray" }}
                          />
                          <ErrorMessage name="firstName" />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="lastName">
                      {({ field }) => (
                        <FormControl isRequired>
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            {...field}
                            name="lastName"
                            // color={errors.firstName ? "red" : "green"}
                            mb="5"
                            type="text"
                            pattern=".{8,}"
                            title="Password must be at least 8 characters long"
                            border="1px solid lightgray"
                            placeholder="Last Name"
                            // onChange={(e) => setlastName(e.target.value)}
                            _hover={{ borderColor: "none" }}
                            _placeholder={{ color: "gray" }}
                          />
                          <ErrorMessage name="lastName" />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          // color={errors.firstName ? "red" : "green"}
                          mb="5"
                          type="text"
                          pattern=".{8,}"
                          title="Password must be at least 8 characters long"
                          border="1px solid lightgray"
                          placeholder="mail@horizon.com"
                          // onChange={(e) => setemail(e.target.value)}
                          _hover={{ borderColor: "none" }}
                          _placeholder={{ color: "gray" }}
                        />
                        <ErrorMessage name="email" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          // color={errors.firstName ? "red" : "green"}
                          mb="5"
                          type="text"
                          pattern=".{8,}"
                          title="Password must be at least 8 characters long"
                          border="1px solid lightgray"
                          placeholder="Min. 8 characters"
                          // onChange={(e) => setpassword(e.target.value)}
                          _hover={{ borderColor: "none" }}
                          _placeholder={{ color: "gray" }}
                        />
                        <ErrorMessage name="password" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ field }) => (
                      <FormControl isRequired>
                        <FormLabel>confirm Password</FormLabel>
                        <Input
                          {...field}
                          name="confirmPassword"
                          // color={errors.firstName ? "red" : "green"}
                          mb="5"
                          type="text"
                          pattern=".{8,}"
                          title="Password must be at least 8 characters long"
                          border="1px solid lightgray"
                          placeholder="Min. 8 characters"
                          // onChange={(e) => setconfirmPassword(e.target.value)}
                          _hover={{ borderColor: "none" }}
                          _placeholder={{ color: "gray" }}
                        />
                        <ErrorMessage name="confirmPassword" />
                      </FormControl>
                    )}
                  </Field>
                  <Field as={Checkbox} name="keepLoggedIn" defaultChecked>
                    I agree to the terms and conditions.
                  </Field>
                  <Field>
                    {({ field }) => (
                      <FormControl>
                        <Button
                          {...field}
                          type="submit"
                          isLoading={isSubmitting}
                          w="100%"
                          bgColor="#422afb"
                          color="#fff"
                          fontSize="sm"
                          fontWeight="medium"
                          boxShadow="rgba(112, 144, 176, 0.08) 45px 76px 113px"
                          _hover={{ background: "#422afb" }}
                          // onClick={handleCreteAccount}
                        >
                          <Link>Button</Link>
                        </Button>
                        {/* <ErrorMessage name="confirmPassword" /> */}
                      </FormControl>
                    )}
                  </Field>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
        <Box
          backgroundImage="url(https://horizon-ui.com/horizon-ui-chakra/static/media/auth.20d5979b439e1531640d.png)"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          borderBottomLeftRadius="200px"
          w="60%"
          minH="100%"
        ></Box>
      </Flex>
      <Box bgColor="#fff">
        <Footer />
      </Box>
    </Box>
  );
};

export default Signin;
