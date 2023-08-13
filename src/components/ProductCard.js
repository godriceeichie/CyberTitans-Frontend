import { Box, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Link, LinkBox, LinkOverlay, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ViewIcon } from '@chakra-ui/icons'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import filledStar from '../assets/filledStar.svg'
import useCartContext from '../hooks/useCartContext'
import instance from '../config/api'


const ProductCard = ({id, name, image, price, description }) => {
  const { cart, dispatch } = useCartContext()
  const [product, setProduct] = useState({})
  const addToCart = ( name, price, id, description) => {
    instance.post(`/api/v1/cart/add-to-cart/1`,{
      id: 0,
      productId: 1,
      productName: "Aloe Vera Plant",
      productImage: " ",
      productSize: " ",
      description: "string",
      quantity: 0,
      unitPrice: 0,
      subTotal: 0,
      cartId: 0
    },{
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbW1hZWljaGllQGdtYWlsLmNvbSIsImlhdCI6MTY5MTg1NzQ0NSwiZXhwIjoxNjk3OTE1NDQ1fQ.wX-CTTBTSCHbl3aCdIFs4i7Msl8GGnmnbij4eaXbIiCpWZQungpB1RNxyDeiM52h'
      }
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
      console.log(name,  price, id, description)
    })
    
  }
  // const getProduct = (id) => {
    
  // }
  return (
    <Card variant={'outline'} _hover={{'.hover-icons': {
        right: '15px',
        visibility: 'visible',
        opacity: 1
      }}}>
        <LinkBox position={'relative'}>
          <LinkOverlay as={RouterLink}  display={'block'} >
            <Image src={image} w={'100%'}/>
          </LinkOverlay>
          <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
            <List>
              <ListItem>
                
                <Link as={RouterLink} to={`/product/${id}`}>
                  <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                </Link>
              </ListItem>
              <ListItem>
                <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
              </ListItem>
              <ListItem>
                <IconButton onClick={() => addToCart(name, price, id, description)} icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
              </ListItem>
              
            </List>
          </Box>
        </LinkBox>
        <CardFooter px={'20px'} py={'17px'}>
          <Stack>
            <Heading fontSize={'lg'}>{name}</Heading>
            <Flex gap={'5px'}>
              <Image src={filledStar} w={'4'}/>
              <Image src={filledStar} w={'4'}/>
              <Image src={filledStar} w={'4'}/>
              <Image src={filledStar} w={'4'}/>
              <Image src={filledStar} w={'4'}/>
            </Flex>
            <Flex gap={'10px'} alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>{price}</Text>
              
            </Flex>
          </Stack>
        </CardFooter>
    </Card>
  )
}

export default ProductCard