import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react"
import "../styles/Navbar.css"
import { Link, NavLink } from "react-router-dom"
import searchIcon from '../assets/searchIcon.svg'
import cartIcon from '../assets/shopping__cart.svg'
import menuIcon from '../assets/menuIcon.svg'
import Logo from "./Logo"


const Navbar = () => {

    return(
        <Box px={'8'} py={'4'} w={'100%'} pos={'sticky'} top={'0'} bg={'white'}>
            <Flex justifyContent={'space-between'}>
                <Logo />
                <Box hideBelow={'lg'} display={'flex'} gap={'1.5rem'}>
                    <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                    <NavLink to={'/about-us'} className={'navbar__link'}>About Us</NavLink>
                    <NavLink to={'/packages'} className={'navbar__link'}>Packages</NavLink>
                    <NavLink to={'/contact-us'} className={'navbar__link'}>Contact Us</NavLink>
                </Box>
                <Flex gap={'6'} >
                    <Button bg={'none'} >
                        <Image src={searchIcon}/>
                    </Button>
                    <Button bg={'none'}>
                        <Image src={cartIcon}/>
                    </Button>
                    <Button bg={'none'}>
                        <Image src={menuIcon}/>
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )

}

export default Navbar