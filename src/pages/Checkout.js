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
  Flex,
  Center,
  Spacer
} from '@chakra-ui/react';
import check from '../assets/Ecommerce checkout laptop-bro (1).png'

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
    <Container maxW='80%' display='flex' alignItems={'center'} height='90vh' justifyContent='center'>
       <Stack spacing="6" height={'80vh'} width='50%' gap='40px' display='flex' align='flex-start'>
      <Heading as="h1" fontSize="30px" mb="4">
        Payment details
      </Heading>
      <Input
        width='80%'
        placeholder="User Name"
        // Other input props here
      />
      <Input
      width='80%'
        placeholder="Email Address" // 1. Email Address input
        // Input props here
      />
      <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
        <Stack spacing="2">
          <Radio value="creditCard">Credit Card</Radio>
          <Radio value="paypal">PayPal</Radio>
        </Stack>
      </RadioGroup>
      {paymentMethod === 'creditCard' && (
        <Input
        width='80%'
          placeholder="Card Number"
          // Other input props here
        />
      )}
      {paymentMethod === 'paypal' && (
        <Input
        width='80%'
          placeholder="Bank Name"
          // Other input props here
        />
      )}
      <Box>
      {/* ...Other inputs... */}

      {/* 3a. Expiry Date input and 3b. CVV input */}
      <Flex alignItems="center" display={'flex'} width='100%'>
        <Input
          width='15rem'
          placeholder="Expiry Date"
          // Other input props here
        />
        <Spacer />
        <Input
          width='15rem'
          marginLeft='30px'
          placeholder="CVV"
          // Other input props here
        />
      </Flex>
    </Box>
      <Box>
        {/* 4. Subtotal and Fee */}
       <Box display='flex' alignItems="center" justifyContent='center'>
  <p style={{  fontSize: '16px' }}>Subtotal:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
  <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#659E38' }}>$100.00</p>
</Box>

        <Box display='flex' alignItems="center" justifyContent='center'>
          <p style={{  fontSize: '16px'}}>Fee: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
          <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#659E38' }}>$50.00</p>
        </Box>
      </Box>
      <Box>
        {/* 5. Total Amount */}
        <p>Total: $105.00</p>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center' width='100%'>
        <Button backgroundColor="brand.500" color={'white'} onClick={handlePayClick} width='60%'>
          Make Payment {/* 6. Make Payment button */}
        </Button>
      </Box>
    </Stack>
      <Box width='50%' height='95%' position="relative">
      <Image src={check} alt="Image Alt Text" objectFit="contain" width="100%" height="100%" />
    </Box>
    </Container>
  );
};

export default Checkout;
