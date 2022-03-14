import AboutBgText from "../../components/AboutBgText"
import Canvas from "../../components/Canvas"
import styles from "./About.module.scss"

const About = () => {
  return (
    <section className={styles.about}>
      <Canvas />
      <AboutBgText />
    </section>
  )
}

export default About
