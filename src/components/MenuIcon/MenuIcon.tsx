import { FaHamburger, FaTimes } from "react-icons/fa"
import { useMenu } from "../../store/providers/menuProvider"

import styles from "./MenuIcon.module.scss"

const MenuIcon = () => {
  const { menuVis, setMenuVis } = useMenu()

  const clickHandler = () => setMenuVis(menuVis => !menuVis)

  return (
    <button className={styles.menuIcon} onClick={clickHandler}>
      {!menuVis ? <FaHamburger /> : <FaTimes />}
    </button>
  )
}

export default MenuIcon
