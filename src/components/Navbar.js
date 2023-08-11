import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react"
import "../styles/Navbar.css"
import { Link as RouterLink, NavLink } from "react-router-dom"
import searchIcon from '../assets/searchIcon.svg'
import cartIcon from '../assets/shopping__cart.svg'
import menuIcon from '../assets/menuIcon.svg'
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import { useState } from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"

const Navbar = () => {
    const [show, setShow] = useState(false);
    return(
        <Box pos={'sticky'} top={'0'} zIndex={'50'}>
            <Box px={{base: '6', lg: '12'}}  py={'4'} w={'100%'} bg={'white'} shadow={'base'} >
                <Flex justifyContent={'space-between'} align={'center'}>
                    <Logo show={show}/>
                    <ArrowBackIcon display={show ? 'block' : 'none'} onClick={() => setShow(!show)}/>
                    <SearchBar show={show}/>
                    <Flex gap={{lg: '.5rem'}} alignItems={'center'} fontWeight={'medium'} display={show ? 'none' : 'flex'}>
                        <Button bg={'none'} p={'0'} hideFrom={'lg'} onClick={() => setShow(!show)}>
                            <Image src={searchIcon} width={'20px'}/>
                        </Button>
                        <Link as={RouterLink} to={'/cart'}>
                            <Button bg={'none'} p={'0'}>
                                <Image src={cartIcon} width={'20px'}/>
                            </Button>
                        </Link>
                        <Button bg={'none'} hideFrom={'lg'} p={'0'}>
                            <Image src={menuIcon} />
                        </Button>
                        <Link as={RouterLink} to={'/login'} ml={'.5rem'} hideBelow={'lg'} color={'#252B42'}>Login</Link>
                        <Link as={RouterLink} to={'/signup'} ml={'.5rem'} hideBelow={'lg'} fontSize={'.875rem'} borderRadius={'.375rem'} bg={'brand.500'} color={'white'} py={'0.5rem'} px={'4'}>Create Account</Link>
                    </Flex>
                </Flex>
            </Box>
            <Box w={'100%'} hideBelow={'lg'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'1.5rem'} bgColor={'brand.600'} py={'2.5'} px={'4'}>
                <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                <NavLink to={'/products'} className={'navbar__link'}>Products</NavLink>
                <NavLink to={'/faq'} className={'navbar__link'}>FAQ</NavLink>
                <NavLink to={'/about'} className={'navbar__link'}>About Us</NavLink>
                <NavLink to={'/contact'} className={'navbar__link'}>Contact Us</NavLink>
            </Box>
        </Box>
    )

}

export default Navbar