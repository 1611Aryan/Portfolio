import styled from "@emotion/styled"
import { motion, Variants } from "framer-motion"
import Image from "next/image"
import transition from "./../../../public/static/media/projectsTransition.gif"

const ProjectsTransition = () => {
  const variants: Variants = {
    initial: { opacity: 0 },
    final: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <StyledDiv
      initial="initial"
      animate="final"
      variants={variants}
      exit="exit"
    >
      <Image src={transition} alt="static" />
    </StyledDiv>
  )
}

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;
    filter: grayscale(30%);
  }
`

export default ProjectsTransition
