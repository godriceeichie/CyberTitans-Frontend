import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import SwiperNavButtons from './SwiperNavButtons'
import { Box, Card, CardBody, CardFooter, Flex, IconButton, Image, Link, LinkBox, LinkOverlay, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import aloeVera from '../assets/aloe-vera-img.webp'
import filledStar from '../assets/filledStar.svg'
import cereus from '../assets/cereus-plant.webp'
import haworthia from '../assets/haworthia-plant.webp'
import blueMyrtle from '../assets/blueMyrtle-cactus.webp'
import { Link as RouterLink } from 'react-router-dom'
import { ViewIcon } from '@chakra-ui/icons'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'

const SwiperContainer = () => {
  return (
    <Swiper
      slidesPerView={1  }
      grabCursor={true}
      spaceBetween={20}
      keyboard={{
          enabled: true,
      }}
      loop={true}
      breakpoints={{
          769: {
          slidesPerView: 4,
          },
      }}
      modules={[Keyboard, Navigation, A11y]}
      className="mySwiper"
    >
        <SwiperNavButtons />
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={aloeVera} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Aloe Vera Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'} as={'s'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={cereus} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Cereus Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'} as={'s'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={haworthia} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
              <Stack>
                <Text>Haworthia Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={blueMyrtle} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Blue Myrtle</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={aloeVera} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Aloe Vera Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={aloeVera} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Aloe Vera Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={aloeVera} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Aloe Vera Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card variant={'outline'} _hover={{'.hover-icons': {
            right: '15px',
            visibility: 'visible',
            opacity: 1
          }}}>
            <LinkBox position={'relative'}>
              <LinkOverlay display={'block'}>
                <Image src={aloeVera} w={'100%'}/>
              </LinkOverlay>
              <Box className='hover-icons' bgColor={'white'} p={'5px'} position={'absolute'} bottom={'15px'} transition={'.6s'} right={'0'} opacity={'0'} visibility={'hidden'}>
                <List>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineEye size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<AiOutlineHeart size={'1rem'}/>} _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'}  background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink}>
                      <IconButton icon={<FiShoppingCart size={'1rem'}/>}  _hover={{color: 'white', background: 'brand.500'}} width={'36px'} height={'36px'} textAlign={'center'} borderRadius={'100%'} background={'none'} transition={'.6s'}/>
                    </Link>
                  </ListItem>
                  
                </List>
              </Box>
            </LinkBox>
            <CardFooter px={'20px'} py={'17px'}>
              <Stack>
                <Text>Aloe Vera Plant</Text>
                <Flex gap={'5px'}>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                  <Image src={filledStar} w={'4'}/>
                </Flex>
                <Flex gap={'10px'} alignItems={'center'}>
                  <Text fontWeight={'bold'} fontSize={'1rem'} color={'brand.600'}>$19.00</Text>
                  <Text fontSize={'13px'} color={'#858585'}>$21.00</Text>
                </Flex>
              </Stack>
            </CardFooter>
          </Card>
        </SwiperSlide>
        
    </Swiper>
  )
}

export default SwiperContainer