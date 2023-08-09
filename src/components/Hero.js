import { Box } from '@chakra-ui/react'
import React from 'react'
// import bg from '../assets/leaf-background-wallpaper-tropical-vector-green-indoor-plant_53876-136757.avif'
import bg from '../assets/ekrem-osmanoglu-SqUZtDv3avM-unsplash.jpg'
import smallbg from '../assets/small_hero_bg.jpg'

const Hero = () => {
  return (
    <Box w={'100%'} height={'500px'} backgroundImage={bg}  bgPosition={'center'} bgRepeat={'no-repeat'} bgColor={'black'} opacity={'.5'}>
        
    </Box>
  )
}

export default Hero