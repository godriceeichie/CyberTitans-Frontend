import React from 'react'
import { Button, Link, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Stack, StackDivider } from '@chakra-ui/react'
import Logo from './Logo'
import { Link as RouterLink, NavLink } from 'react-router-dom'

const HamburgerMenu = ({isOpen, onClose, hamburgerRef}) => {
  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={hamburgerRef}
        size={'md'}
    >
        <DrawerOverlay />
        <DrawerContent>
            <Flex alignItems={'center'} >
                <DrawerCloseButton alignSelf={'center'}/>
                <DrawerHeader>
                    <Logo />
                </DrawerHeader>
            </Flex>
    
            <DrawerBody mt={'2'}>
                <Stack divider={<StackDivider />} spacing={'4'}>
                    <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                    <NavLink to={'/products'} className={'navbar__link'}>Products</NavLink>
                    <NavLink to={'/faq'} className={'navbar__link'}>FAQ</NavLink>
                    <NavLink to={'/about'} className={'navbar__link'}>About Us</NavLink>
                    <NavLink to={'/contact'} className={'navbar__link'}>Contact Us</NavLink>
                    <Flex gap={{base: '.5rem'}} alignItems={'center'} fontWeight={'medium'} justifyContent={'space-between'} >
                        {/* <Button bg={'none'} p={'0'} hideFrom={'lg'} onClick={() => setShow(!show)}>
                            <Image src={searchIcon} width={'20px'}/>
                        </Button> */}
                        
                        <Link as={RouterLink} to={'/auth/login'} ml={'.5rem'}  color={'#252B42'}>Login</Link>
                        <Link 
                            as={RouterLink} 
                            to={'/auth/signup'} 
                            ml={'.5rem'} 
                            
                            position={'relative'} 
                            display={'inline-block'}
                            fontSize={'.875rem'} 
                            borderRadius={'.375rem'} 
                            zIndex={'1'}
                            bg={'black'} 
                            color={'white'} 
                            py={'0.5rem'} 
                            px={'4'}
                            transition={'0.4s'}
                            _before={{
                                width: '100%',
                                height: '100%',
                                content: '""',
                                margin: 'auto',
                                position: 'absolute',
                                top: '0%',
                                left: '0%',
                                background: 'brand.500',
                                transition: '0.52s',
                                zIndex: -1,
                                borderRadius: '5px'
                            }}
                            _after={{
                                width: '100%',
                                height: '100%',
                                content: '""',
                                margin: 'auto',
                                position: 'absolute',
                                top: '0%',
                                left: '0%',
                                background: 'brand.500',
                                transition: '0.52s',
                                zIndex: '-1',
                                borderRadius: '5px'
                            }}
                            _hover={
                                {
                                    _before:{
                                        transform: 'rotateX(90deg)'
                                    },
                                    _after: {
                                        transform: 'rotateY(90deg)'
                                    }
                                }
                            }
                        >
                            Create Account
                        </Link>
                    </Flex>
                </Stack>
            </DrawerBody>
    
            
        </DrawerContent>
    </Drawer>
  )
}

export default HamburgerMenu