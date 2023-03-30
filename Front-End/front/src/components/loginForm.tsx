import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IClientLogin } from "@/types";
import { useAuth } from "@/contexts/sessionContext";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientLogin>({ resolver: yupResolver(formSchema) });

  const onFormSubmit = (formData: IClientLogin) => {
    login(formData);
  };

  return (
    <Flex
      minH={"80vh"}
      alignItems={"center"}
      justify={"center"}
      flexDirection={"column"}
      border={"1px"}
      borderColor={"purple.700"}
      borderRadius={"5px"}
    >
      <Flex
        alignItems={"center"}
        justify={"center"}
        as="form"
        bg={useColorModeValue("gray.50", "gray.800")}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Login
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} minW={"200px"}>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="email"
                  {...register("email")}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    required
                    borderColor="black.300"
                    focusBorderColor="purple.700"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  type="submit"
                  variant={"default"}
                  bg="purple.700"
                  color="white"
                  _hover={{
                    bg: "purple.600",
                  }}
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Stack spacing={4} minW={"245px"}>
        <Button
          loadingText="Submitting"
          size="lg"
          type="submit"
          variant={"default"}
          bg="purple.700"
          color="white"
          _hover={{
            bg: "purple.600",
          }}
        >
          <Link as={NextLink} href={`/client/register`}>
            Cadastrar
          </Link>
        </Button>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
