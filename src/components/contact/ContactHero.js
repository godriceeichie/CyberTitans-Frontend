import { Box, Center, Flex, Link, LinkOverlay, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import contactHeroImg from '../../assets/OBJECTS.svg'
import twitterIcon from '../../assets/mdi_twitter.svg'
import whatsappIcon from '../../assets/ri_whatsapp-fill.svg'
import instagramIcon from '../../assets/ri_instagram-fill.svg'
import facebookIcon from '../../assets/ri_facebook-fill.svg'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const ContactHero = () => {
  return (
    <Box as='section' py={'0'} px={{base: '6', md: '20'}} mt={'4.25rem'}>
        <Box w={'100%'} display={'flex'} flexDirection={{base: 'column', lg: 'row-reverse'}} gap={{base: '8', lg: '16' }} >
            <Box w={{lg: '50%'}} >
                <Center>
                    <Image minW={'85%'} maxW={'450px'} src={contactHeroImg}/>
                </Center>
            </Box>  
            <Box flexGrow={'1'} bg={'white'} w={{lg: '50%'}} display={'flex'} flexDirection={'column'} gap={'8'}>
                <Flex direction={'column'} gap={'2'} alignItems={{base: 'center', lg: 'flex-start'}}>
                    <Text as={'h2'} color={'brand.500'} fontSize={{base: '3xl', lg: '4xl'}} fontWeight={'bold'}>Contact Us</Text>
                    <Text fontSize={{base: 'md'}} textAlign={{base: 'center', lg: 'left'}} color={'#999'} letterSpacing={'-0.0075rem'} lineHeight={'160%'} as={'p'}>We are always excited to hear from potential users and partners who share our vision of providing affordable and reliable internet service to tertiary students in Africa.
                    </Text>
                </Flex >
                <VStack align={'left'} hideBelow={'lg'}>
                    <Flex align={'center'} gap={'4'}>
                        <img src={twitterIcon} alt="" />
                        <Link href='https://www.twitter.com/' isExternal fontWeight={'medium'} display={'flex'} alignItems={'center'} gap={'4'}>
                            Twitter <ExternalLinkIcon />
                        </Link>
                    </Flex>
                    <Flex align={'center'} gap={'4'}>
                        <img src={whatsappIcon} alt="" />
                        <Link href='https://www.whatsapp.com/' isExternal fontWeight={'medium'} display={'flex'} alignItems={'center'} gap={'4'}>
                            Whatsapp <ExternalLinkIcon />
                        </Link>
                    </Flex>
                    <Flex align={'center'} gap={'4'}>
                        <img src={instagramIcon} alt="" />
                        <Link href='https://www.instagram.com/' isExternal fontWeight={'medium'} display={'flex'} alignItems={'center'} gap={'4'}>
                            Instagram <ExternalLinkIcon />
                        </Link>
                    </Flex>
                    <Flex align={'center'} gap={'4'}>
                        <img src={facebookIcon} alt="" />
                        <Link href='https://www.facebook.com/' isExternal fontWeight={'medium'}  display={'flex'} alignItems={'center'} gap={'4'}>
                            Facebook <ExternalLinkIcon />
                        </Link>
                    </Flex>

                </VStack>
            </Box>
            
        </Box>
    </Box>
  )
}

export default ContactHero