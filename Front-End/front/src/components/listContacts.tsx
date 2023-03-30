import { IContacts } from "@/types";
import { Flex, Button, List, ListItem, Icon, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContact } from "@/contexts/contactContext";
import ModalFormUpdateContact from "./modalFormUpdateContact";

interface Props {
  contacts: IContacts[];
}

const ListContacts = ({ contacts }: Props) => {
  const { deleteContact } = useContact();

  return (
    <>
      <Text
        mt={"30px"}
        fontSize={"2rem"}
        fontWeight={700}
        align={"center"}
        color={"purple.700"}
      >
        Lista de Contatos
      </Text>
      <List
        w={"95%"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        m={"0 auto"}
        mt={"30px"}
        maxH={"75vh"}
        overflowY={"auto"}
      >
        {contacts.map((elm, index) => (
          <ListItem
            key={index}
            display={"flex"}
            gap={"30px"}
            mb={"20px"}
            justifyContent={"space-around"}
            alignItems={"center"}
            border={"2px"}
            borderColor={"purple.700"}
            borderRadius={"5px"}
            p={"8px"}
          >
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              w={"10%"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              Id: {elm.id}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              w={"20%"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              Nome: {elm.name}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              w={"30%"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              E-mail: {elm.email}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              w={"20%"}
              textAlign={"center"}
              justifyContent={"center"}
            >
              Telefone: {elm.telephone}
            </Flex>
            <Flex gap={"10%"}>
              <ModalFormUpdateContact id={elm.id} />
              <Button w={"1.6rem"} onClick={() => deleteContact(elm.id)}>
                <Icon
                  as={DeleteIcon}
                  color={"red"}
                  fontSize={"1.5rem"}
                  _hover={{ fontSize: "1.6rem" }}
                />
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListContacts;
