import type { AppProps } from "next/app"
import { MenuProvider } from "../store/providers/menuProvider"
import "../styles/global.scss"

import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MenuProvider>
    <Component {...pageProps} />
    <Analytics />
  </MenuProvider>
);

export default MyApp;
