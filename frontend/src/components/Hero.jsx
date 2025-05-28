import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <Flex 
      direction={['column', 'row']} 
      border="1px" 
      borderColor="gray.400"
    >
      {/* Left Content */}
      <Flex 
        w={['full', '50%']} 
        align="center" 
        justify="center" 
        py={[10, 0]}
      >
        <Box color="#414141">
          <Flex align="center" gap={2}>
            <Box w={[8, 11]} h="2px" bg="#414141" />
            <Text fontWeight="medium" fontSize={['sm', 'md']}>
              OUR BESTSELLERS
            </Text>
          </Flex>
          
          <Text 
            fontSize={['3xl', null, '5xl']} 
            py={[0, 3]} 
            lineHeight="relaxed"
          >
            Latest Arrivals
          </Text>
          
          <Flex align="center" gap={2}>
            <Text fontWeight="semibold" fontSize={['sm', 'md']}>
              SHOP NOW
            </Text>
            <Box w={[8, 11]} h="1px" bg="#414141" />
          </Flex>
        </Box>
      </Flex>

      {/* Right Image */}
      <Image 
        src={assets.hero_img} 
        w={['full', '50%']} 
        alt="Latest arrivals"
      />
    </Flex>
  )
}

export default Hero