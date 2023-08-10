
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useSwiper } from 'swiper/react'

const SwiperNavButtons = () => {
  const swiper = useSwiper()
  return (
    <Flex w={'100%'} mt={'5'} bgColor={'brand.500'} justifyContent={'space-between'} alignItems={'center'} p={1}>
      <IconButton 
        onClick={() => swiper.slidePrev()} 
        borderRadius={'50%'} 
        size={'md'} 
        icon={<ArrowBackIcon />}
      />
      <IconButton 
        onClick={() => swiper.slideNext()} 
        size={'md'} 
        borderRadius={'50%'} 
        icon={<ArrowForwardIcon />}
      />
    </Flex>
  )
}

export default SwiperNavButtons