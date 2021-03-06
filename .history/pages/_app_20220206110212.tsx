import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { SessionProvider  } from "next-auth/react";

function MyApp({ Component, pageProps : { session, ...pageProps }}) {
  return ( 
    <SessionProvider session={session}>
      <RecoilRoot>
      
    </RecoilRoot>
      <Component {...pageProps} /> 
    </SessionProvider>  
  );

}

export default MyApp;
