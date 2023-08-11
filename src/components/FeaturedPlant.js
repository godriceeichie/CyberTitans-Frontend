import React from 'react'
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

const FeaturedPlant = ({data}) => {
  return (
    <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled"
        bgColor={'#f9f9f9'}
    >
        <Stack>
            <CardBody>
                <Heading size="md">The perfect latte</Heading>

                <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
                </Text>
            </CardBody>

            <CardFooter>
                <Text>{data.price}</Text>
            </CardFooter>
        </Stack>
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
            alt='Caffe Latte'
        />

    </Card>
  )
}

export default FeaturedPlant