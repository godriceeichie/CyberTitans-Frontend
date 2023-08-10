import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({fontSize}) => {
  return (
    <Heading as={Link} to={'/'} fontFamily={'cursive'} color={'brand.500'} fontSize={'35px' || fontSize}>PlantNest</Heading>
  )
}

export default Logo