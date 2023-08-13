import { Box, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Link, LinkBox, LinkOverlay, List, ListIcon, ListItem, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ViewIcon } from '@chakra-ui/icons'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import filledStar from '../assets/filledStar.svg'
import useCartContext from '../hooks/useCartContext'
import instance from '../config/api'


const ProductCard = ({id, name, image, price, description, categoryName, growthHabit, lightLevel, productType, waterRequirement }) => {
  // const { cart, dispatch } = useCartContext()
  const [product, setProduct] = useState({})
  const toast = useToast()
  
  const addToCart = ( name, price, id, qty, totalPrice, description, categoryName, growthHabit, lightLevel, productType, waterRequirement ) => {
    if (!JSON.parse(localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    // localStorage.setItem('cart', JSON.stringify([]));
    let cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(({id}) => id == id)
    if(item){
      item.qty++
    }
    else{
      let cartItem={name, price, id, qty, totalPrice: (qty > 0) ? qty * price : price, description, categoryName, growthHabit, lightLevel, productType, waterRequirement}
      cart.push(cartItem)
      
      localStorage.setItem('cart', JSON.stringify(cart))
      toast({
        title: 'Added to cart',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    }
    
    
    console.log(cart)
  }
  
    
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
                <IconButton onClick={() => addToCart(name, price, id, 0, price, description, categoryName, growthHabit, lightLevel, productType, waterRequirement)} icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
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