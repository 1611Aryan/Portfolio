import styled from "@emotion/styled"

const Grill = () => {
  const grillSize = 15
  return (
    <StyledDiv>
      {Array(grillSize)
        .fill(null)
        .map((_, index) => (
          <span key={index}></span>
        ))}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;

  span {
    width: 100%;
    flex: 1;
    background: var(--silver);
    border-radius: 10px;
  }
`

export default Grill
