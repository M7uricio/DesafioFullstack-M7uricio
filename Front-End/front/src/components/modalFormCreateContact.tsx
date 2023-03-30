import {
  Button,
  FormControl,
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

const ModalFormCreateContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { createContact } = useContact();

  const formschema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .email("deve ser um e-mail válido")
      .required("E-mail obrigatório"),
    telephone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterandUpdateContacts>({
    resolver: yupResolver(formschema),
  });

  const onFormSubmit = (formData: IRegisterandUpdateContacts) => {
    createContact(formData);
  };

  return (
    <>
      <Button
        variant="default"
        onClick={onOpen}
        loadingText="Submitting"
        size="lg"
        type="submit"
        color={"white"}
        mr={"20px"}
        _hover={{ bg: "white", color: "purple.700" }}
      >
        Adicionar Contato
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Contato</ModalHeader>
          <ModalBody pb={6}>
            <FormControl id="name" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                required
                focusBorderColor="purple.600"
                errorBorderColor="red.300"
                type="text"
                {...register("name")}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>E-mail</FormLabel>
              <Input
                required
                focusBorderColor="purple.600"
                type="email"
                {...register("email")}
              />
            </FormControl>
            <FormControl id="telephone" isRequired>
              <FormLabel>Telefone</FormLabel>
              <Input
                required
                focusBorderColor="purple.600"
                errorBorderColor="red.300"
                type="text"
                {...register("telephone")}
              />
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
              Adicionar
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
export default ModalFormCreateContact;
