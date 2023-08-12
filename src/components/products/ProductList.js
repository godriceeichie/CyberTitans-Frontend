import { Box, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Text, useCheckbox } from '@chakra-ui/react'
import React from 'react'
import products from '../../data/products'
import ProductCard from '../ProductCard'
import { ChevronDownIcon } from '@chakra-ui/icons'

const ProductList = () => {
  
  return (
    <Box px={{lg: '8'}}>
      <Heading fontSize={'2xl'}>
        Products
      </Heading>
      <Flex direction={{base: 'column', lg: 'row'}} justifyContent={'space-between'} alignItems={{lg: 'center'}}>
        <Text my={'3'} color={'secondTextColor.400'} fontSize={{base: 'sm', lg: 'md'}}>Over 100+ plants and accesories here, find it now!</Text>
        <Menu >  
          <MenuButton
            px={4}
            py={1}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            borderColor={'brand.500'}
            _hover={{ bg: 'brand.500', '.sort-by': {color: 'white'} }}
            // _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
            w={'auto'}
            
          >
            <Flex alignItems={'center'} justifyContent={{base: 'space-between', lg: 'normal'}} gap={'1'}>
              <Text className='sort-by' color={'brand.500'} fontWeight={'medium'}>Sort By</Text> 
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Newest</MenuItem>
            <MenuItem>Price: Low To High</MenuItem>
            <MenuItem>Price: High To Low</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={'2'} rowGap={'4'} mt={'3'}>
        {
            products.map(({index, image, name, price, discountPrice}) => {
              return(
                <GridItem w={'100%'} key={index}>
                  <ProductCard name={name} image={image} price={price} discountPrice={discountPrice} />
                </GridItem>
              )
            })
        }
      </Grid>
    </Box>
  )
}

export default ProductList