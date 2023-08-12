import { Link as RouterLink, NavLink } from "react-router-dom"
import "../styles/Signup.css"
import google from "../images/google.png"
import { Button, Flex, FormControl, IconButton, Image, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react"

const Login = () => {
    const [show, setShow] = useState(false)
    return<>
        <div className="signupWrapper">
            <div className="leftSignup">
            <div className="leftSignupWrapper">
                <div className="signupHeading">
                <h2>Welcome back!</h2>
                <p>Enter your credentials to access your account</p>
                <Button fontWeight={'medium'}>
                    <Image src={google} mr={'1.5'}/>
                    Log in with Google
                </Button>
                {/* <button><span><img src={google} alt="" /></span> &nbsp; Sign in with google</button> */}
                </div>
                <div className="or">
                <hr/>
                <p>or</p>
                <hr/>
                </div>
        
                <form action="">
                    <FormControl>
                        <Input placeholder='your@email.com' p={'0'} px={'1.5'} _placeholder={{fontStyle: 'normal', padding: '0'}}/>
                    </FormControl>
                    <FormControl w={'100%'}>
                        <InputGroup>
                            <Input placeholder='Enter password' px={'1.5'} _placeholder={{fontStyle: 'normal', padding: '0'}} boxShadow={'sm'} type={show ? 'text' : 'password'} name='password' />
                            <InputRightElement>
                                <IconButton onClick={() => setShow(!show)} icon={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <div className="forgotpassword">
                        <Link as={RouterLink} href="">Forgot Password?</Link>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    <Button 
                        w={'100%'} 
                        bgColor={'brand.500'} 
                        color={'#fff'}
                        position={'relative'}
                        bg={'black'}
                        zIndex={'1'}
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
                    >Login</Button>
                </form>
                <Flex gap={'.25rem  '} fontWeight={'medium'}>
                    <Text>Don't have an account?</Text>
                    <Link 
                        as={RouterLink} 
                        to={'/auth/signup'} 
                        color={'brand.500'}
                        
                    > Sign Up</Link>
                </Flex>
                {/* <p className="loginLink">Don't have an account? <NavLink to="/signup">Create your account</NavLink></p> */}
            </div>
            </div>

            <div className="rightSignupWrapper">
            <div className="rightSignup">
                <div className="rightSignupWrapperContent">
                <h2>Discover the best plants/accessories     </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt amet nemo officiis, fugiat porro pariatur beatae quasi</p>
                </div>
            </div>
            </div>
        </div>
    </>

}

export default Login