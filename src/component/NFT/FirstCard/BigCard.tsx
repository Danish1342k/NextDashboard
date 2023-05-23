import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import BoxLayout from "../../BoxLayout/BoxLayout";

const BigCard = (props: any) => {
  const { ...rest } = props;
  return (
    <BoxLayout {...rest}>
      <Card
        align="start"
        backgroundImage="url(//horizon-ui.com/horizon-ui-chakra/static/media/NftBanner1.87062366f75bedd52bd2.png)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        p="10"
        maxWidth="100%"
        borderRadius="3xl"
      >
        <CardHeader>
          <Heading
            color="#fff"
            fontSize="3xl"
            fontWeight="medium"
            maxWidth="70%"
          >
            Discover, collect, and sell extraordinary NFTs
          </Heading>
        </CardHeader>
        <CardBody>
          <Text
            color="rgb(227, 218, 255)"
            fontWeight="500"
            fontSize="md"
            maxWidth="56%"
            mb="9"
          >
            Enter in this creative world. Discover now the latest NFTs or start
            creating your own!
          </Text>
        </CardBody>
        <CardFooter>
          <Flex gap="4" alignItems="center">
            <Button bg="#fff" color="black" borderRadius="2xl">
              Discover now
            </Button>
            <Text color="#fff" fontWeight="medium" fontSize="sm">
              Watch video
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </BoxLayout>
  );
};
export default BigCard;
