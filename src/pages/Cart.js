import React from 'react';
import {
  VStack,
  HStack,
  Container,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].totalPrice =
      updatedCartItems[index].price * newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedQuantity = Math.max(1, cartItems[index].quantity - 1);
    handleQuantityChange(index, updatedQuantity);
  };

  const handleIncrement = (index) => {
    const updatedQuantity = cartItems[index].quantity + 1;
    handleQuantityChange(index, updatedQuantity);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <VStack spacing="8" align="stretch" p="8">
      <Heading as="h2" size="xl">
        Your Cart
      </Heading>
      <Box>
        {cartItems.map((item, index) => (
          <HStack
            key={index}
            spacing="4"
            p="4"
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            align="center"
          >
            <Image src={item.image} alt={item.name} w="100px" h="100px" />
            <VStack align="flex-start" spacing="1">
              <Text fontSize="xl" fontWeight="semibold">
                {item.name}
              </Text>
              <Text>${item.price}</Text>
              <HStack spacing="1">
                <Button size="sm" onClick={() => handleDecrement(index)}>
                  -
                </Button>
                <Text>{item.quantity}</Text>
                <Button size="sm" onClick={() => handleIncrement(index)}>
                  +
                </Button>
              </HStack>
              <Text>Total: ${item.totalPrice}</Text>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </Button>
            </VStack>
          </HStack>
        ))}
      </Box>
      <Button
        as={RouterLink}
        to="/checkout"
        colorScheme="teal"
        size="lg"
        alignSelf="flex-end"
      >
        Checkout
      </Button>
    </VStack>
  );
};

export default Cart;
