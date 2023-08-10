import { Box, Button, Center, Flex, FormControl, FormLabel, Image, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import salesWoman from '../../assets/saleswoman.svg'

const ContactForm = () => {
  return (
    <Box as='section' mt={'12'} px={{base: '6', md: '20'}}>
        <Flex w={'100%'} direction={{base: 'column', lg: 'row'}} gap={{base: '12', lg: '14'}}>
            <Box w={{lg: '50%'}}>
                <Center>
                    <Image minW={'85%'} maxW={'450px'} src={salesWoman}/>
                </Center>
            </Box>
            <Box>
                <form action="" style={{padding: '1.53rem'}}>
                    <Stack gap={'1.69rem'}>
                        <Flex flexDirection={{base: 'column', lg: 'row'}} gap={'4'}>
                            <FormControl>
                                <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                    Name
                                </FormLabel>
                                <Input px={'1.5'} placeholder='Your Name' _placeholder={{fontStyle: 'normal'}} type='text'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                    Email
                                </FormLabel>
                                <Input px={'1.5'} placeholder='example@gmail.com' _placeholder={{fontStyle: 'normal'}} type='text'/>
                            </FormControl>
                        </Flex>
                        <FormControl>
                            <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                Subject
                            </FormLabel>
                            <Input px={'1.5'} placeholder='Your message subject' _placeholder={{fontStyle: 'normal'}} type='text'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                Your Message
                            </FormLabel>
                            <Textarea px={'1.5'} placeholder='Your message here' _placeholder={{fontStyle: 'normal'}} type='text'/>
                        </FormControl>
                    </Stack>
                    <Button mt={'9'} bg={'black'} borderRadius={'3xl'} color={'white'} fontSize={'md'}>Send Message</Button>
                </form>
            </Box>
        </Flex>
    </Box>
  )
}

export default ContactForm