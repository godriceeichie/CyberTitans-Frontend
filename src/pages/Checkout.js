import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Input,
  RadioGroup,
  Radio,
  Button,
  useToast,
  Image,
  Flex
} from '@chakra-ui/react';
import check from '../images/obinna.jpg'

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [bankName, setBankName] = useState('');

  const toast = useToast();

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleCardNumberChange = (value) => {
    // Validate card number
    if (/^[0-9]{0,11}$/.test(value)) {
      setCardNumber(value);
    } else {
      toast({
        title: 'Error',
        description: 'Please input a valid card number.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handlePayClick = () => {
    if (!userName || (!cardNumber && paymentMethod === 'creditCard') || (!bankName && paymentMethod === 'paypal')) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Handle payment logic here
    // You can use the entered payment information to process the payment
    // For this example, let's just show a success toast
    toast({
      title: 'Success',
      description: 'Payment successful!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="lg" py="8" display='flex' >
      <Stack spacing="6" height={'80vh'} backgroundColor={'blue'}>
        <Heading as="h1" size="xl" mb="4">
        Checkout
        </Heading>
        <Input
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
          <Stack spacing="2">
            <Radio value="creditCard">Credit Card</Radio>
            <Radio value="paypal">PayPal</Radio>
          </Stack>
        </RadioGroup>
        {paymentMethod === 'creditCard' && (
          <Input
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
          />
        )}
        {paymentMethod === 'paypal' && (
          <Input
            placeholder="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        )}
        <Button colorScheme="teal" onClick={handlePayClick}>
          Pay
        </Button>
      </Stack>
      <Box backgroundColor={'green.400'}>
        <Image src="" alt="Image Alt Text" />
      </Box>
    </Container>
  );
};

export default Checkout;
