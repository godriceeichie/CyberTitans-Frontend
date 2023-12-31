import { Box, Button, Flex, Heading, Image, Link, Text, useDisclosure } from "@chakra-ui/react"
import "../styles/Navbar.css"
import { Link as RouterLink, NavLink } from "react-router-dom"
import searchIcon from '../assets/searchIcon.svg'
import cartIcon from '../assets/shopping__cart.svg'
import menuIcon from '../assets/menuIcon.svg'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import { useRef, useState } from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import HamburgerMenu from "./HamburgerMenu"
import Cart from "./Cart"

const Navbar = ({cartOnOpen, cartIsOpen,  cartOnClose }) => {
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cartRef = useRef()
    const hamburgerRef = useRef()
    const [cartLength, setCartLength] = useState()
    return(
        <Box pos={'sticky'} top={'0'} zIndex={'50'} bg={'white'} shadow={'base'}>
            <Box px={{base: '6', lg: '12'}}  py={'4'} w={'100%'}  maxW={'1500px'} mx={'auto'}>
                <Flex justifyContent={'space-between'} align={'center'}>
                    <Logo show={show}/>
                    <ArrowBackIcon display={show ? 'block' : 'none'} onClick={() => setShow(!show)}/>
                    <Box hideBelow={'lg'} display={'flex'} alignItems={'center'} gap={'1.5rem'}>
                        <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                        <NavLink to={'/products'} className={'navbar__link'}>Products</NavLink>
                        <NavLink to={'/faq'} className={'navbar__link'}>FAQ</NavLink>
                        <NavLink to={'/about'} className={'navbar__link'}>About Us</NavLink>
                        <NavLink to={'/contact'} className={'navbar__link'}>Contact Us</NavLink>
                    </Box>
                    <Flex gap={{base: '.5rem'}} alignItems={'center'} fontWeight={'medium'} display={show ? 'none' : 'flex'}>
                        {/* <Button bg={'none'} p={'0'} hideFrom={'lg'} onClick={() => setShow(!show)}>
                            <Image src={searchIcon} width={'20px'}/>
                        </Button> */}
                        <Button bg={'none'} p={'0'} ref={cartRef} onClick={cartOnOpen}>
                            <Image src={cartIcon} width={'20px'}/>
                            <Text>{cartLength}</Text>
                        </Button>
                        <Button ref={hamburgerRef} onClick={onOpen} bg={'none'} hideFrom={'lg'} p={'0'}>
                            <Image src={menuIcon} />
                        </Button>
                        <Link as={RouterLink} to={'/auth/login'} ml={'.5rem'} hideBelow={'lg'} color={'#252B42'}>Login</Link>
                        <Link 
                            as={RouterLink} 
                            to={'/auth/signup'} 
                            ml={'.5rem'} 
                            hideBelow={'lg'} 
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
                </Flex>
                <Cart setCartLength={setCartLength} cartLength={cartLength}  cartRef={cartRef} isOpen={cartIsOpen} onClose={cartOnClose} onOpen={cartOnOpen}/>
                <HamburgerMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} hamburgerRef={hamburgerRef}/>
            </Box>
            
        </Box>
    )

}

export default Navbar