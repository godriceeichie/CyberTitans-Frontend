import { Button, Flex, Heading, Stack, filter } from '@chakra-ui/react'
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
        
      </Flex>
      
    </Stack>
  )
}

export default Filter;