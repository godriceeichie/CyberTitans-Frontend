import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import deliveryIcon from '../assets/deliveryIcon.svg'
import paymentIcon from '../assets/secure-payment-icon.svg'
import qualityIcon from '../assets/best-quality.svg'

const Benefits = () => {
  return (
    <Box as='section' px={{base: '10', lg: '48'}} my={'20'}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: '10', lg: '24'}} alignItems={'center'}>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={deliveryIcon} w={{base: '20', lg: '24'}}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Quick Delivery</Heading>
                    <Text color={'secondTextColor.400'} fontSize={{base: '15px'}}>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ducimus aspernatur
                        nostrum esse, non atque incidunt.
                    </Text>
                </Stack>
            </GridItem>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={paymentIcon} w={'16'}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Secure Payment</Heading>
                    <Text color={'secondTextColor.400'} fontSize={{base: '15px'}}>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ducimus aspernatur
                        nostrum esse, non atque incidunt.
                    </Text>
                </Stack>
            </GridItem>
            <GridItem as={Stack} gap={'1.54rem'} w={'100%'}>
                <Image src={qualityIcon} w={'14'}/>
                <Stack gap={'0.85rem'}>
                    <Heading as={'h4'} fontSize={'xl'} color={'textColor.400'}>Best Quality</Heading>
                    <Text color={'secondTextColor.400'} fontSize={{base: '15px'}}>
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