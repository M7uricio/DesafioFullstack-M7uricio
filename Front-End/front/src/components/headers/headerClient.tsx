import { Box, Flex, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { AiFillHome } from "react-icons/ai";

const HeaderClient = () => {
  const router = useRouter();

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
            onClick={() => router.push("/dashboard")}
            color={"white"}
            w="1.9rem"
            fontSize="1.6rem"
          >
            <Icon as={AiFillHome} _hover={{ fontSize: "1.9rem" }}></Icon>
          </Button>
          <Flex alignItems={"center"}></Flex>
        </Flex>
      </Box>
    </>
  );
};

export default HeaderClient;
