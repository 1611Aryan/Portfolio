import styled from "@emotion/styled"

const HomeText = () => {
  return (
    <StyledDiv>
      <h1>
        Hi!
        <br />I am Aryan.
      </h1>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--fontSerif);
  font-weight: 900;
  font-size: 6rem;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(black, 0.1);
  position: relative;
  z-index: 2;
`

export default HomeText
