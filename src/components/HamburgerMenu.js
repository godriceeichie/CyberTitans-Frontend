import React from 'react'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Stack, StackDivider } from '@chakra-ui/react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

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
                </Stack>
            </DrawerBody>
    
            
        </DrawerContent>
    </Drawer>
  )
}

export default HamburgerMenu