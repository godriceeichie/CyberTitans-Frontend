import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react"
import "../styles/Navbar.css"
import { Link, NavLink } from "react-router-dom"
import searchIcon from '../assets/searchIcon.svg'
import cartIcon from '../assets/shopping__cart.svg'
import menuIcon from '../assets/menuIcon.svg'
import Logo from "./Logo"


const Navbar = () => {

    return(
        <Box px={'8'} py={'4'} w={'100%'} pos={'sticky'} top={'0'} bg={'white'} shadow={'base'}>
            <Flex justifyContent={'space-between'} align={'center'}>
                <Logo />
                <Box hideBelow={'lg'} display={'flex'} gap={'1.5rem'}>
                    <NavLink to={'/'} className={'navbar__link'}>Home</NavLink>
                    <NavLink to={'/about-us'} className={'navbar__link'}>Products</NavLink>
                    <NavLink to={'/faq'} className={'navbar__link'}>FAQ</NavLink>
                    <NavLink to={'/about'} className={'navbar__link'}>About Us</NavLink>
                    <NavLink to={'/contact'} className={'navbar__link'}>Contact Us</NavLink>
                </Box>
                <Flex gap={{lg: '.5rem'}} >
                    <Button bg={'none'} >
                        <Image src={searchIcon} width={'20px'}/>
                    </Button>
                    <Button bg={'none'}>
                        <Image src={cartIcon} width={'20px'}/>
                    </Button>
                    <Button bg={'none'} hideFrom={'lg'}>
                        <Image src={menuIcon} />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )

}

export default Navbar