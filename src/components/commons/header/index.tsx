import { Flex, Heading, Image, Text } from "@chakra-ui/react";

 export function Header() {
    return (
        <Flex p="5" align="center" gap="3"> 
        <Image src = "icon.svg" />
            <Flex direction={"column"}>
               <Heading>blob.g</Heading>
               <Text>
                    Notícia do mundo dos codigos todos os dias !
               </Text>
            </Flex>
        </Flex>
    );
 }