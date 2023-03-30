import { Flex } from "@chakra-ui/react";
import nookies from "nookies";

const InfoClient = () => {
  const cookies = nookies.get();
  return (
    <Flex
      border={"2px"}
      borderRadius={"5px"}
      borderColor={"purple.700"}
      w={"100%"}
      mt={"50px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Flex
        fontSize={"1.2rem"}
        fontWeight={500}
        w={"10%"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        Id: {cookies["userId"]}
      </Flex>
      <Flex
        fontSize={"1.2rem"}
        fontWeight={500}
        w={"20%"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        Nome: {cookies["userName"]}
      </Flex>
      <Flex
        fontSize={"1.2rem"}
        fontWeight={500}
        w={"30%"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        E-mail: {cookies["userEmail"]}
      </Flex>
      <Flex
        fontSize={"1.2rem"}
        fontWeight={500}
        w={"20%"}
        textAlign={"center"}
        justifyContent={"center"}
      >
        Telefone: {cookies["userFone"]}
      </Flex>
    </Flex>
  );
};

export default InfoClient;
