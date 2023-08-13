import { Flex, IconButton, Input, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import queryAtom from '../states/atoms/queryAtom'
import { useRecoilState } from 'recoil'
import { Link as RouterLink } from 'react-router-dom'


const SearchBar = () => {
  const [query, setQuery]= useRecoilState(queryAtom)
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  return (
    <Flex w={{base: '100%', lg: '80%'}} >
      <Input placeholder='Search for plants and plant accesories..' onChange={handleInputChange} _placeholder={{fontStyle: 'normal', padding: '0', color: '#9BA4B5'}} type='search' borderLeftRadius={'0.375rem'} borderRightRadius={'0'}  w={'90%'}/>
      <Link as={RouterLink } display={'flex'} alignItems={'center'} justifyContent={'center'} to={'/products'} borderLeftRadius={'0'} borderRightRadius={'0.375rem'} bgColor={'brand.500'} w={'10%'}>
        <SearchIcon color={'white'}/>
      </Link>
    </Flex>
  )
}

export default SearchBar