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
                <Breadcrumb border={'none'} pos={'static'} margin>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>FAQ</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </VStack>
        </div>
      </section>

      <section className='Questons'>
        <div className=''>

        </div>

      </section>
      
      </>
    );
};

export default Faq;