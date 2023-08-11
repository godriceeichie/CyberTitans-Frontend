import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import FeaturedPlant from "../FeaturedPlant";

const FeaturedPlants = () => {
  return (
    <Box
      as={"section"}
      w={"100%"}
      p={"0"}
      my={"24"}
      px={{ base: "10", lg: "24" }}
    >
      <Flex gap={'1.75rem'}>
        <FeaturedPlant  data={{price: '$30'}}/>
        <FeaturedPlant data={{price: '$20'}}/>
      </Flex>
    </Box>
  );
};

export default FeaturedPlants;
