import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justifyContent={"space-between"} p={"32px 165px 0px 165px"}>
      <Flex>
        <Image src="Logo.svg" />
      </Flex>
      <Flex>
        <Image src="navIcon.svg" />
      </Flex>
    </Flex>
  );
}
