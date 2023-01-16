import styled from "@emotion/styled"
import React from "react"
import { TiArrowSortedUp } from "react-icons/ti"

const Controls: React.FC<{
  setIndex: React.Dispatch<React.SetStateAction<number>>
  length: number
  index: number
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIndex, length, index, setLoading }) => {
  const next = () => {
    setLoading(true)
    setIndex(index => (index == length - 1 ? 0 : index + 1))
  }

  return (
    <StyledDiv>
      <div className="dial large">
        <div className="innerDial" onClick={next}>
          <div
            className="switch"
            style={{
              transform: ` translate(-50%, -50%) rotate(${Math.round(
                (360 / length) * index
              )}deg)`,
            }}
          >
            <TiArrowSortedUp />
          </div>
        </div>
      </div>
      <div className="dial small">
        <div className="innerDial">
          <div className="switch">
            <TiArrowSortedUp />
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  padding: calc(var(--internalPadding) / 3) 0;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  .dial {
    background: #d9d9d9;
    border-radius: 50%;
    aspect-ratio: 1/1;

    display: grid;
    place-items: center;

    .innerDial {
      width: 75%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background: #9b9b9b;

      position: relative;
      overflow: hidden;

      .switch {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: max(12%, 15px);
        height: 105%;
        padding-top: 5%;
        color: var(--fadedColor);
        font-size: 1rem;

        text-align: center;

        cursor: pointer;
      }
    }
  }

  .large {
    height: 65%;
    align-self: flex-start;
  }

  .small {
    height: 35%;
    align-self: flex-end;
  }
`

export default Controls
