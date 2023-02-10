import { Text, Button, Flex, Heading, Input} from "@chakra-ui/react";

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

  
        <Input
        bgColor='white'
        alignSelf={'center'}
        placeholder="Encontre seu cliente aqui"
        _placeholder={{color: 'blackAlpha.500'}}
        fontSize="16px"
        borderRadius='10px'
        /> 

      <Text alignSelf={'center'} fontSize='16px' mb={'55px'}>Obtenha seus clientes integrados com nossa tecnologia</Text>

      <Button bgColor='white' color='blue.800' variant='white'  borderRadius='2rem' alignSelf={'center'}>
        Vamos lá
      </Button>

      </Flex>
    </Flex>
  );
}
