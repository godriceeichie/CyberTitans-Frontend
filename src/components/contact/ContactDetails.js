import { CopyIcon } from '@chakra-ui/icons'
import { Box, Card, CardHeader, Center, Container, GridItem, Heading, IconButton, SimpleGrid, Stack, Text, VStack, useClipboard, useToast } from '@chakra-ui/react'
import React from 'react'

const ContactDetails = () => {
    const toast = useToast()
    const { onCopy, hasCopied, value, setValue } = useClipboard()
    const address = "Suite 17, LSDPC office complex, Pen Cinema, Agege, Lagos"
    const email = "fronet@gmail.com"
    const phoneNumber = "+234 903 690 8590 +234 803 300 0090"
    const copy = (text) => {
        setValue(text)
        onCopy()
        console.log(value)
        if(hasCopied){
            toast({
                title: 'Copied to clipboard',
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        }
    }
  return (
    <Box as='section' mt={{base: '12', lg: '7.5rem'}} py={'0'} px={'6'}>
        <SimpleGrid columns={{base: 1, md: 3}} gap={'4'}>
            <GridItem py={'4'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={'2'} textAlign={'center'} borderRadius={'0.91px'}  borderWidth={'0.91px'} borderColor={'brand.400'} shadow={'0px 3.6576101779937744px 29.260881423950195px 1.8288050889968872px rgba(0, 32, 23, 0.02)'}>
                <VStack gap={'2'}>
                    <Heading as={'h3'} fontSize={'1.4rem'} fontWeight={'semibold'} color={'brand.500'}>Our Location</Heading>
                    <Container maxW={'2xs'} fontSize={'1.14rem'}>
                        MBM PLAZA, 48 Old Aba Rd, near Shell I.A. Rumubiokani,
                    </Container>
                </VStack>
                <IconButton onClick={() => copy(address)}>
                    <CopyIcon boxSize={'6'}/>
                </IconButton>
            </GridItem>
            <GridItem py={'4'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={'2'} textAlign={'center'} borderRadius={'0.91px'}  borderWidth={'0.91px'} borderColor={'brand.400'} shadow={'0px 3.6576101779937744px 29.260881423950195px 1.8288050889968872px rgba(0, 32, 23, 0.02)'}>
                <VStack gap={'2'}>
                    <Heading as={'h3'} fontSize={'1.4rem'} fontWeight={'semibold'} color={'brand.500'}>Gmail</Heading>
                    <Container maxW={'2xs'} fontSize={'1.14rem'}>
                        cybertitans076@gmail.com
                    </Container>
                </VStack>
                <IconButton onClick={() => copy(email)}>
                    <CopyIcon boxSize={'6'}/>
                </IconButton>
            </GridItem>
            <GridItem py={'4'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={'2'} textAlign={'center'} borderRadius={'0.91px'}  borderWidth={'0.91px'} borderColor={'brand.400'} shadow={'0px 3.6576101779937744px 29.260881423950195px 1.8288050889968872px rgba(0, 32, 23, 0.02)'}>
                <VStack gap={'2'}>
                    <Heading as={'h3'} fontSize={'1.4rem'} fontWeight={'semibold'} color={'brand.500'}>Phone Numbers</Heading>
                    <Container maxW={'2xs'} fontSize={'1.14rem'}>
                        +234 903 690 8590 <br />
                        +234 803 300 0090
                    </Container>
                </VStack>
                <IconButton onClick={() => copy(phoneNumber)}>
                    <CopyIcon boxSize={'6'}/>
                </IconButton>
            </GridItem>
        </SimpleGrid>
    </Box>
  )
}

export default ContactDetails