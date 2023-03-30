import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "@/contexts/sessionContext";
import { ClientProvider } from "@/contexts/clientContext";
import { ContactProvider } from "@/contexts/contactContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider>
        <ClientProvider>
          <ContactProvider>
            <Component {...pageProps} />
          </ContactProvider>
        </ClientProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}
