import { Box, Grid, GridItem, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import floweringPlant from '../../assets/flowered-plant.jpeg'
import nonFloweringPlant from '../../assets/nonflowering-plants.webp'
import indoorPlant from '../../assets/indoor-plant.jpg'
import outdoorPlant from '../../assets/outdoor-plants.jpeg'
import succulentPlants from '../../assets/succulent-plants.jpg'
import medicinalPlant from '../../assets/medicinal-plant.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
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
            mb={'10'} 
            fontWeight={'semibold'} 
            fontSize={'2xl'}
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
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} templateRows={{md: 'repeat(3, 1fr)'}} gap={'6'}>
            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} bgImage={nonFloweringPlant} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}}  style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Non-flowering Plants</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}}  rowSpan={{md: 2}}  position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgImage={indoorPlant} bgColor={'red'} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}} style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Indoor Plants</Text>
                </LinkOverlay>
            </GridItem>
            
            <GridItem as={LinkBox} borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} bgImage={outdoorPlant} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}} style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Outdoor Plants</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} bgImage={succulentPlants} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}} style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Succulents</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} bgImage={medicinalPlant} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}} style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Medicinal</Text>
                </LinkOverlay>
            </GridItem>
            <GridItem borderRadius={{base: '2xl', md: 'none'}} colSpan={{md: 3}} position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={'36'} bgImage={floweringPlant} bgSize={'cover'} bgPosition={'center'} bgRepeat={'no-repeat'}>
                <LinkOverlay as={Link} to={'/contact'} borderRadius={{base: '2xl', md: 'none'}} style={overlayStyles} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'xl'} color={'white'}>Flowering Plants</Text>
                </LinkOverlay>
            </GridItem>
            
        </Grid>
    </Box>
  )
}

export default Categories