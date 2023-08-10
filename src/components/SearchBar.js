import { Flex, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import searchIcon from '../assets/searchIcon.svg'
import { SearchIcon } from '@chakra-ui/icons'


const SearchBar = () => {
  return (
    <Flex w={'40%'} >
        <Input placeholder='Search for plants and plant accesories..' _placeholder={{fontStyle: 'normal'}} type='search' borderLeftRadius={'40px'} borderRightRadius={'0'}  w={'90%'}/>
        <IconButton borderLeftRadius={'0'} borderRightRadius={'40px'} bgColor={'brand.500'} icon={<SearchIcon color={'white'}/>}/>
    </Flex>
  )
}

export default SearchBar