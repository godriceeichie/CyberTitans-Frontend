import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Filter, ProductList } from '../components'

const Products = () => {
  return (
    <>
      <Box bgColor={'#f9f9f9'} px={'12'} py={'2'}>

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/' color={'brand.500'} fontWeight={'semibold'}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage color={'#1a202c'} fontWeight={'medium'}>
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbItem >
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem> */}
        </Breadcrumb>
      </Box>
      <Box as='section' p={'0'} px={'12'} mt={'10'}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: '1fr 3fr'}}>
          <Filter />
          <ProductList />
        </Grid>
      </Box>
    </>
  )
}

export default Products