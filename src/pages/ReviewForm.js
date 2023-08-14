import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { reviewSchema } from "../schema/reviewSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ReviewForm = () => {
  const toast = useToast()
  const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(reviewSchema)})
  const submitData = (data) => {
    
  }
  return (
    <Box w={"50%"}>
      <form onSubmit={handleSubmit(submitData)}>
        <Heading as={"h4"} fontSize={"2xl"} mb={"2"}>
          Add a review
        </Heading>
        <FormControl isInvalid={errors.feedback}>
          <Textarea placeholder="Enter your review" size={"md"} {...register("feedback")}/>
          <FormErrorMessage>{errors.feedback?.message}</FormErrorMessage>
        </FormControl>
        <Button 
          type="submit" 
          mt={"3"}
          transition={'0.4s'}
          position={'relative'}
          bg={'black'}
          zIndex={'1'}
          color={'white'}
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
          Submit Review
        </Button>
      </form>
    </Box>
  );
};

export default ReviewForm;
