import styled from "@emotion/styled"
import { useState } from "react"
import Controls from "../../components/Projects/Controls"
import Grill from "../../components/Projects/Grill"
import ProjectsHeading from "../../components/Projects/ProjectsHeading"
import Screen from "../../components/Projects/Screen"

const Projects = () => {
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const links = [
    "https://iichetiet.netlify.app/",
    "https://messenger1.netlify.app/",
    "https://wartrade.netlify.app/",
    "https://selfavoidingwalk.netlify.app/",
    "https://algonovice.netlify.app/",
    "https://musichive.netlify.app/",
    "https://ieitiet.netlify.app/",
    "https://raksha-sigma.vercel.app/",
  ]

  return (
    <StyledSection>
      <div className="base">
        <Screen loading={loading} setLoading={setLoading} link={links[index]} />
        <div className="rightPanel">
          <ProjectsHeading />
          <Grill />
          <Controls
            setLoading={setLoading}
            index={index}
            length={links.length}
            setIndex={setIndex}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  --frame: #835435;
  --frame: #440bd4;
  --base: linear-gradient(90deg, #030303, #1f1f1f);
  --radius: 20px;
  --screenSize: 0.75;
  --silver: linear-gradient(101.75deg, #c4cace 0%, #b3b6b5 100%);
  --grill: #111111;
  --fadedColor: #5e5e5e;

  --boltSize: 1rem;
  --boltBG: #5e5e5e;

  --internalPadding: calc(var(--padding) / 1.2);

  width: 100%;
  min-height: 100vh;
  // background: #fd0984;
  position: relative;
  overflow: hidden;

  background: var(--frame);
  padding: calc(var(--padding) / 3);

  display: grid;
  place-items: center;

  .base {
    background: var(--base);
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    border: 10px solid #835435;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: calc(var(--internalPadding) / 2);
    gap: var(--internalPadding);

    .rightPanel {
      flex: calc(1 - var(--screenSize));
      height: 100%;
      //  background: red;
      gap: calc(var(--internalPadding) / 3);

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
`

export default Projects
