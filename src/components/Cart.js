import React, { useEffect, useState } from 'react';
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Image, Input, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { Link, Link as RouterLink } from 'react-router-dom';
import aloevera from '../assets/aloe-vera-img.webp'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Cart = ({isOpen, onClose, onOpen, cartRef, setCartLength}) => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage and set the state
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
    
  }, []); // Empty dependen
  useEffect(() => {
    setCartLength(cartItems.reduce((total, item) => total + item.qty, 0))
  }, [cartItems])
  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.totalPrice;
    }
    return total;
  };

  const removeItemFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedCart);
  }
  return (
    <>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={cartRef}
        size={'md'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={'flex'} gap={'.5rem'}>
            Your Cart
          </DrawerHeader>

          <DrawerBody mt={'2'}>
            {
              cartItems.map(({productId, name, price, totalPrice, qty}) => {
                return(
                  <Flex gap={'2rem'} key={productId} mb={'5'}>
                    <Image h={'150px'} src={aloevera}/>
                    <Stack justifyContent={'space-between'} w={'100%'}>
                      <Flex justifyContent={'space-between'} >
                        <VStack alignItems={'flex-start'}>
                          <Heading fontSize={'xl'}>{name}</Heading>
                          <Heading fontSize={'md'} fontWeight={'medium'}>{`$${price}.00`}</Heading>
                        </VStack>
                        <Text fontSize={'lg'} fontWeight={'semibold'}>{`$${totalPrice}.00`}</Text>
                      </Flex>
                      <Flex justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} gap={'.5rem'} borderWidth={'2px'} borderColor={'brand.500'} px={'1.5'}>
                          <IconButton bg={'none'} _hover={{bg: 'none'}}   icon={<AiOutlineMinus />}/>
                          <Text fontSize={'lg'} fontWeight={'medium'}>{qty}</Text>
                          <IconButton bg={'none'} _hover={{bg: 'none'}}   icon={<AiOutlinePlus />}/>
                        </Box>
                        <Button onClick={() => removeItemFromCart(productId)}>
                          Remove
                        </Button>
                      </Flex>
                    </Stack>
                  </Flex>
                )
              })
            }
          </DrawerBody>

          <DrawerFooter px={'4'} py={'3'} display={'block'} clipPath={'none'}>
            <Stack >
              <Flex justifyContent={'space-between'}>
                <Text fontWeight={'semibold'}>Total Price:</Text>
                <Text fontWeight={'semibold'}>{`$${calculateTotalPrice()}.00`}</Text>
              </Flex>
              <Link as={RouterLink} to={'/checkout'}>
              <Button bgColor='brand.500' color={'white'}>Checkout</Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default Cart;
