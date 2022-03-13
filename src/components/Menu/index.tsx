import styles from "./index.module.scss"
import { motion, AnimatePresence } from "framer-motion"
import { useMenu } from "../../store/providers/menuProvider"

const Menu = () => {
  const { menuVis } = useMenu()

  const variants = {
    initial: {
      x: "100%",
    },
    final: {
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: { x: "100%" },
  }

  const listVariants = {
    initial: { x: "100%" },
    final: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
      },
    },
  }

  return (
    <AnimatePresence>
      {menuVis && (
        <motion.section
          initial="initial"
          animate="final"
          variants={variants}
          exit="exit"
          className={styles.menu}
        >
          <nav>
            <ul>
              <motion.li variants={listVariants}>About</motion.li>
              <motion.li variants={listVariants}>Projects</motion.li>
              <motion.li variants={listVariants}>Contact</motion.li>
            </ul>
          </nav>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Menu
