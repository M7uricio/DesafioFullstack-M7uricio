import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterAndUpdateClient } from "@/types";
import { useClient } from "@/contexts/clientContext";
import { useState } from "react";

const ModalFormUpdateClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { updateClient } = useClient();

  const formschema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("deve ser um e-mail válido").required(),
    telephone: yup.string().required(),
  });

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputFone, setInputFone] = useState("");

  const nameError = inputName === "";
  const emailError = inputEmail === "";
  const foneError = inputFone === "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterAndUpdateClient>({
    resolver: yupResolver(formschema),
  });

  const onFormSubmit = (formData: IRegisterAndUpdateClient) => {
    updateClient(formData);
  };

  return (
    <>
      <Button
        variant="default"
        onClick={onOpen}
        loadingText="Submitting"
        p={"30px"}
        bg={"yellow.300"}
        _hover={{ bg: "yellow.200" }}
        fontSize={"1.2rem"}
        fontWeight={700}
      >
        Atualizar Usuário
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Usuário</ModalHeader>
          <ModalBody pb={6}>
            <FormControl id="name" isRequired isInvalid={nameError}>
              <FormLabel>Nome</FormLabel>
              <Input
                required
                focusBorderColor="purple.600"
                errorBorderColor="red.300"
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
                focusBorderColor="purple.600"
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
            <FormControl id="telephone" isRequired isInvalid={foneError}>
              <FormLabel>Telefone</FormLabel>
              <Input
                required
                focusBorderColor="purple.600"
                errorBorderColor="red.300"
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
          </ModalBody>
          <ModalFooter>
            <Button
              size="lg"
              variant={"default"}
              _hover={{
                bg: "purple.700",
                color: "white",
              }}
              onClick={handleSubmit(onFormSubmit)}
            >
              Atualizar
            </Button>
            <Button size="lg" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalFormUpdateClient;
