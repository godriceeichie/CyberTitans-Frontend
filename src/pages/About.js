import Navbar from "../components/Navbar"
import "../styles/About.css"
import chat from "../images/chat.png"
import detail from "../images/detail.png"
import service from "../images/cservice.png"
import star from "../images/star.png"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import about from "../images/about.jpg"
import Sophia from "../images/sophia.jpg"
import Wutche from "../images/wutche.jpg"
import Obinna from "../images/obinna.jpg"
import Fortune from "../images/fortune.jpg"
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Flex, Grid, GridItem, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import heroImg from '../assets/aboutHeroImg.svg'
import Godrice from '../assets/Godrice.png'


const About = () => {

    return<>
        <Box as={'section'} py={'4.25rem'} px={{base: '6', md: '20'}} >
            <Flex direction={{base: 'column', lg: 'row-reverse'}} gap={{base: '8', lg: '16' }}>
                <Box w={{lg: '50%'}} >
                    <Center>
                        <Image minW={'90%'} maxW={'450px'} src={heroImg}/>
                    </Center>
                </Box>
                <Box flexGrow={'1'} bg={'white'} w={{lg: '50%'}} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'8'} >
                    <Flex direction={'column'} gap={'2'} alignItems={{base: 'center', lg: 'flex-start'}}>
                        <Heading as={'h2'} color={'textColor.400'} fontSize={{base: '3xl', lg: '4xl'}} fontWeight={'bold'}>
                            Who We 
                            <Text as={'span'} color={'brand.500'}> Are</Text>
                        </Heading>
                        <Text fontSize={{base: 'md'}} textAlign={{base: 'center', lg: 'left'}} color={'#999'} letterSpacing={'-0.0075rem'} lineHeight={'160%'} as={'p'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corporis aut repellendus porro eius quia eaque explicabo laudantium necessitatibus, aliquam inventore modi in perspiciatis? Earum repellat illum velit quam deleniti!
                            Officia facere veritatis explicabo quisquam. Veritatis explicabo dignissimos esse, reiciendis, ratione.
                        </Text>
                        <Button 
                            mt={'4'} 
                            py={'15px'} 
                            px={'20px'} 
                            bgColor={'white'} 
                            fontWeight={'semibold'} 
                            color={'brand.500'} 
                            borderWidth={'2px'} 
                            borderColor={'brand.500'} 
                            borderRadius={'5px'}
                            transition={'.5s'}
                            _hover={{color: 'white', bgColor: 'brand.600'}}
                        >
                            Get in touch
                        </Button>
                    </Flex >
                </Box>
            </Flex>
        </Box>

        <section className="missionWrapper">
            <div className="heading">
                <h2>Why <span>Choose</span> Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolores enim hic atque, ipsum corporis, quia autem temporibus suscipit sit facilis dolor corrupti recusandae expedita ea? Ullam impedit perspiciatis adipisci.</p>
            </div>
            <div className="missionCardsWrapper">
                <div className="missionCards">
                    <img src={star} alt="" />
                    <h3>Expertise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={chat} alt="" />
                    <h3>Communication</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={detail} alt="" />
                    <h3>Attention to Detail</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
                <div className="missionCards">
                    <img src={service} alt="" />
                    <h3>Customer Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur,  elit. Iusto laborum molestias reprehenderit a dolorem.</p>
                </div>
            </div>
        </section>

        <section className="teamWrapper">
            <div className="heading">
                <h2>Meet The <span> Team</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum quod excepturi recusandae, autem exercitationem neque ipsa nemo, cum explicabo praesentium dolores nam ratione magni reprehenderit quibusdam, est quam debitis.</p>
            </div>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={'5'}>
                {/* <div className="teamCard">
                    <img src="" alt="" />
                    <div className="teamCardContent">
                        <h3>Kingsley Henshaw</h3>
                        <p>STUDENT1346180</p>
                    </div>
                </div> */}
                <GridItem>
                    <Card >
                        <CardBody p={'0'}>
                            <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Kingsley Henshaw picture'
                            w={'100%'}
                            height={'330px'}
                            // height={'50%'}
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Kingsley Henshaw</Heading>
                                <Text>
                                    STUDENT1346180
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card >
                        <CardBody p={'0'}>
                            <Image
                            src={Sophia}
                            alt='Sophia Okosodo picture'
                            w={'100%'}
                            height={'330px'}
                            
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Okosodo Sophia Osewe</Heading>
                                <Text>
                                    STUDENT1373737
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card >
                        <CardBody p={'0'}>
                            <Image
                            src={Wutche}
                            alt='Wutche Chikaome picture'
                            w={'100%'}
                            height={'330px'}
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Wutche Chikaome</Heading>
                                <Text>
                                    STUDENT1384506
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card >
                        <CardBody p={'0'}>
                            <Image
                            src={Fortune}
                            alt='Fortune Osuh picture'
                            w={'100%'}
                            height={'330px'}
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Fortune Ken Osuh</Heading>
                                <Text>
                                    STUDENT1383723
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card >
                        <CardBody p={'0'}>
                            <Image
                            src={Obinna}
                            alt='Obinna Nwabuisi picture'
                            w={'100%'}
                            height={'330px'}
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Nwabuisi Obinna Divine</Heading>
                                <Text>
                                    STUDENT1343388
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card>
                        <CardBody p={'0'}>
                            <Image
                            src={Godrice}
                            alt='Godrice Eichie picture'
                            w={'100%'}
                            height={'330px'}
                            />
                            <Stack p={'1.25rem'}>
                                <Heading size='md'>Godrice Eichie</Heading>
                                <Text>
                                    STUDENT1422116
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                
            </Grid>
        </section>


        <Testimonials/>
    </>

}

export default About