import type { AppProps } from "next/app"
import { MenuProvider } from "../store/providers/menuProvider"
import "../styles/global.scss"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MenuProvider>
    <Component {...pageProps} />
  </MenuProvider>
)

export default MyApp
