import { Card, Flex, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft5.62dbaf7dd91b4180035c.png",
    name: "Colorful Heaven",
    artist: "Mark Benjamin",
    timeAgo: "30s",
  },
  {
    id: 2,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png",
    name: "Abstract Colors",
    artist: "Esthera Jackson",
    timeAgo: "58s",
  },
  {
    id: 3,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft2.7897c45d2601ee3adfb5.png",
    name: "ETH AI Brain",
    artist: " Nick Wilson",
    timeAgo: "1m",
  },
  {
    id: 4,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft4.5fc37877b25c9fb9a52d.png",
    name: "Swipe Circles",
    artist: " Peter Will",
    timeAgo: "1m",
  },
  {
    id: 5,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
    name: "Mesh Gradients",
    artist: "Will Smith",
    timeAgo: "2m",
  },
  {
    id: 6,
    imageSrc:
      "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft6.9ff5403226e81a6fd390.png",
    name: "3D Cubes Art",
    artist: "Manny Gates",
    timeAgo: "3m",
  },
];

const HistoryCards = () => {
  return (
    <Card shadow="none" mt="6">
      <Flex
        bgColor="#fefeff"
        p="4"
        justifyContent="space-between"
        boxShadow="rgba(112, 144, 176, 0.26) 0px 40px 58px -20px"
      >
        <Text fontSize="xl" fontWeight="bold" color="#1b254b">
          History
        </Text>
        <Button
          borderRadius="full"
          color="#422afb"
          boxShadow="box-shadow: rgba(112, 144, 176, 0.08) 45px 76px 113px"
          bgColor="gray.300"
          fontSize="md"
          fontWeight="medium"
        >
          See all
        </Button>
      </Flex>
      <Box>
        {cardData.map((data) => (
          <Flex
            key={data.id}
            bg="#fff"
            alignItems="center"
            justifyContent="space-between"
            p="4"
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
                BY {data.artist}
              </Text>
            </Box>
            <Flex alignItems="center" gap="2">
              <Box color="black">
                <FaEthereum />
              </Box>
              <Box color="Black" fontWeight="bold" fontSize="md">
                <Text>0.91</Text>
                <Text>Eth</Text>
              </Box>
            </Flex>
            <Box color="#a3aed0" fontSize="sm" fontWeight="bold">
              <Text>{data.timeAgo}</Text>
              <Text>ago</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Card>
  );
};
export default HistoryCards;
