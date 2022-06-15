/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Box, ChakraProvider,Text} from '@chakra-ui/react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      
      <Box m={10}>
      <Text fontSize='3xl'>Lets Make Dataset</Text>
        <Box m={5}/>
        <Link  href="/dataset/">
          <a>Make Dataset</a>
        </Link>
      </Box>
      <Box m={10}>
      <Text fontSize='3xl'>Lets Interview Yourself</Text>
      <Box m={5}/>
        <Link href="/interview/">
          <a>Interview</a>
        </Link>
        </Box>
   </ChakraProvider>
  )
}

export default Home
