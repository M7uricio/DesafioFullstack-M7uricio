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
import { IClientRegister } from "@/types";
import { useRegister } from "@/contexts/registerContext";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registerClient } = useRegister();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatório"),
    telephone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRegister>({ resolver: yupResolver(formSchema) });

  const onFormSubmit = (formData: IClientRegister) => {
    registerClient(formData);
  };

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      flexDirection={"column"}
      border={"1px"}
      borderColor={"purple.700"}
      borderRadius={"5px"}
      pb={"30px"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        as="form"
        bg={useColorModeValue("gray.50", "gray.800")}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} pt={"30px"} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Cadastro
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} minW={"200px"}>
              <FormControl id="name" isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="text"
                  {...register("name")}
                />
              </FormControl>
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
              <FormControl id="telephone" isRequired>
                <FormLabel>Telefone</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="text"
                  {...register("telephone")}
                />
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
                  Cadastrar
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
          <Link as={NextLink} href={`/`}>
            Login
          </Link>
        </Button>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
