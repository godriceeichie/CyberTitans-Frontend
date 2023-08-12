import { Link as RouterLink } from "react-router-dom"
import "../styles/Signup.css"
import google from "../images/google.png"
import { Button, Checkbox, Flex, FormControl, IconButton, Image, Input, InputGroup, InputRightElement, Link, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const Signup = () => {
    const [show, setShow] = useState(false)
    return<>
        <div className="signupWrapper">
        <div className="leftSignup">
            <div className="leftSignupWrapper">
            <div className="signupHeading">
                <h2>Create your account</h2>
                <p>Let's get started with (company name) and give you the best experience</p>
                <button><span><img src={google} alt="" /></span> &nbsp; Sign up with google</button>
            </div>
            <div className="or">
                <hr/>
                <p>or</p>
                <hr/>
            </div>
        
            <form action="">
                {/* <div className="inputWrapper">
                    <label for="">First Name:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Last Name:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Email Address:</label>
                    <input type="text"/>
                </div>
                <div className="inputWrapper">
                    <label for="">Password:</label>
                    <input type="text"/>
                </div> */}
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
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Checkbox colorScheme="green" size={'sm'}>I agree to the terms and condition</Checkbox>
                    <Link as={RouterLink} href="" color={'brand.500'} fontWeight={'medium'}>Forgot Password?</Link>
                </Flex>
                {/* <button type="submit">Submit</button> */}
                <Button w={'100%'} bgColor={'brand.500'} color={'#fff'} mt={'5'}>Sign Up</Button>
            </form>
            <Flex gap={'.25rem  '} fontWeight={'medium'}>
                <Text>Already have an account?</Text>
                <Link as={RouterLink} to={'/auth/login'} color={'brand.500'}>Login</Link>
            </Flex>
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

export default Signup