import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Flex, FormControl, IconButton, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import google from '../../images/google.png';
import '../../styles/Signup.css';
import Cookies from 'js-cookie';
import instance from '../../config/api';

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true)
    const navigate = useNavigate()

    const handleSubimt = (e) => {
        e.preventDefault();
        setStatus(false)

        instance.post("/api/v1/auth/login", {
            usernameOrEmail: email, // Assuming you're using email for login
            password
        })
        .then((res) => {
            console.log(res)
            if(res.status == 401){
                setStatus(true)
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "User does not exist"
                  });
            }else{
                setStatus(true)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                Cookies.set("USER_TOKEN", res.data)
                  setTimeout(() => {
                      navigate("/account");
                  }, 1500)
            }
        }).catch(error => {
            console.log(error) 
            setStatus(true)
        })
    }

    // const handleGogleLogin = (e) => {
    //     e.preventDefault();
    //     setStatus(false)

    //     axios.get("https://www.googleapis.com/oauth2")
    //     .then((res) => {
    //         console.log(res)
    //         if(res.status == 401){
    //             setStatus(true)
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: res.data.message
    //               });
    //         }else{
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Success',
    //                 text: "Login Successfull",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             Cookies.set("USER_TOKEN", res.data)
    //             //   setTimeout(() => {
    //             //       navigate("/account");
    //             //   }, 1500)
    //         }
    //     }).catch(error => {
    //         console.log(error.message) 
    //         setStatus(true)
    //     })
    // }

    // const handleGoogleLogin = () => {
    //     axios
    //         .get('https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email')
    //         .then(res => {
    //             console.log(res.data)
    //         }).catch(error => {
    //             console.log(error) 
    //             console.log('Error logging in with Google:');
    //             // display an error message to the user
    //             Swal.fire({
    //               icon: 'error',
    //               title: 'Oops...',
    //               text: "There was an error logging in. Please try again later."
    //               });
    //         })
    //       // wait for 500ms before setting isLoading to false
        
    //     }


    return (
        <div className="signupWrapper">
            <div className="leftSignup">
                <div className="leftSignupWrapper">
                    <div className="signupHeading">
                        <h2>Welcome back!</h2>
                        <p>Enter your credentials to access your account</p>
                        <Button fontWeight={'medium'} onClick={handleGoogleLogin}>
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
                            disabled={status ? true : false}
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
                            onClick={handleSubimt}
                        >
                            {status ? "Login" : "Processing"}
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
