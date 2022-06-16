/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Box, Button, ChakraProvider, HStack, Input, InputGroup, InputLeftAddon, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { SetStateAction, useEffect, useState } from 'react'

const Home: NextPage = () => {
    const csv_sds = ["気が沈んで憂うつだ",
        "朝方はいちばん気分がよい",
        "悲しい、泣きたくなる",
        "夜、眠れない",
        "食欲はふつうだ",
        "まだ性欲がある（セックスが楽しい）",
        "最近痩せてきた",
        "便秘している",
        "動悸がする",
        "何となく疲れる",
        "気持はいつもさっぱりしている",
        "いつもとかわりなく行動できる",
        "落ち着かずじっとしていられない",
        "将来に希望がある",
        "いつもよりいらいらする",
        "{たやすく決断できる}",
        "役に立つ働ける人間だと思う",
        "生活はかなり充実している",
        "自分が死んだほうが他の者は楽に暮らせると思う",
        "以前からしていることを今でも楽しんでいる",]
    const [pair,setPair] = useState([<></>])
    const [cvalue, setCvalue] = useState('')
    const [uvalue, setUvalue] = useState('')
    const [value, setValue] = useState('')
    const [csv, setCsv] = useState(['computer,user'])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
        setCsv([`main_question,${event.target.options[event.target.selectedIndex].text}`].concat(csv))
      };
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
    const map_sds = (ques : String) => {
        return (<option value='option1'>{ques}</option>)
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
    useEffect(()=>{

        setCsv([''])
        setPair([<></>])
    },[])
  return (
        <ChakraProvider>
        <Select placeholder='Select option'  maxW="960px" m = {4} value={value} onChange={handleChange}> 
            {csv_sds.map( x => map_sds(x))}
        </Select>
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
