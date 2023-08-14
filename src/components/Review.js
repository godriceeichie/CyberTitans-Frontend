import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import instance from "../config/api";
import { useParams } from "react-router";

const Review = () => {
    const { id} = useParams()
    useEffect(() => {
        
        instance.get(`/api/v1/reviews/single-product-review/${id}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbW1hZWljaGllQGdtYWlsLmNvbSIsImlhdCI6MTY5MTg1NzQ0NSwiZXhwIjoxNjk3OTE1NDQ1fQ.wX-CTTBTSCHbl3aCdIFs4i7Msl8GGnmnbij4eaXbIiCpWZQungpB1RNxyDeiM52h'
            }
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <Stack divider={<Divider />}>
      <Box my="1rem" width={{ lg: "50%" }}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="md" color="gray.600" fontWeight="bold">
            Godrice Eichie
          </Text>
          
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
