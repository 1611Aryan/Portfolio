import type { NextPage } from "next"
import Head from "next/head"
import Menu from "../components/Menu"
import MenuIcon from "../components/MenuIcon"
import About from "../sections/About"
import Home from "../sections/Home"

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aryan • Portfolio</title>
        <meta
          name="description"
          content="Web Developer Portfolio Website ~ Aryan Gupta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuIcon />
      <Menu />
      <Home />
      <About />
    </div>
  )
}

export default Index
