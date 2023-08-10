import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import deliveryIcon from '../assets/deliveryIcon.svg'
import paymentIcon from '../assets/secure-payment-icon.svg'
import qualityIcon from '../assets/best-quality.svg'

const Benefits = () => {
  return (
    <Box as='section' px={'48'} my={'20'}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)',lg: 'repeat(3, 1fr)'}} gap={{lg: '6rem'}} alignItems={'center'}>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={deliveryIcon} w={'24'}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Quick Delivery</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ducimus aspernatur
                        nostrum esse, non atque incidunt.
                    </Text>
                </Stack>
            </GridItem>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={paymentIcon} w={'16'}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Quick Delivery</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ducimus aspernatur
                        nostrum esse, non atque incidunt.
                    </Text>
                </Stack>
            </GridItem>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={qualityIcon} w={'14'}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Quick Delivery</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ducimus aspernatur
                        nostrum esse, non atque incidunt.
                    </Text>
                </Stack>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Benefits