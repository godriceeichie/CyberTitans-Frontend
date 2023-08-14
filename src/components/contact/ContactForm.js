import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Stack, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import salesWoman from '../../assets/saleswoman.svg'
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { contactSchema } from '../../schema/contactSchema'


const ContactForm = () => {
    const toast = useToast()
    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(contactSchema)})
    const submitData = (data) => {
        const recipient = 'cybertitans076@gmail.com'
        const subject = encodeURIComponent(data.subject)
        const body = encodeURIComponent(data.message)
        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        toast({
            title: "Message sent",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
    }
    
  return (
    <Box as='section' mt={'12'} px={{base: '6', md: '20'}}>
        <Flex w={'100%'} direction={{base: 'column', lg: 'row'}} gap={{base: '12', lg: '14'}}>
            <Box w={{lg: '50%'}}>
                <Center>
                    <Image minW={'85%'} maxW={'450px'} src={salesWoman}/>
                </Center>
            </Box>
            <Box>
                <form action="" style={{padding: '1.53rem'}} onSubmit={handleSubmit(submitData)}>
                    <Stack borderRadius={'5px'} gap={'1.69rem'} boxShadow={'md'} p={'2.5'}>
                        <Flex flexDirection={{base: 'column', lg: 'row'}} gap={'4'}>
                            <FormControl isInvalid={errors.name}>
                                <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                    Name
                                </FormLabel>
                                <Input px={'1.5'} placeholder='Your Name' _placeholder={{fontStyle: 'normal'}} type='text' {...register("name")}/>
                                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.email}>
                                <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                    Email
                                </FormLabel>
                                <Input px={'1.5'} placeholder='example@gmail.com' _placeholder={{fontStyle: 'normal'}} type='text' {...register("email")}/>
                                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                            </FormControl>
                        </Flex>
                        <FormControl isInvalid={errors.subject}>
                            <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                Subject
                            </FormLabel>
                            <Input px={'1.5'} placeholder='Your message subject' _placeholder={{fontStyle: 'normal'}} type='text' {...register("subject")}/>
                            <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>    
                        </FormControl>
                        <FormControl isInvalid={errors.message}>
                            <FormLabel mb={{base: '0.87rem', lg: '2'}} color={'brand.500'} fontSize={{base: 'lg', lg: 'xl'}}>
                                Your Message
                            </FormLabel>
                            <Textarea px={'1.5'} placeholder='Your message here' _placeholder={{fontStyle: 'normal'}} type='text' {...register("message")}/>
                            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type='submit' mt={'9'} bg={'black'} borderRadius={'3xl'} color={'white'} fontSize={'md'} _hover={{bgColor: 'white', borderWidth: '1px', borderColor: 'black', color: 'black'}}>Send Message</Button>
                    </Stack>
                    
                </form>
            </Box>
        </Flex>
    </Box>
  )
}

export default ContactForm