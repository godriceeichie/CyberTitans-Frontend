import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({show}) => {
  return (
    <Heading display={show ? 'none' : 'block'} as={Link} to={'/'} fontFamily={'cursive'} color={'brand.500'} fontSize={{base: '30px', lg: '35px'}}>PlantNest</Heading>
  )
}

export default Logo