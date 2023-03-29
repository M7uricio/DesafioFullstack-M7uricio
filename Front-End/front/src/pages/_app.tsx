import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/authContext";
import { RegisterProvider } from "@/contexts/registerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <RegisterProvider>
          <Component {...pageProps} />
        </RegisterProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
