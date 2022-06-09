/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Box, Button, ChakraProvider, HStack, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { SetStateAction, useEffect, useState } from 'react'

const Home: NextPage = () => {
    const [pair,setPair] = useState([<></>])
    const [cvalue, setCvalue] = useState('')
    const [uvalue, setUvalue] = useState('')
    const [csv, setCsv] = useState([''])
    const handleChangeC = (event:React.FormEvent<HTMLInputElement> ) => setCvalue(event.currentTarget.value)
    const handleChangeU = (event:React.FormEvent<HTMLInputElement> ) => setUvalue(event.currentTarget.value)
    const userButton = () => {
       const text = <Tr >
         <Td>user</Td>
         <Td>{uvalue}</Td>
       </Tr>

       setPair([...pair,text])
       setCsv([...csv,`user,${uvalue}`])
       
    }
    const computerButton = () => {
        const text = <Tr >
          <Td>computer</Td>
          <Td>{cvalue}</Td>
        </Tr>
        setPair([...pair,text])
        setCsv([...csv,`computer,${cvalue}`])
    }
    const resetU = () => {
        setUvalue("")
    }
    const resetC = () => {
        setCvalue("")
    }
    const reset = () => {
        setCsv([''])
        setPair([<></>])
    }
    const export_csv_s = () => {

        const uri = "data:text/csv;charset=utf-8," 
    + csv.join("\n");

    const downloadLink = document.createElement("a");
downloadLink.href = uri;
downloadLink.download = "success.csv";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);

    }

    const export_csv_f = () => {

        const uri = "data:text/csv;charset=utf-8," 
    + csv.join("\n");

    const downloadLink = document.createElement("a");
downloadLink.href = uri;
downloadLink.download = "failed.csv";

document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);

    }
  return (
    <ChakraProvider>
        <HStack m = {4}>
        <Button onClick={reset}>
            RESET
        </Button>
        <Box m = {4} />
        <Button onClick={export_csv_s}>
            EXPORT_SUCCESS
        </Button>
        <Button onClick={export_csv_f}>
            EXPORT_FAILED
        </Button>
        </HStack>
        <Box m = {2}>
        <Stack spacing={4} maxW="960px"> 
            <InputGroup>
                <InputLeftAddon children='computer' />
                <Input  value={cvalue} onChange={handleChangeC} placeholder='text message' />
            </InputGroup>
            <HStack>
            <Button  maxW="240px" colorScheme='teal' size='md' onClick={computerButton}>
                send computer
            </Button>
            <Button  maxW="240px" colorScheme='red' size='md' onClick={resetC}>
                reset computer
            </Button>
            </HStack>
            <InputGroup>
                <InputLeftAddon children='user' />
                <Input value={uvalue} onChange={handleChangeU} placeholder='text message' />
            </InputGroup>

            <HStack>
            <Button maxW="240px" colorScheme='teal' size='md' onClick={userButton} >
                send user
            </Button>

            <Button  maxW="240px" colorScheme='red' size='md' onClick={resetU}>
                reset user
            </Button>
            </HStack>
           
        </Stack>
        </Box>
    <Box>
    <TableContainer>
  <Table variant="striped" >
    <Thead>
      <Tr >
        <Th w="6px">Which</Th>
        <Th >Text</Th>
      </Tr>
    </Thead>
    <Tbody>
        {pair}
    </Tbody>
  </Table>
</TableContainer>
    </Box>
   </ChakraProvider>
  )
}

export default Home
