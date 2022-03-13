import styles from "./index.module.scss"
import { useEffect, useState } from "react"
import ImageSpan from "../../components/ImageSpan"
import HomeText from "../../components/HomeText"

type spanI = {
  x: number
  y: number
  time: number
}

const Home = () => {
  const [spanArray, setSpanArray] = useState<spanI[]>([])
  const [animationFrame, setAnimationFrame] = useState<number>()
  const eraseTime = 5_000
  const fps = 60
  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const { clientX: x, clientY: y } = e
    setSpanArray(spanArray => [
      ...spanArray,
      {
        x,
        y,
        time: Date.now(),
      },
    ])
  }

  const animate = () => {
    setSpanArray(spanArray =>
      spanArray.filter(ele => Date.now() - ele.time < eraseTime)
    )
    setTimeout(() => {
      setAnimationFrame(requestAnimationFrame(animate))
    }, 1000 / fps)
  }

  useEffect(() => {
    animate()
    return () => {
      animationFrame && cancelAnimationFrame(animationFrame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.section} onMouseMove={mouseMoveHandler}>
      {spanArray.map(ele => (
        <ImageSpan top={ele.y} left={ele.x} key={ele.time} />
      ))}
      <HomeText />
    </section>
  )
}

export default Home
