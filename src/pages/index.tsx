import type { NextPage } from "next"
import Head from "next/head"
import Menu from "../components/Menu"
import MenuIcon from "../components/MenuIcon"
import About from "../sections/About"
import Home from "../sections/Home"
import Projects from "../sections/Projects"

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aryan • Portfolio</title>
        <meta
          name="description"
          content="Full Stack Engineer Portfolio ~ Aryan Gupta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuIcon />
      <Menu />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default Index
