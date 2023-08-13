import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Review = () => {
  return (
    <Stack divider={<Divider />}>
      <Box my="1rem" width={{ lg: "50%" }}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="md" color="gray.600" fontWeight="bold">
            Godrice Eichie
          </Text>
          <AiOutlineDelete />
        </Flex>
        <Text color="gray.600" mt="0.5rem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
      </Box>
    </Stack>
  );
};

export default Review;
