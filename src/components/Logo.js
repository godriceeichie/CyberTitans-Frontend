import { Heading } from '@chakra-ui/react'
import React from 'react'

const Logo = ({fontSize}) => {
  return (
    <Heading fontFamily={'cursive'} color={'brand.500'} fontSize={'35px' || fontSize}>GreenHub</Heading>
  )
}

export default Logo