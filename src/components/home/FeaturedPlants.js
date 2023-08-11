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
      <Flex flexDirection={{base: 'column', lg: 'row'}} gap={'1.75rem'}>
        <FeaturedPlant  data={{price: '$30', category: 'Outdoor'}}/>
        <FeaturedPlant data={{price: '$20', category: 'Indoor'}}/>
      </Flex>
    </Box>
  );
};

export default FeaturedPlants;
