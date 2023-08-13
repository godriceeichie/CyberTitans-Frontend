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
    background,
    IconButton,
    useToast
} from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import useProductsContext from '../hooks/useProducts'
import instance from '../config/api'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useCartContext from '../hooks/useCartContext'
import cartAtom from '../states/atoms/cart'
import { useRecoilState } from 'recoil'


const ProductDescription = (props) => {
  const {cart,dispatch}= useCartContext()
  const [cartData, setCartData] = useRecoilState(cartAtom)

  const {id} = useParams()
  const [product, setProduct] = useState({}) 
  const [qty, setQty] = useState(1)
  const toast = useToast()

  // const reduceQty = (productid) => {
  //   console.log('reduce')
  //   let cart = JSON.parse(localStorage.getItem('cart'));
  //   let item = cart.find(({ id }) => id === productid);
  //   if (item && item.qty > 0) {
  //     item.qty--;
  //     setQty(item.qty);
  //     console.log("Decreased qty:", item.qty);
  //   }
  
  // }
  // const increaseQty = (productid) => {
  //   console.log('increase')
  //   let cart = JSON.parse(localStorage.getItem('cart'));
  //   let item = cart.find(({ id }) => id === productid);
  //   if (item) {
  //     item.qty++;
  //     setQty(item.qty);
  //     console.log("Increased qty:", item.qty);
  //   }
  // }

  const addToCart = ( name, price, id, qty, totalPrice, description, categoryName, growthHabit, lightLevel, productType, waterRequirement ) => {
    if (!JSON.parse(localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(({productId}) => productId === id)
    if(item){
      return toast({
        title: 'Already in cart',
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    }
    else{
      let cartItem={name, price, productId: id, qty, totalPrice: (qty > 0) ? qty * price : price, description, categoryName, growthHabit, lightLevel, productType, waterRequirement}
      cart.push(cartItem)
      localStorage.setItem('cart', JSON.stringify(cart))
      setCartData([cartItem, ...cartData])
      console.log(cartData)
      toast({
        title: 'Added to cart',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    }
    
  
    
    
    // console.log(cart)
  }

  useEffect(() => {
    console.log(id)
    
    instance.get(`/api/v1/user/getSingleProduct/${id}`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbW1hZWljaGllQGdtYWlsLmNvbSIsImlhdCI6MTY5MTg1NzQ0NSwiZXhwIjoxNjk3OTE1NDQ1fQ.wX-CTTBTSCHbl3aCdIFs4i7Msl8GGnmnbij4eaXbIiCpWZQungpB1RNxyDeiM52h'
      }})
      .then((response) => {
        setProduct({...response.data})
        console.log(response.data)
        // console.log({...product})
        
      })
      .catch(err => {
        console.log(err)
      })
      // let cart = JSON.parse(localStorage.getItem('cart'));
      // setQty(cart.qty)
  }, []);
 

    useEffect(() => {

    }, [qty])
  return (
    <div style={{ display: 'flex', AlignItems: 'center', justifyContent: 'center', flexDirection: 'column', BackgroundColor: 'red'}}>
        <Box bgColor={'#f9f9f9'} px={'12'} py={'2'}>
        {/* <Button onClick={()=>setItem(item + 1)}>{item[0].productName}</Button> */}
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
            {product.productName}
          </Heading>
          <Text fontSize='lg' color='gray.600' mb='1rem'>
            Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text fontSize='xl' color='green.600' mb='1rem'>
            $99.99
          </Text>
          <Flex gap={'1rem'} alignItems={'center'}>
            <Box height={'auto'} display={'flex'} alignItems={'center'} gap={'.5rem'} borderWidth={'2px'} borderColor={'brand.500'} px={'1.5'}>
              <IconButton bg={'none'} _hover={{bg: 'none'}} onClick={() => setQty(qty - 1)}  icon={<AiOutlineMinus />}/>
              <Text fontSize={'lg'} fontWeight={'medium'}>{qty}</Text>
              <IconButton bg={'none'} _hover={{bg: 'none'}} onClick={() => setQty(qty + 1)}  icon={<AiOutlinePlus />}/>
            </Box>
            <Button colorScheme='blue' size='lg' mb='1rem' onClick={() => addToCart(product.productName, product.productPrice, product.productId, qty, product.productPrice, product.description, product.categoryName, product.growthHabit, product.lightLevel, product.productType, product.waterRequirement)}>
              Add to Cart
            </Button>
          </Flex>
          
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
            {
              product.description
            }
          </Text>
        </Box>
      </Box>
    </Container>
    </div>
    
  )
}

export default ProductDescription