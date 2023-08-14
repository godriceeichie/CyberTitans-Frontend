import { Link as RouterLink } from "react-router-dom";
import { Button, Checkbox, Flex, FormControl, IconButton, Image, Input, InputGroup, InputRightElement, Link, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineHome } from "react-icons/ai";
import Swal from 'sweetalert2';
import axios from "axios";
import google from '../../images/google.png'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
                username,
                email,
                password
            });
            const data = response.data;
    
            if (data.includes("Successful")) {
                Swal.fire({
                    title: "Success",
                    text: data,
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else if (data.includes("Username already exists")) {
                Swal.fire({
                    title: "Error",
                    text: "Username already exists",
                    icon: "Erro",
                    confirmButtonText: "OK",
                });
            } else if (data.includes("Email already exists")) {
                Swal.fire({
                    title: "Error",
                    text: "Email already exists, Login instead",
                    icon: "Error",
                    confirmButtonText: "OK",
                });
            } else if (data.includes("Password length must be more than 6 characters")) {
                Swal.fire({
                    title: "Error",
                    text: "Password length must be more than 6 characters",
                    icon: "Info",
                    confirmButtonText: "OK",
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "An unexpected error occurred",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error('Registration error:', error);
            Swal.fire({
                title: "Error",
                text: "An error occurred while registering",
                icon: "error",
                confirmButtonText: "OK",
            });
        }    
    };
    
    

    return (
        <>
            <div className="signupWrapper">
                 <Box position='absolute' top='1rem' left='1rem'>
          <Button as={RouterLink} to='/'>
            <AiOutlineHome />
          </Button>
        </Box>
                <div className="leftSignup">
                    <div className="leftSignupWrapper">
                        <div className="signupHeading">
                            <h2>Create your account</h2>
                            <p>Let's get started with your details and give you the best experience</p>
                            <Button fontWeight={'medium'}>
                                <Image src={google} mr={'1.5'}/>
                                Sign up with Google
                            </Button>
                        </div>
                        <div className="or">
                            <hr/>
                            <p>or</p>
                            <hr/>
                        </div>
                        <form>
                            <FormControl>
                                <Input
                                    placeholder='Username'
                                    p={'0'}
                                    px={'1.5'}
                                    _placeholder={{fontStyle: 'normal', padding: '0'}}
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    placeholder='your@email.com'
                                    p={'0'}
                                    px={'1.5'}
                                    _placeholder={{fontStyle: 'normal', padding: '0'}}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl w={'100%'}>
                                <InputGroup>
                                    <Input
                                        placeholder='Enter password'
                                        px={'1.5'}
                                        _placeholder={{fontStyle: 'normal', padding: '0'}}
                                        boxShadow={'sm'}
                                        type={show ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement>
                                        <IconButton onClick={() => setShow(!show)} icon={show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Flex alignItems={'center'} justifyContent={'space-between'}>
                                <Checkbox colorScheme="green" size={'sm'}>I agree to the terms and condition</Checkbox>
                                
                            </Flex>
                            <Button 
                                w={'100%'} 
                                bgColor={'brand.500'} 
                                color={'#fff'} 
                                mt={'5'}
                                position={'relative'}
                                bg={'black'}
                                zIndex={'1'}
                                transition={'0.4s'}
                                type="submit"
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
                                _hover={{
                                    _before:{
                                        transform: 'rotateX(90deg)'
                                    },
                                    _after: {
                                        transform: 'rotateY(90deg)'
                                    }
                                }}
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
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
    );
};

export default Signup;
