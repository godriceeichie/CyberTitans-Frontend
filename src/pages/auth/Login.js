import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex, FormControl, IconButton, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import google from '../../images/google.png';
import '../../styles/Signup.css';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8081/api/v1/auth/login', {
    //             usernameOrEmail: email, // Assuming you're using email for login
    //             password
    //         });

    //     }


    return (
        <div className="signupWrapper">
            <div className="leftSignup">
                <div className="leftSignupWrapper">
                    <div className="signupHeading">
                        <h2>Welcome back!</h2>
                        <p>Enter your credentials to access your account</p>
                        <Button fontWeight={'medium'}>
                            <Image src={google} mr={'1.5'} />
                            Log in with Google
                        </Button>
                    </div>
                    <div className="or">
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>

                    <form>
                        <FormControl>
                            <Input
                                placeholder="your@email.com"
                                p={'0'}
                                px={'1.5'}
                                _placeholder={{ fontStyle: 'normal', padding: '0' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl w={'100%'}>
                            <InputGroup>
                                <Input
                                    placeholder="Enter password"
                                    px={'1.5'}
                                    _placeholder={{ fontStyle: 'normal', padding: '0' }}
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
                        <div className="forgotpassword">
                            <Link as={RouterLink} href="">
                                Forgot Password?
                            </Link>
                        </div>
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
                            _hover={{
                                _before: {
                                    transform: 'rotateX(90deg)'
                                },
                                _after: {
                                    transform: 'rotateY(90deg)'
                                }
                            }}
                            // onClick={handleSubmit}
                        >
                            Login
                        </Button>
                    </form>
                    <Flex gap={'.25rem  '} fontWeight={'medium'}>
                        <Text>Don't have an account?</Text>
                        <Link as={RouterLink} to={'/auth/signup'} color={'brand.500'}>
                            Sign Up
                        </Link>
                    </Flex>
                </div>
            </div>
            <div className="rightSignupWrapper">
                <div className="rightSignup">
                    <div className="rightSignupWrapperContent">
                        <h2>Discover the best plants/accessories</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt amet nemo officiis, fugiat porro pariatur beatae quasi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
