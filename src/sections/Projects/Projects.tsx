import { AiOutlinePlus } from "react-icons/ai"
import { TiArrowSortedUp } from "react-icons/ti"
import styles from "./Projects.module.scss"

const Projects = () => {
  const grillSize = 15

  return (
    <section className={styles.projects}>
      <div className={styles.base}>
        <div className={styles.screen}></div>
        <div className={styles.rightPanel}>
          <div className={styles.heading}>
            <span className={`${styles.bolt} ${styles.left}`}>
              <AiOutlinePlus />
            </span>
            <span className={`${styles.bolt} ${styles.right}`}>
              <AiOutlinePlus />
            </span>
            PROJECTS
          </div>
          <div className={styles.speakerGrill}>
            {Array(grillSize)
              .fill(null)
              .map((_, index) => (
                <span key={index}></span>
              ))}
          </div>
          <div className={styles.controls}>
            <div className={`${styles.dial} ${styles.large} `}>
              <div className={styles.innerDial}>
                <div className={styles.switch}>
                  <TiArrowSortedUp />
                </div>
              </div>
            </div>
            <div className={`${styles.dial} ${styles.small} `}>
              <div className={styles.innerDial}>
                <div className={styles.switch}>
                  <TiArrowSortedUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
