import styled from "@emotion/styled"

const AboutBgText = () => {
  return (
    <StyledDiv>
      <h4>
        <div>
          <span>FULL STACK</span>
          <span className="shadow">FULL STACK</span>
        </div>
        <div>
          <span>DEVELOPER</span>
          <span className="shadow">DEVELOPER</span>
        </div>
      </h4>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  pointer-events: none;
  background: #fd0984;

  h4 {
    height: 100%;
    color: #ca0000;
    font-family: var(--fontSans);
    font-size: 19rem;
    font-weight: 700;
    width: min-content;
    z-index: 2;

    transform: translate(-4%);
    line-height: 0.8;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    mix-blend-mode: luminosity;

    div {
      position: relative;
    }

    .shadow {
      position: absolute;
      top: 6%;
      left: 2%;
      width: 100%;
      color: #31ff0f;
    }
  }
`

export default AboutBgText
