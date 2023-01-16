import styled from "@emotion/styled"
import { AiOutlinePlus } from "react-icons/ai"

const ProjectsHeading = () => {
  return (
    <StyledDiv>
      <span className="bolt left">
        <AiOutlinePlus />
      </span>
      <span className="bolt right">
        <AiOutlinePlus />
      </span>
      PROJECTS
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  width: 100%;
  padding: calc(var(--padding) / 1.5) var(--padding);
  border-radius: 4px;

  outline: 2px solid var(--fadedColor);
  outline-offset: -10px;

  background: var(--silver);
  color: var(--fadedColor);

  font-family: var(--fontCursive);
  font-size: 2rem;

  .bolt {
    position: absolute;

    width: var(--boltSize);
    height: var(--boltSize);

    border-radius: 50%;

    background: var(--boltBG);

    display: grid;
    place-items: center;

    font-size: 1rem;
    color: #eee;
  }

  .left {
    top: 10px;
    left: 10px;
    transform: translate(-50%, -50%);
  }
  .right {
    bottom: 10px;
    right: 10px;
    transform: translate(50%, 50%);
  }
`

export default ProjectsHeading
