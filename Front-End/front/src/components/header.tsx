import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import nookies from "nookies";
import ModalFormCreateContact from "./modalFormCreateContact";

const Header = () => {
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, "token");
    destroyCookie(null, "userName");
    destroyCookie(null, "userId");
    router.push("/");
  };

  const cookies = nookies.get();

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
                {cookies["userName"]}
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
