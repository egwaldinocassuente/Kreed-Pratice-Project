import { Button, Flex, Heading, Input } from "@chakra-ui/react";



export function Main () {
    return (
        <Flex justifyContent={"center"} >
            
            <Flex p={"228px 0px 30px 0px"} flexWrap={"wrap"} justifyContent={"center"} gap={10}>
                <Heading color={"white"} fontWeight={"extrabold"}>Pesquise nosso banco de dados de clientes</Heading>
                <Input bg={"white"} placeholder="Encontre seu cliente aqui" w={"740px"} mr={"0px "} />
                <Button type={"reset"} color={"#1E255E"}>Vamos lá</Button>
            </Flex>

           
          
        </Flex>
    );
}