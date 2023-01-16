import styled from "@emotion/styled"
import { FaTimes } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { useMenu } from "../../store/providers/menuProvider"

const MenuIcon = () => {
  const { menuVis, setMenuVis } = useMenu()

  const clickHandler = () => setMenuVis(menuVis => !menuVis)

  return (
    <StyledButton onClick={clickHandler}>
      {!menuVis ? <HiMenu /> : <FaTimes />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: fixed;
  top: var(--padding);
  right: var(--padding);

  padding: 0.5rem;

  background: transparent;
  color: #fff;
  font-size: 2rem;

  cursor: pointer;
  z-index: 999;
`

export default MenuIcon
