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
import { IRegisterandUpdateContacts } from "@/types";
import { useContact } from "@/contexts/contactContext";
import { useState } from "react";

const ModalFormUpdateContact = (id: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { updateContact } = useContact();

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
  } = useForm<IRegisterandUpdateContacts>({
    resolver: yupResolver(formschema),
  });

  const onFormSubmit = (formData: IRegisterandUpdateContacts) => {
    updateContact(formData, id.id);
  };

  return (
    <>
      <Button
        variant="default"
        onClick={onOpen}
        loadingText="Submitting"
        bg={"yellow.300"}
        _hover={{ bg: "yellow.100" }}
        fontSize={"1.2rem"}
        fontWeight={600}
      >
        Atualizar
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Contato</ModalHeader>
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
                <FormHelperText>Digite o nome do contato</FormHelperText>
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
                <FormHelperText>Digite o e-mail do contato</FormHelperText>
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
                <FormHelperText>Digite o telefone do contato </FormHelperText>
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
export default ModalFormUpdateContact;
