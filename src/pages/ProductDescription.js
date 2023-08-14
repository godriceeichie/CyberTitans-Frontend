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
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useProductsContext from "../hooks/useProducts";
import instance from "../config/api";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCartContext from "../hooks/useCartContext";
import cartAtom from "../states/atoms/cartAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import AloeVeraPlant from "../assets/aloe-vera-img.webp";
import filledStar from "../assets/filledStar.svg";
import Review from "../components/Review";
import ReviewForm from "./ReviewForm";

const ProductDescription = (props) => {
  const { cartItems, dispatch } = useCartContext();
  

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const toast = useToast();
  const setCartItems = useSetRecoilState(cartAtom);

  const addToCart = (
    name,
    price,
    id,
    qty,
    totalPrice,
    description,
    categoryName,
    growthHabit,
    lightLevel,
    productType,
    waterRequirement
  ) => {
    if (!JSON.parse(localStorage.getItem("cart"))) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    const item = cart.find(({ productId }) => productId === id);
    if (item) {
      return toast({
        title: "Already in cart",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      let cartItem = {
        name,
        price,
        productId: id,
        qty,
        totalPrice: qty > 0 ? qty * price : price,
        description,
        categoryName,
        growthHabit,
        lightLevel,
        productType,
        waterRequirement,
      };
      cart.push(cartItem);
      setCartItems(prevCart => [...prevCart, cartItem])
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cartItems)
      toast({
        title: "Added to cart",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }

    // console.log(cart)
  };

  useEffect(() => {
    console.log(id);

    instance
      .get(`/api/v1/user/getSingleProduct/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJlbW1hZWljaGllQGdtYWlsLmNvbSIsImlhdCI6MTY5MTg1NzQ0NSwiZXhwIjoxNjk3OTE1NDQ1fQ.wX-CTTBTSCHbl3aCdIFs4i7Msl8GGnmnbij4eaXbIiCpWZQungpB1RNxyDeiM52h",
        },
      })
      .then((response) => {
        setProduct({ ...response.data });
        console.log(response.data);
        // console.log({...product})
      })
      .catch((err) => {
        console.log(err);
      });
    // let cart = JSON.parse(localStorage.getItem('cart'));
    // setQty(cart.qty)
  }, []);

  useEffect(() => {}, [qty]);

  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   // Fetch reviews for the specific product using its id
  //   instance
  //     .get(`/api/v1/reviews/${id}`)
  //     .then((response) => {
  //       setReviews(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);

  return (
    <div
      style={{
        display: "flex",
        AlignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        BackgroundColor: "red",
      }}
    >
      <Box bgColor={"#f9f9f9"} px={"12"} py={"2"}>
        {/* <Button onClick={()=>setItem(item + 1)}>{item[0].productName}</Button> */}
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/"
              color={"brand.500"}
              fontWeight={"semibold"}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              isCurrentPage
              color={"#1a202c"}
              fontWeight={"medium"}
            >
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbItem >
            <BreadcrumbLink>Contact</BreadcrumbLink>
          </BreadcrumbItem> */}
        </Breadcrumb>
      </Box>
      <Container maxW="1200px" padding="2rem">
        <Box display="flex" flexDirection={{base: "column", lg: "row"}}>
          <Image
            src={AloeVeraPlant}
            alt="Product Image"
            // width={['100%', '40%']}
            height={{ lg: "500px" }}
            objectFit="cover"
          />
          <Box px={["1rem", "2rem"]} flexGrow={1}>
            <Heading as="h1" size="xl" mb="1rem">
              {product.productName}
            </Heading>
            <Text fontSize="xl" color="green.600" mb="1rem">
              {
                `$${product.productPrice}.00`
              }
            </Text>
            <Flex gap={"1rem"} alignItems={"center"}>
              <Box
                height={"auto"}
                display={"flex"}
                alignItems={"center"}
                gap={".5rem"}
                borderWidth={"2px"}
                borderColor={"brand.500"}
                px={"1.5"}
              >
                <IconButton
                  bg={"none"}
                  _hover={{ bg: "none" }}
                  onClick={() => setQty(qty - 1)}
                  icon={<AiOutlineMinus />}
                />
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  {qty}
                </Text>
                <IconButton
                  bg={"none"}
                  _hover={{ bg: "none" }}
                  onClick={() => setQty(qty + 1)}
                  icon={<AiOutlinePlus />}
                />
              </Box>
              <Button
                py={"2"}
                color={"white"}
                size="lg"
                transition={"0.4s"}
                bgColor={"black"}
                pos={"relative"}
                zIndex={"1"}
                _before={{
                  width: "100%",
                  height: "100%",
                  content: '""',
                  margin: "auto",
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  background: "brand.500",
                  transition: "0.52s",
                  zIndex: -1,
                  borderRadius: "5px",
                }}
                _after={{
                  width: "100%",
                  height: "100%",
                  content: '""',
                  margin: "auto",
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  background: "brand.500",
                  transition: "0.52s",
                  zIndex: "-1",
                  borderRadius: "5px",
                }}
                _hover={{
                  _before: {
                    transform: "rotateX(90deg)",
                  },
                  _after: {
                    transform: "rotateY(90deg)",
                  },
                }}
                onClick={() =>
                  addToCart(
                    product.productName,
                    product.productPrice,
                    product.productId,
                    qty,
                    product.productPrice,
                    product.description,
                    product.categoryName,
                    product.growthHabit,
                    product.lightLevel,
                    product.productType,
                    product.waterRequirement
                  )
                }
              >
                Add to Cart
              </Button>
            </Flex>

            <Flex alignItems="center" mt={"3"}>
              <Text fontWeight="bold" mr="1rem">
                Availability:
              </Text>
              <Text color="green.600">In Stock</Text>
            </Flex>
            <Divider my="1rem" />
            <Text fontSize="lg" fontWeight="bold">
              Plant Description
            </Text>
            <Text fontSize="md" color="gray.600" mt="0.5rem">
              {product.description}
            </Text>
            <Divider my="1rem" />
            <Text fontSize="lg" fontWeight="bold">
              Growth Habit
            </Text>
            <Text fontSize="md" color="gray.600" mt="0.5rem">
              {product.growthHabit}
            </Text>
            <Divider my="1rem" />
            <Text fontSize="lg" fontWeight="bold">
              Light Level
            </Text>
            <Text fontSize="md" color="gray.600" mt="0.5rem">
              {product.lightLevel}
            </Text>
            <Divider my="1rem" />
          </Box>
        </Box>
        <Box my={'10'}>
          {/* {reviews.map((review, index) => (
            <Box key={index} my='1rem'>
              <Text fontSize='md' color='gray.600' fontWeight='bold'>
                {review.username}
              </Text>
              <Text fontSize='md' color='gray.600' mt='0.5rem'>
                {review.comment}
              </Text>
            </Box>
          ))} */}
          <Heading fontSize={'2xl'}>Customer Reviews</Heading>
          <Flex>
            <Review />
            <ReviewForm />
          </Flex>
        </Box>
      </Container>
    </div>
  );
};

export default ProductDescription;
