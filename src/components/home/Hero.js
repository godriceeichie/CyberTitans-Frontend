import { Box, Flex, Grid, Heading, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import bg from '../../assets/ekrem-osmanoglu-SqUZtDv3avM-unsplash.jpg'
import { Link as RouterLink } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import SearchBar from '../SearchBar'
import heroImg from '../../assets/hero-bg.png'

const Hero = () => {
    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    };
  return (
    <Box w={'100%'} height={'500px'}  >
        <Grid maxW={'1500px'} mx={'auto'} templateColumns={{base: 'repeat(1, fr)', md: 'repeat(2, 1fr)'}} height={'100%'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} py={{base: '20'}} height={'100%'}>
                <Flex flexDirection={'column'} gap={'2rem'} justifyContent={'center'} px={{base: '10', lg: '14'}} alignItems={{base: 'center', md:'flex-start'}} height={'100%'}>
                    <VStack p={'0'}>
                        <Heading mb={'0'} color={'black'} fontSize={{base: '2rem', lg: '5xl'}} textAlign={{base: 'center', md: 'left'}}>
                            Delivering <Text as={'span'} color={'brand.500'}>Plants</Text>,
                            
                            Delivering <Text as={'span'} color={'brand.500'}>Happiness</Text>
                        </Heading>
                        <Text color={'#9BA4B5'} fontSize={{base: 'md',md: 'lg'}} fontWeight={'medium'} textAlign={{base: 'center', md: 'left'}}> Embark on a Journey Through Our Exquisite Collection of Plants and Enchanting Plant Accessories</Text>
                    </VStack>
                    <SearchBar />
                    
                </Flex>
            </Box>
            <Box hideBelow={'md'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Image src={heroImg} height={'500px'} mx={'auto'}/>
            </Box>
        </Grid>
    </Box>
    
  )
}

export default Hero