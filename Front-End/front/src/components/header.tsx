import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import nookies from "nookies";

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
        <Flex h={16} w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <HStack spacing={8} w={"90%"} alignItems={"center"}>
            <Box>
              <Text fontWeight={"bold"} fontSize={20} color={"white"}>
                {cookies["userName"]}
              </Text>
            </Box>
          </HStack>
          <Button
            loadingText="Submitting"
            size="lg"
            type="submit"
            variant={"default"}
            onClick={() => logout()}
            color={"white"}
            mr={"20px"}
            _hover={{ bg: "white", color: "purple.700" }}
          >
            Criar Contato
          </Button>
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
