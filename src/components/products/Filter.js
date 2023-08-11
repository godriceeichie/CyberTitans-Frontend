import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import FilterAccordion from '../FilterAccordion'

const Filter = () => {
  return (
    <Stack hideBelow={'lg'}>
      <Heading fontSize={'2xl'} mb={'2.5'}>
          Filter
      </Heading>
      <Flex direction={'column'} >
        <FilterAccordion />
        <Button bg={'brand.500'} color={'white'} mt={'3.5'}>Filter</Button>
      </Flex>
      
    </Stack>
  )
}

export default Filter