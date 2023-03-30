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
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRegisterAndUpdateClient } from "@/types";
import { useClient } from "@/contexts/clientContext";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registerClient } = useClient();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatório"),
    telephone: yup.string().required("Telefone obrigatório"),
  });

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputFone, setInputFone] = useState("");

  const nameError = inputName === "";
  const emailError = inputEmail === "";
  const passwordError = inputPassword === "";
  const foneError = inputFone === "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterAndUpdateClient>({ resolver: yupResolver(formSchema) });

  const onFormSubmit = (formData: IRegisterAndUpdateClient) => {
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
              <FormControl id="name" isRequired isInvalid={nameError}>
                <FormLabel>Nome</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="text"
                  {...register("name")}
                  onChange={(e) => setInputName(e.target.value)}
                />
                {nameError ? (
                  <FormHelperText>Digite seu nome</FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                    {errors.name?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl id="email" isRequired isInvalid={emailError}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="email"
                  {...register("email")}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
                {emailError ? (
                  <FormHelperText>Digite seu e-mail</FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                    {errors.email?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl id="password" isRequired isInvalid={passwordError}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    required
                    borderColor="black.300"
                    focusBorderColor="purple.700"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    onChange={(e) => setInputPassword(e.target.value)}
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
                {passwordError ? (
                  <FormHelperText>Digite sua senha</FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                    {errors.password?.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl id="telephone" isRequired isInvalid={foneError}>
                <FormLabel>Telefone</FormLabel>
                <Input
                  required
                  borderColor="black.300"
                  focusBorderColor="purple.700"
                  type="text"
                  {...register("telephone")}
                  onChange={(e) => setInputFone(e.target.value)}
                />
                {foneError ? (
                  <FormHelperText>Digite seu telefone</FormHelperText>
                ) : (
                  <FormHelperText color={"red"}>
                    {errors.telephone?.message}
                  </FormHelperText>
                )}
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
