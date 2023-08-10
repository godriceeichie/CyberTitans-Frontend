import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import bg from '../assets/leaf-background-wallpaper-tropical-vector-green-indoor-plant_53876-136757.avif'
import bg from '../assets/ekrem-osmanoglu-SqUZtDv3avM-unsplash.jpg'
import smallbg from '../assets/small_hero_bg.jpg'
import { Link as RouterLink } from 'react-router-dom'

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
    <Box pos={'relative'} w={'100%'} height={'500px'} >
        <Box pos={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            height={'100%'}
            backgroundImage={bg}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
        >

            <Box style={overlayStyles} >
                <VStack px={{base: "4", lg: '8.75rem'}} justifyContent={'center'} alignItems={{base: 'center', lg:'flex-start'}} height={'100%'}>
                    <Heading color={'white'} fontSize={{base: '2.5rem', lg: '5xl'}} w={{lg: '50%'}} textAlign={{base: 'center', lg: 'left'}}>
                        Discover the Beauty of Nature
                    </Heading>
                    <Text color={'#e2e2e2'} w={{lg: '50%'}} fontSize={'lg'} fontWeight={'medium'} textAlign={{base: 'center', lg: 'left'}}> Embark on a Journey Through Our Exquisite Collection of Plants and Enchanting Plant Accessories</Text>
                    <Link as={RouterLink} fontSize={'md'} fontWeight={'semibold'} borderRadius={'.375rem'} bg={'brand.600'} color={'white'} mt={'8'} py={'0.5rem'} px={'6'}>Shop Now</Link>
                    {/* <Link bg={'brand.600'} >Shop Now</Link> */}
                </VStack>
            </Box>
        </Box>
        
        
    </Box>
  )
}

export default Hero