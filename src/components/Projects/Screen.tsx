import styled from "@emotion/styled"
import { AnimatePresence } from "framer-motion"
import React from "react"
import ProjectsTransition from "./TransitionScreen"

const Screen: React.FC<{
  link: string
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ link, loading, setLoading }) => {
  const onLoadHandler = () => {
    setLoading(false)
  }

  return (
    <StyledDiv>
      <AnimatePresence>{loading && <ProjectsTransition />}</AnimatePresence>
      <iframe onLoad={onLoadHandler} src={link} allow="autoplay"></iframe>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  flex: var(--screenSize);
  height: 100%;
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export default Screen
