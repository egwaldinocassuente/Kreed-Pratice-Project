import { Box,  } from "@chakra-ui/react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";

function Container() {

  return (
    
    <Box
        w={"100vw"}
        h="100vh"
        backgroundImage="url('./HeroImage.svg')"
        bgSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      
      >
      <Header /> 
      <Main />
    </Box>
  );
}

export default Container;
