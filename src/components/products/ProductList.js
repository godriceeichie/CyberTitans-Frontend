import { Box, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Spinner, Text, useCheckbox } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import products from '../../data/products'
import ProductCard from '../ProductCard'
import { ChevronDownIcon } from '@chakra-ui/icons'
import instance from '../../config/api'
import useProductsContext from '../../hooks/useProducts'
import queryAtom from '../../states/atoms/queryAtom'
import { useRecoilState } from 'recoil'

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true) 
  const [query, setQuery]= useRecoilState(queryAtom)
  const { products, setProducts} = useProductsContext()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filteredItems, setFilteredItems] = useState(products.filter((product) => product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1))
  
  console.log(filteredProducts)

  useEffect(() => {
    instance.get('/api/v1/user/getAllProducts')
      .then((response) => {
        // console.log(response.data.content)
        setProducts([...response.data.content])
        setFilteredProducts(products)
        // setFilteredProducts([...response.data.content])
        // console.log(products)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
    
  }, []);
  useEffect(()=>{
    
      // setFilteredItems(products.filter((product) => product.productName.toLowerCase().includes(query)))
      setFilteredProducts(filteredItems)
    
  }, [query]) 
 
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
            isLoading ? <Spinner color='brand.500'/> :  filteredProducts.map(({productId, image, productName, productPrice, description, categoryName, growthHabit, lightLevel, productType, waterRequirement  }) => {
              return(
                <GridItem w={'100%'} key={productId}>
                  <ProductCard id={productId} name={productName} image={image} price={productPrice} description={description} categoryName={categoryName} growthHabit={growthHabit} lightLevel={lightLevel} productType={productType} waterRequirement={waterRequirement}/>
                </GridItem>
              )
            })
        }
      </Grid>
    </Box>
  )
}

export default ProductList