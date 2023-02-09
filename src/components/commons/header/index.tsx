import { Flex, Image, Text, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex p={5} align="center" gap={3}>
      <Image src="icon.svg" />
      <Flex direction="column" >
        <Heading>beatBox</Heading>
        <Text>Compra e venda de diversos instrumentais</Text>
      </Flex>
    </Flex>
  );
}
     