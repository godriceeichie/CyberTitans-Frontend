import { Box, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Text, useCheckbox } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import products from '../../data/products'
import ProductCard from '../ProductCard'
import { ChevronDownIcon } from '@chakra-ui/icons'
import instance from '../../config/api'

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    instance.get('/api/v1/user/getAllProducts')
      .then((response) => {
        console.log(response.data.content)
        setProducts([...response.data.content])
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <Box px={{lg: '8'}}>
      <Heading fontSize={'2xl'}>
        Products
      </Heading>
      <Flex direction={{base: 'column', md: 'row'}} justifyContent={'space-between'} alignItems={{lg: 'center'}}>
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
            <Flex alignItems={'center'} justifyContent={{base: 'space-between', md: 'normal'}} gap={'1'}>
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
      <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={'4'} rowGap={'4'} mt={'3'}>
        {
            products.map(({id, image, productName, productPrice }) => {
              return(
                <GridItem w={'100%'} key={id}>
                  <ProductCard id={id} name={productName} image={image} price={productPrice} />
                </GridItem>
              )
            })
        }
      </Grid>
    </Box>
  )
}

export default ProductList