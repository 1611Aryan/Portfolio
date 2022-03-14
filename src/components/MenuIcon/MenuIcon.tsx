import { FaHamburger, FaTimes } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { useMenu } from "../../store/providers/menuProvider"

import styles from "./MenuIcon.module.scss"

const MenuIcon = () => {
  const { menuVis, setMenuVis } = useMenu()

  const clickHandler = () => setMenuVis(menuVis => !menuVis)

  return (
    <button className={styles.menuIcon} onClick={clickHandler}>
      {!menuVis ? <HiMenu /> : <FaTimes />}
    </button>
  )
}

export default MenuIcon
