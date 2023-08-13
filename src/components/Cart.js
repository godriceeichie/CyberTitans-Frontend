import React, { useState } from 'react';
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Image, Input, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { Link, Link as RouterLink } from 'react-router-dom';
import aloevera from '../assets/aloe-vera-img.webp'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Cart = ({isOpen, onClose, onOpen, cartRef}) => {
  const [qty, setQty] = useState(0)
  
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
            Your Cart <Text color={'brand.500'}> (7 items)</Text>
          </DrawerHeader>

          <DrawerBody mt={'2'}>
            <Flex gap={'2rem'}>
              <Image h={'150px'} src={aloevera}/>
              <Stack justifyContent={'space-between'} w={'100%'}>
                <Flex justifyContent={'space-between'} >
                  <VStack alignItems={'flex-start'}>
                    <Heading fontSize={'xl'}>Aloe Vera Plant</Heading>
                    <Heading fontSize={'md'} fontWeight={'medium'}>$20.00</Heading>
                  </VStack>
                  <Text fontSize={'lg'} fontWeight={'semibold'}>$20.00</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Box display={'flex'} alignItems={'center'} gap={'.5rem'} borderWidth={'2px'} borderColor={'brand.500'} px={'1.5'}>
                    <IconButton bg={'none'} _hover={{bg: 'none'}} onClick={() => setQty(qty - 1)}  icon={<AiOutlineMinus />}/>
                    <Text fontSize={'lg'} fontWeight={'medium'}>{qty}</Text>
                    <IconButton bg={'none'} _hover={{bg: 'none'}} onClick={() => setQty(qty + 1)}  icon={<AiOutlinePlus />}/>
                  </Box>
                  <Button>
                    Remove
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </DrawerBody>

          <DrawerFooter px={'4'} py={'3'} display={'block'} clipPath={'none'}>
            <Stack >
              <Flex justifyContent={'space-between'}>
                <Text fontWeight={'semibold'}>Subtotal:</Text>
                <Text fontWeight={'semibold'}>$20.00</Text>
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
