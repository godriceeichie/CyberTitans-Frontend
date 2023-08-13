import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, Flex, Radio, RadioGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, useRadioGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import productTypeAtom from '../states/atoms/productTypeAtom'
import { useRecoilState } from 'recoil'
import plantCategoryAtom from '../states/atoms/plantCategoryAtom'

const FilterAccordion = () => {
    const handleChange = (value) => {
        console.log(value)
    }
    const [productType, setProductType] = useRecoilState(productTypeAtom)
    const [plantCategory, setPlantCategory] = useRecoilState(plantCategoryAtom)
    useEffect(() => {
        console.log(productType)
    }, [productType])
  return (
    <Accordion defaultIndex={[0]} allowMultiple  w={'100%'} borderRight={'1px solid #D8D8D8'}>
        <AccordionItem border={'none'} mb={'3.5'}>
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Product Type
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <RadioGroup onChange={setProductType} value={productType} >
                    <Stack spacing={5}>
                        <Radio colorScheme='green' value='PLANT'>
                            Plants
                        </Radio>
                        <Radio colorScheme='green' value='ACCESORIES'>
                            Accessories
                        </Radio>
                    </Stack>
                </RadioGroup>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={'none'} mb={'3.5'}>
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
                <RadioGroup onChange={setPlantCategory} value={plantCategory}>
                    <Stack spacing={5}>
                        <Radio colorScheme='green' value='Flowering'>
                            Flowering
                        </Radio>
                        <Radio colorScheme='green' value='Non-flowering'>
                            Non-flowering
                        </Radio>
                        <Radio colorScheme='green' value='Indoor'>
                            Indoor
                        </Radio>
                        <Radio colorScheme='green' value='Outdoor'>
                            Outdoor
                        </Radio>
                        <Radio colorScheme='green' value='Succulent'>
                            Succulents
                        </Radio>
                        <Radio colorScheme='green' value='Medicinal'>
                            Medicinal
                        </Radio>
                    </Stack>
                </RadioGroup>
                </Stack>
            </AccordionPanel>
        </AccordionItem>    
        {/* <AccordionItem border={'none'} mb={'3.5'}>
            <h2>
                <AccordionButton _hover={{bg: 'none'}} pl={'0'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'semibold'}>
                        Price Range
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <RangeSlider defaultValue={[0, 240]} min={0} max={300} step={30} onChangeEnd={(val) => {
                setMinPrice(val[0])
                setMaxPrice(val[1])
            }}>
                <RangeSliderTrack bg='green.100'>
                    <RangeSliderFilledTrack bg='green.400' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
            </AccordionPanel>
        </AccordionItem> */}

    </Accordion>
  )
}

export default FilterAccordion