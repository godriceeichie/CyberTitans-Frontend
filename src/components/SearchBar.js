import { Flex, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'


const SearchBar = () => {
  return (
    <Flex w={{base: '100%', lg: '80%'}} >
      <Input placeholder='Search for plants and plant accesories..' _placeholder={{fontStyle: 'normal', padding: '0', color: '#9BA4B5'}} type='search' borderLeftRadius={'0.375rem'} borderRightRadius={'0'}  w={'90%'}/>
      <IconButton borderLeftRadius={'0'} borderRightRadius={'0.375rem'} bgColor={'brand.500'} icon={<SearchIcon color={'white'}/>}/>
    </Flex>
  )
}

export default SearchBar