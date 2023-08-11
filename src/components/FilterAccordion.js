import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack } from '@chakra-ui/react'
import React from 'react'

const FilterAccordion = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple  w={'100%'} borderRight={'1px solid #D8D8D8'}>
        <AccordionItem border={'none'} mb={'1'}>
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Category
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack>
                    <Checkbox colorScheme='green'>Plants</Checkbox>
                    <Checkbox colorScheme='green'>Accessories</Checkbox>
                </Stack>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={'none'} mb={'1'}>
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Plant Category
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack>
                    <Checkbox colorScheme='green'>Flowering</Checkbox>
                    <Checkbox colorScheme='green'>Non-flowering</Checkbox>
                    <Checkbox colorScheme='green'>Indoor</Checkbox>
                    <Checkbox colorScheme='green'>Outdoor</Checkbox>
                    <Checkbox colorScheme='green'>Succulents</Checkbox>
                    <Checkbox colorScheme='green'>Medicinal</Checkbox>
                </Stack>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={'none'} mb={'1'}>
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Color
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack>
                    <Checkbox colorScheme='green'>Green</Checkbox>
                    <Checkbox colorScheme='green'>Red</Checkbox>
                    <Checkbox colorScheme='green'>Blue</Checkbox>
                    <Checkbox colorScheme='green'>Yellow</Checkbox>
                    <Checkbox colorScheme='green'>Purple</Checkbox>
                </Stack>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={'none'} >
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Price Range
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30} onChangeEnd={(val) => console.log(val)}>
                <RangeSliderTrack bg='green.100'>
                    <RangeSliderFilledTrack bg='green.400' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
            </AccordionPanel>
        </AccordionItem>

    </Accordion>
  )
}

export default FilterAccordion