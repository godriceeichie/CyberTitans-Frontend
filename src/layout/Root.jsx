import React, { useRef } from 'react'
import { Footer, Navbar } from '../components'
import { Outlet } from 'react-router'
import { useDisclosure } from '@chakra-ui/react'
import Cart from '../components/Cart'

const Root = () => {
  const {isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
        <Navbar cartOnOpen={onOpen} cartIsOpen={isOpen} cartOnClose={onClose}/>
        
        <Outlet />        
        <Footer />
    </>
  )
}

export default Root