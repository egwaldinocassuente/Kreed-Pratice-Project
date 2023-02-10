import { Text, Button, Flex, Heading, Input, Box, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";

import { PhoneIcon, AddIcon, WarningIcon, CheckIcon, Search2Icon } from '@chakra-ui/icons'

export function Main() {
  return (
    <Flex justifyContent={'center'}>

      <Flex 
      w='40%'
      direction={"column"}
      justifyContent='center'
      p={"218px 0px 30px 0px"}
      gap={5}
      >
        <Heading color={"white"} fontWeight={"extrabold"} textAlign="center" lineHeight='3.7rem' fontSize='2.5rem'>
          Pesquise nosso banco de dados de clientes
        </Heading>

        <InputGroup>
        <InputLeftElement
        pointerEvents='none'
        children="$"
         /> 

        <Input 
        placeholder="Encontre seu cliente aqui"
        bgColor='white'
        color={'black'}
        alignSelf={'center'}
        _placeholder={{color: 'blackAlpha.500'}}
        fontSize="16px"
        borderRadius='10px' />

        <InputRightElement children={<Search2Icon color='blue.800' />} />
          
        </InputGroup>
         

      <Text alignSelf={'center'} fontSize='16px' mb={'55px'}>Obtenha seus clientes integrados com nossa tecnologia</Text>

      <Button bgColor='white' color='blue.800' variant='white'  borderRadius='2rem' alignSelf={'center'}>
        Vamos lá
      </Button>

      </Flex>
    </Flex>
  );
}
