import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import products from '../../data/products'
import ProductCard from '../ProductCard'

const ProductList = () => {
  return (
    <Box px={{lg: '8'}}>
      <Heading fontSize={'2xl'}>
        Products
      </Heading>
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