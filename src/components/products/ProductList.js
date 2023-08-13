import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Spinner, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import instance from '../../config/api';
import useProductsContext from '../../hooks/useProducts';
import queryAtom from '../../states/atoms/queryAtom';
import ProductCard from '../ProductCard';
import plantCategoryAtom from '../../states/atoms/plantCategoryAtom';
import productTypeAtom from '../../states/atoms/productTypeAtom';
import minPriceAtom from '../../states/atoms/minPriceAtom';
import maxPriceAtom from '../../states/atoms/maxPriceAtom';




const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query] = useRecoilState(queryAtom);
  const { products, setProducts } = useProductsContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [plantCategory, setPlantCategory] = useRecoilState(plantCategoryAtom)
  const [productType, setProductType] = useRecoilState(productTypeAtom)
  const [minPrice, setMinPrice] = useRecoilState(minPriceAtom)
  const [maxPrice, setMaxPrice] = useRecoilState(maxPriceAtom)

  useEffect(() => {
    // Load products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    setFilteredProducts(storedProducts);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    instance.get('/api/v1/user/getAllProducts')
      .then((response) => {
        setProducts(response.data.content);

        // Update local storage with fetched data
        localStorage.setItem('products', JSON.stringify(response.data.content));

        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filteredItems = products.filter(product => product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    if(query){
      setFilteredProducts(filteredItems);
    }
  }, [query, products]);
  useEffect(() => {
    const filteredItems = products.filter(product => product.categoryName === plantCategory);
    if(plantCategory){
      setFilteredProducts(filteredItems);
    }
  }, [plantCategory, products]);
  useEffect(() => {
    const filteredItems = products.filter(product => product.productType === productType);
    if(productType){
      setFilteredProducts(filteredItems);
    }
  }, [productType, products]);
  useEffect(() => {
    const filteredItems = products.filter(product => product.productType === productType);
    if(productType){
      setFilteredProducts(filteredItems);
    }
  }, [minPrice, maxPrice, products]);

 
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