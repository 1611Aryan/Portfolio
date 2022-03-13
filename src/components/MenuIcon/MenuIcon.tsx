import { FaHamburger, FaTimes } from "react-icons/fa"
import { useMenu } from "../../store/providers/menuProvider"

import styles from "./MenuIcon.module.scss"

const MenuIcon = () => {
  const { menuVis, setMenuVis } = useMenu()

  return (
    <button className={styles.menuIcon}>
      {!menuVis ? (
        <FaHamburger onClick={() => setMenuVis(true)} />
      ) : (
        <FaTimes onClick={() => setMenuVis(false)} />
      )}
    </button>
  )
}

export default MenuIcon
