import React from 'react';
import '../styles/Faq.css'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    VStack,
  } from '@chakra-ui/react'


const Faq = () => {
    return (
      <>
      <section className='FAQ-container'>
        <div className='FAQ-top'>
            <VStack>
                <h1>FAQ</h1>
                <Breadcrumb border={'none'} pos={'static'} >
                    <BreadcrumbItem font-size ={''}>
                        <BreadcrumbLink ib href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>FAQ</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </VStack>
        </div>
      </section>



      <section className='Questions'>
        <div className='Questions-container1'>
        <div className='Questions-top'>
        <h1>Frequently Asked Questions</h1>
        <span>We focu son economics and meeting you where you work its only a keystroke </span>
        </div>
        </div>

        <div className='boxes'>
            <div className='box1'>
                <h1>Work better together</h1>
                <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget eros volutpat, sit amet."</span>
            </div>
        </div>

        <div className='boxes'>
            <div className='box1'>
                <h1>Work better together</h1>
                <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget eros volutpat, sit amet."</span>
            </div>
        </div>

        <div className='boxes'>
            <div className='box1'>
                <h1>Work better together</h1>
                <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget eros volutpat, sit amet."</span>
            </div>
        </div>
        <div className='boxes'>
            <div className='box1'>
                <h1>Work better together</h1>
                <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget eros volutpat, sit amet."</span>
            </div>
        </div>
        <div className='boxes'>
        <div className='box1'>
    <h1>Work better together</h1>
    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget eros volutpat, sit amet."</span>
</div >
        </div>


        <section className='signup-container'>
        <div className='signup-c1'>
            <h1>Be the first to know </h1>
        </div>
        <div className='signup-c2'>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget ero</span>
        </div>

        <div></div>
        

      </section>
      </section>




      
      
      </>
    );
};

export default Faq;