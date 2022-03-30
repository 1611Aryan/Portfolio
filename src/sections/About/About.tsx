import AboutBgText from "../../components/AboutBgText"
import Canvas from "../../components/Canvas"
import styles from "./About.module.scss"

const About = () => {
  return (
    <section className={styles.about}>
      <Canvas />
      <AboutBgText />
      <div className={styles.transition}></div>
    </section>
  )
}

export default About
