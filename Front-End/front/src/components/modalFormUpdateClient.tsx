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
import { IRegisterAndUpdateClient } from "@/types";
import { useClient } from "@/contexts/clientContext";

const ModalFormUpdateClient = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { updateClient } = useClient();

  const formschema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("deve ser um e-mail válido"),
    telephone: yup.string(),
  });

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
export default ModalFormUpdateClient;
