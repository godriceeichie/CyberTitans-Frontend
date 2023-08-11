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
                <Button>
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
                    {/* <div className="inputWrapper">
                        <label for="">Email Address:</label>
                        <input type="text"/>
                    </div> */}
                    <FormControl>
                        <Input placeholder='your@email.com' p={'0'} px={'1.5'} _placeholder={{fontStyle: 'normal', padding: '0'}}/>
                    </FormControl>
                    {/* <FormControl>
                        <Input placeholder='Enter your password' />
                    </FormControl> */}
                    <FormControl w={'100%'}>
                        <InputGroup>
                            <Input placeholder='Enter password' px={'1.5'} _placeholder={{fontStyle: 'normal', padding: '0'}} boxShadow={'sm'} type={show ? 'text' : 'password'} name='password' />
                            <InputRightElement>
                                <IconButton onClick={() => setShow(!show)} icon={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    {/* <div className="inputWrapper">
                        <label for="">Password:</label>
                        <input type="text"/>
                    </div> */}
                    <div className="forgotpassword">
                        <a href="">Forgot Password</a>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    <Button w={'100%'} bgColor={'brand.600'} color={'#fff'}>Login</Button>
                </form>
                <Flex gap={'.25rem  '}>
                    <Text>Don't have an account?</Text>
                    <Link as={RouterLink}> Sign Up</Link>
                </Flex>
                {/* <p className="loginLink">Don't have an account? <NavLink to="/signup">Create your account</NavLink></p> */}
            </div>
            </div>

            <div className="rightSignupWrapper">
            <div className="rightSignup">
                <div className="rightSignupWrapperContent">
                <h2>Discover the best items/transportation </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt amet nemo officiis, fugiat porro pariatur beatae quasi</p>
                </div>
            </div>
            </div>
        </div>
    </>

}

export default Login