import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { BiSupport } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { BsInfoCircleFill, BsFillTelephoneFill } from 'react-icons/bs';

export function Header() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} p={"32px 165px 0px 165px"}>
      <Flex>
        <Image src="Logo.svg" />
      </Flex>
      <Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="whiteAlpha.500"
            bg={"White"}
            fontSize={"2xl"}
            color='blue.800'
            h={'45px'}
            w={'45px'}
            />
          <MenuList color='white'>
            <MenuItem icon={<BiSupport size = '20px'/>}>
              Centro de Ajuda
            </MenuItem>
            <MenuItem icon={<BsInfoCircleFill size = '20px'/>}>
              Sobre nós
            </MenuItem>            
            <MenuItem icon={<BsFillTelephoneFill size = '20px'/>}>
              Contatos
            </MenuItem>
            <MenuItem icon={<FaUserPlus size = '20px'/>}>
              Ser cliente
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
