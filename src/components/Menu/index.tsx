import styled from "@emotion/styled"
import { AnimatePresence, motion } from "framer-motion"
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
        <StyledMenu
          initial="initial"
          animate="final"
          variants={variants}
          exit="exit"
        >
          <nav>
            <ul>
              <motion.li variants={listVariants}>About</motion.li>
              <motion.li variants={listVariants}>Projects</motion.li>
              <motion.li variants={listVariants}>Contact</motion.li>
            </ul>
          </nav>
        </StyledMenu>
      )}
    </AnimatePresence>
  )
}

const StyledMenu = styled(motion.menu)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  nav {
    width: 100%;
    height: 100%;
    ul {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      li {
        width: 100%;
        flex: 1;

        padding: var(--padding);

        font-size: 5rem;
        font-family: var(--fontSerif);
        font-weight: 500;
        color: #fff;

        &:nth-child(1) {
          background: #ff2079;
          cursor: pointer;
        }
        &:nth-child(2) {
          background: #440bd4;
          cursor: pointer;
        }
        &:nth-child(3) {
          background: #04005e;
          cursor: pointer;
        }
      }
    }
  }
`

export default Menu
