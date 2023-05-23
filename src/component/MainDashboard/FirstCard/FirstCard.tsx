import React from "react";
import { Box, Text, Circle, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxLayout from "../../BoxLayout/BoxLayout";

const FirstCard = (props: any) => {
  const { cardData, isLeftIcon, isRightIcon, ...rest } = props;
  // console.log("props", props);

  return (
    <BoxLayout {...rest}>
      <Flex justifyContent="space-around" align="center" p="15px 20px" h="90px">
        <Flex align="center" mr="4">
          {isLeftIcon && (
            <Circle
              // size="55px"
              w="55px"
              h="55px"
              bg="#f4f7fe"
              color="white"
              display={cardData.icon ? "flex" : "none"}
              alignItems="center"
              justifyContent="center"
              fontSize="2xl"
            >
              <FontAwesomeIcon
                display={cardData.display}
                color="#422afb"
                icon={cardData.icon}
              />
            </Circle>
          )}
        </Flex>
        <Flex direction="column" flex="1">
          <Text
            fontSize="sm"
            color="#a3aed0"
            fontWeight="medium"
            lineHeight="100%"
          >
            {cardData.title}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold" color="#1b2559">
            {cardData.amount}
          </Text>
          <Flex fontSize="xs" gap="1">
            <Text fontWeight="bold" color="green.500" fontSize="xs">
              {cardData.percentage}
            </Text>
            <Text fontWeight="semibold" fontSize="xs" color="#a3aed0">
              {cardData.discription}
            </Text>
          </Flex>
        </Flex>
        {isRightIcon && (
          <Flex align="center" justifyContent="start" w="60px">
            <Circle
              // size="55px"
              w="55px"
              h="55px"
              bg="#f4f7fe"
              color="white"
              alignItems="center"
              justifyContent="center"
              fontSize="2xl"
            >
              <FontAwesomeIcon
                fontSize="2xl"
                color="#422afb"
                icon={cardData.icon}
              />
            </Circle>
          </Flex>
        )}
      </Flex>
    </BoxLayout>
  );
};

export default FirstCard;
