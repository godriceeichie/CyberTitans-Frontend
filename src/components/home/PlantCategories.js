import { Box, Grid, GridItem, Heading, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import floweringPlant from '../../assets/flowered-plant.jpeg'
import nonFloweringPlant from '../../assets/nonflowering-plants.webp'
import indoorPlant from '../../assets/indoor-plant.jpg'
import outdoorPlant from '../../assets/outdoor-plants.jpeg'
import succulentPlants from '../../assets/succulent-plants.jpg'
import medicinalPlant from '../../assets/medicinal-plant.jpg'
import { Link } from 'react-router-dom'

const PlantCategories = () => {
    const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    };
  return (
    <Box as='section' my={'24'} p={'0'} px={{base: '10', lg:'48'}}>
        <Heading 
            textAlign={'center'} 
            mb={'3'}
            fontWeight={'extrabold'} 
            fontSize={'30px'}
            position={'relative'}
            pb={'7px'}
            _before={{
                content: '" "',
                position: 'absolute',
                bottom: '0',
                top: '100%',
                left: '50%',
                width: '66px',
                height: '2px',
                bgColor: 'brand.500',
                transform: 'translate(-50%)',
                  
            }}
        >
            Featured Categories
        </Heading>
        <Text fontSize={{base: 'md'}} textAlign={'center'} color={'#999'} letterSpacing={'-0.0075rem'} lineHeight={'160%'} as={'p'}>
            Explore a curated range of featured categories that embody the essence of our passion for plants. Each category offers a unique blend of nature's wonders, thoughtfully selected to transform your surroundings into a thriving oasis. 
        </Text>
        <Grid mt={'10'} templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} templateRows={{md: 'repeat(3, 1fr)'}} gap={'6'}>
            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'}>
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={nonFloweringPlant}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Non-flowering Plants</Text>
                </LinkOverlay>
            </GridItem>

            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}}  rowSpan={{md: 2}}  position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={indoorPlant}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Indoor Plants</Text>
                </LinkOverlay>
            </GridItem>
            
            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'}>
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={outdoorPlant}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Outdoor Plants</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} >
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={succulentPlants}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Succulents</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} >
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={medicinalPlant}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Medicinal Plants</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} colSpan={{md: 3}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} >
                <LinkOverlay 
                    as={Link} 
                    to={'/products'} 
                    borderRadius={{base: '2xl', md: 'none'}}  
                    style={overlayStyles} 
                    display={'flex'} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'100%'} 
                        position='absolute'
                        objectFit={'cover'}
                        top='0'
                        left='0'
                        width='100%'
                        height='100%'
                        src={floweringPlant}
                        sx={{filter: 'brightness(60%)'}}
                        transition={'0.65s'}
                        _hover={{
                            transform: 'scale(1.2)'
                        }}
                    />
                    <Text fontSize={'xl'} color={'white'} zIndex={'3'}>Flowering Plants</Text>
                </LinkOverlay>
            </GridItem>
            
        </Grid>
    </Box>
  )
}

export default PlantCategories