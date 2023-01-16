import styled from "@emotion/styled"
import AboutBgText from "../../components/AboutBgText"
import Canvas from "../../components/Canvas"

const About = () => {
  return (
    <StyledSection>
      <Canvas />
      <AboutBgText />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fd0984;
  position: relative;
  overflow: hidden;
`

export default About
