/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Box, Button, Center, ChakraProvider,Text} from '@chakra-ui/react'
import image from '../image/image.png'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  const audio_src = "public/static/1.wav"
  return (
    <ChakraProvider>
      <Center>
        <div>
      <Image src={image} alt="Picture of the author"
      width={500}
      height={500}/>
       <Center>
       <audio controls src="/1.mp3">
       Your browser does not support the
       </audio>
      </Center>

      <h4>
      まず最初に、自己紹介お願いします。
       </h4>
      

      <Center>
       <audio controls src="/1-1.wav">
       Your browser does not support the
       </audio>
      </Center>

      <h4>
       人生の中で一番ピンチだった経験とそれをどうやって乗り越えたかを教えてください。
       </h4>

      <Center>
       <audio controls src="/2-1.wav">
       Your browser does not support the
       </audio>
      </Center>

      <h4>
      逆に質問がありましたらお願いします。
       </h4>
      </div>
      </Center>

   </ChakraProvider>
  )
}

export default Home
