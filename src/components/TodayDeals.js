import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import SwiperContainer from './SwiperContainer'


const TodayDeals = () => {
  return (
    <Box as='section' px={'14'}>
      <Heading 
        textAlign={'center'} 
        mb={'10'} 
        fontWeight={'semibold'} 
        fontSize={'2xl'}
        position={'relative'}
        pb={'10px'}
        color={'textColor.400'}
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
        Today's Deals
      </Heading>
      <SwiperContainer />

    </Box>
  )
}

export default TodayDeals