import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import FilterAccordion from '../FilterAccordion'

const Filter = () => {
  return (
    <Stack hideBelow={'lg'}>
      <Heading fontSize={'2xl'} mb={'2.5'}>
          Filter
      </Heading>
      <Flex direction={'column'} >
        <FilterAccordion />
        <Button 
          mt={'3.5'}
          position={'relative'}
          zIndex={'1'}
          bgColor={'black'} 
          color={'white'} 
          py={'0.5rem'} 
          px={'4'}
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
        >
          Filter
        </Button>
      </Flex>
      
    </Stack>
  )
}

export default Filter