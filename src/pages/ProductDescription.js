import { 
    Box,
    BreadcrumbItem,
    Breadcrumb,
    BreadcrumbLink,
    Container,
    Image,
    Flex, 
    Divider,
    Heading,
    Text,
    CardFooter,
    Button,
    background
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const ProductDescription = () => {
  return (
    <div style={{ display: 'flex', AlignItems: 'center', justifyContent: 'center', flexDirection: 'column', BackgroundColor: 'red'}}>
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
       <Container maxW='1200px' padding='2rem'>
      <Box display='flex' flexDirection={['column', 'row']}>
        <Image
          src='https://via.placeholder.com/300'
          alt='Product Image'
          width={['100%', '40%']}
          objectFit='cover'
        />
        <Box padding={['1rem', '2rem']} flexGrow={1}>
          <Heading as='h1' size='xl' mb='1rem'>
            Product Name
          </Heading>
          <Text fontSize='lg' color='gray.600' mb='1rem'>
            Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text fontSize='xl' color='green.600' mb='1rem'>
            $99.99
          </Text>
          <Button colorScheme='blue' size='lg' mb='1rem'>
            Add to Cart
          </Button>
          <Flex alignItems='center'>
            <Text fontWeight='bold' mr='1rem'>
              Availability:
            </Text>
            <Text color='green.600'>In Stock</Text>
          </Flex>
          <Divider my='1rem' />
          <Text fontSize='lg' fontWeight='bold'>
            Product Details
          </Text>
          <Text fontSize='md' color='gray.600' mt='0.5rem'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur est et
            consectetur. Curabitur facilisis ac urna ut cursus. Etiam varius urna arcu, nec
            dignissim erat scelerisque in.
          </Text>
        </Box>
      </Box>
    </Container>
    </div>
    
  )
}

export default ProductDescription