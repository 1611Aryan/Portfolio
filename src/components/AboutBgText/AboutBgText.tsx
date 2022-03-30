import styles from "./AboutBgText.module.scss"

const AboutBgText = () => {
  return (
    <div className={styles.aboutBgText}>
      <h4>
        <div>
          <span>FULL STACK</span>
          <span className={styles.shadow}>FULL STACK</span>
        </div>
        <div>
          <span>DEVELOPER</span>
          <span className={styles.shadow}>DEVELOPER</span>
        </div>
      </h4>
    </div>
  )
}

export default AboutBgText
