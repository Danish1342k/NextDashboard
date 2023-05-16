import React from "react";
import { Box, Text, Circle, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxLayout from "../../BoxLayout/BoxLayout";

const FirstCard = (props: any) => {
  const { cardData, isLeftIcon, isRightIcon, ...rest } = props;
  console.log("props", props);

  return (
    <BoxLayout {...rest}>
      <Flex
        direction="row"
        justifyContent="start"
        gap="10"
        align="center"
        p="15px 20px"
        h="20"
      >
        <Flex align="center">
          {isLeftIcon && (
            <Circle
              size="55px"
              bg="#f4f7fe"
              color="white"
              display={cardData.icon ? "flex" : "none"}
              alignItems="center"
              justifyContent="center"
            >
              <FontAwesomeIcon
                display={cardData.display}
                color="#422afb"
                icon={cardData.icon}
              />
            </Circle>
          )}
        </Flex>
        <Flex direction="column">
          <Text fontSize="sm" color="#a3aed0" fontWeight="medium">
            {cardData.title}
          </Text>
          <Text fontSize="20px" fontWeight="semibold" color="#1b2559">
            {cardData.amount}
          </Text>
          <Flex fontSize="xs" gap="1">
            <Text fontWeight="semibold" color="green.500">
              {cardData.percentage}
            </Text>
            <Text fontWeight="semibold" color="#a3aed0">
              {cardData.discription}
            </Text>
          </Flex>
        </Flex>
        {isRightIcon && (
          <Flex align="center" justifyContent="start">
            <Circle
              size="55px"
              bg="#f4f7fe"
              color="white"
              alignItems="center"
              justifyContent="center"
              fontSize="22px"
            >
              <FontAwesomeIcon color="#422afb" icon={cardData.icon} />
            </Circle>
          </Flex>
        )}
      </Flex>
    </BoxLayout>
  );
};

export default FirstCard;
