import styled from "@emotion/styled"

const ImageSpan: React.FC<{
  top: number
  left: number
}> = ({ top, left }) => {
  return (
    <StyledSpan
      style={{
        top: top - (window.innerWidth * 4) / 100 + "px",
        left: left - (window.innerHeight * 4) / 100 + "px",
      }}
    ></StyledSpan>
  )
}

const StyledSpan = styled.span`
  --size: 30vmin;

  background: url("https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000");

  display: block;
  position: absolute;
  width: var(--size);
  height: var(--size);

  border-radius: 47% 53% 76% 24% / 70% 37% 63% 30%;
  filter: blur(4px);
  background-size: cover;
  background-attachment: fixed;
  pointer-events: none;

  will-change: background-position;

  animation: sway 3s linear;

  @keyframes sway {
    to {
      background-position: 0%;
    }
  }
`
export default ImageSpan
