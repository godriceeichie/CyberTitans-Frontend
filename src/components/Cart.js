import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import aloevera from "../assets/aloe-vera-img.webp";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";
import cartAtom from "../states/atoms/cartAtom";

const Cart = ({
  isOpen,
  onClose,
  onOpen,
  cartRef,
  setCartLength,
  cartLength,
}) => {
  const [cartItems, setCartItems] = useRecoilState(cartAtom);
  const updateCartItemQty = (productId, newQty) => {
    const updatedCartItems = cartItems.map((item) =>
      item.productId === productId ? { ...item, qty: newQty } : item
    );

    setCartItems(updatedCartItems);
    saveCartToLocalStorage(updatedCartItems);
  };

  useEffect(() => {
    // Fetch cart items from local storage and set the state
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []); // Empty dependen
  useEffect(() => {
    setCartLength(cartItems.reduce((total, item) => total + item.qty, 0));
  }, [cartItems]);
  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.totalPrice;
    }
    return total;
  };

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItemFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedCartItems);
    saveCartToLocalStorage(updatedCartItems);
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={cartRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} gap={".5rem"}>
            Your Cart
            <Text color={"brand.500"}>{`(${cartLength} items)`}</Text>
          </DrawerHeader>

          <DrawerBody mt={"2"}>
            {cartLength === 0 ? (
              <Stack>
                <Stack alignItems={"center"}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="150"
                    width="150"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                  </svg>
                  <Text fontWeight={"semibold"} fontSize={"20px"}>
                    Your shopping bag is empty
                  </Text>
                </Stack>
                <Button
                  mt={"5"}
                  bg={"black"}
                  zIndex={"1"}
                  position={"relative"}
                  color={"white"}
                  transition={"0.4s"}
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
                >
                  Continue Shopping
                </Button>
              </Stack>
            ) : (
              cartItems.map(({ productId, name, price, totalPrice, qty }) => {
                return (
                  <Flex gap={"2rem"} key={productId} mb={"5"}>
                    <Image h={"150px"} src={aloevera} />
                    <Stack justifyContent={"space-between"} w={"100%"}>
                      <Flex justifyContent={"space-between"}>
                        <VStack alignItems={"flex-start"}>
                          <Heading fontSize={"xl"}>{name}</Heading>
                          <Heading
                            fontSize={"md"}
                            fontWeight={"medium"}
                          >{`$${price}.00`}</Heading>
                        </VStack>
                        <Text
                          fontSize={"lg"}
                          fontWeight={"semibold"}
                        >{`$${totalPrice}.00`}</Text>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Box
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
                            onClick={() =>
                              updateCartItemQty(productId, qty - 1)
                            }
                            icon={<AiOutlineMinus />}
                          />
                          <Text fontSize={"lg"} fontWeight={"medium"}>
                            {qty}
                          </Text>
                          <IconButton
                            bg={"none"}
                            _hover={{ bg: "none" }}
                            onClick={() =>
                              updateCartItemQty(productId, qty + 1)
                            }
                            icon={<AiOutlinePlus />}
                          />
                        </Box>
                        <Button onClick={() => removeItemFromCart(productId)}>
                          Remove
                        </Button>
                      </Flex>
                    </Stack>
                  </Flex>
                );
              })
            )}
          </DrawerBody>

          {cartLength > 0 && (
            <DrawerFooter px={"4"} py={"3"} display={"block"} clipPath={"none"}>
              <Stack>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Total Price:</Text>
                  <Text
                    fontWeight={"semibold"}
                  >{`$${calculateTotalPrice()}.00`}</Text>
                </Flex>
                <Link as={RouterLink} to={"/checkout"}>
                  <Button bgColor="brand.500" color={"white"}>
                    Checkout
                  </Button>
                </Link>
              </Stack>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
