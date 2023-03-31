import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import nookies from "nookies";
import ModalFormCreateContact from "../modals/modalFormCreateContact";
import { useEffect, useState } from "react";

const Header = () => {
  const [name, setName] = useState("");

  const cookies = nookies.get();

  useEffect(() => {
    setName(cookies["userName"]);
  }, [cookies]);

  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "token");
    destroyCookie(null, "userName");
    destroyCookie(null, "userId");
    router.push("/");
  };

  return (
    <>
      <Box bg={"purple.600"} px={4}>
        <Flex
          h={16}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          px={"50px"}
        >
          <HStack spacing={8} w={"90%"} alignItems={"center"}>
            <Box>
              <Button
                bg={"purple.600"}
                fontWeight={"bold"}
                fontSize={20}
                color={"white"}
                _hover={{}}
                onClick={() => router.push("/client")}
              >
                {name}
              </Button>
            </Box>
          </HStack>
          <ModalFormCreateContact />
          <Button
            loadingText="Submitting"
            size="lg"
            type="submit"
            variant={"default"}
            onClick={() => logout()}
            color={"white"}
            _hover={{ bg: "white", color: "purple.700" }}
          >
            Sair
          </Button>
          <Flex alignItems={"center"}></Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
