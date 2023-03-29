import { IContacts } from "@/types";
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
  List,
  ListItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

interface Props {
  contacts: IContacts[];
}

const ListContacts = ({ contacts }: Props) => {
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
        w={"90%"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        m={"0 auto"}
        mt={"30px"}
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
              minW={"40px"}
              justifyContent={"center"}
            >
              Id: {elm.id}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              minW={"70px"}
              justifyContent={"center"}
            >
              Nome: {elm.name}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              minW={"200px"}
              justifyContent={"center"}
            >
              E-mail: {elm.email}
            </Flex>
            <Flex
              fontSize={"1.2rem"}
              fontWeight={500}
              minW={"150px"}
              justifyContent={"center"}
            >
              Telefone: {elm.telephone}
            </Flex>
            <Flex gap={"20px"}>
              <Button
                bg={"yellow.300"}
                _hover={{ bg: "yellow.100" }}
                fontSize={"1.2rem"}
                fontWeight={600}
              >
                Atualizar
              </Button>
              <Button w={"1.6rem"}>
                <Icon
                  as={DeleteIcon}
                  color={"red"}
                  fontSize={"1.5rem"}
                  _hover={{ fontSize: "1.6rem" }}
                />{" "}
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListContacts;
