import { Center } from "@chakra-ui/react";
import LoginForm from "@/components/forms/loginForm";

const Login = () => {
  return (
    <Center h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <LoginForm />
    </Center>
  );
};

export default Login;
