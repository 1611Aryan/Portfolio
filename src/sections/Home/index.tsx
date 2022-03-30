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

  const controls = {
    eraseTime: 750,
    fps: 30,
    limit: 20,
  }

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLVideoElement, MouseEvent>
  ) => {
    const { pageX: x, pageY: y } = e
    setSpanArray(spanArray => {
      if (spanArray.length > controls.limit) spanArray.shift()
      return [
        ...spanArray,
        {
          x,
          y,
          time: Date.now(),
        },
      ]
    })
  }

  const touchHandler = (e: React.TouchEvent<HTMLElement>) => {
    const { clientX: x, clientY: y } = e.touches[0]
    setSpanArray(spanArray => {
      if (spanArray.length > controls.limit) spanArray.pop()
      return [
        ...spanArray,
        {
          x,
          y,
          time: Date.now(),
        },
      ]
    })
  }

  const animate = () => {
    setSpanArray(spanArray =>
      spanArray.filter(ele => Date.now() - ele.time < controls.eraseTime)
    )
    setTimeout(() => {
      setAnimationFrame(requestAnimationFrame(animate))
    }, 1000 / controls.fps)
  }

  useEffect(() => {
    animate()
    return () => {
      animationFrame && cancelAnimationFrame(animationFrame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className={styles.section}
      onMouseMove={mouseMoveHandler}
      onTouchMove={touchHandler}
    >
      {spanArray.map(ele => (
        <ImageSpan top={ele.y} left={ele.x} key={ele.time} />
      ))}
      <HomeText />
    </section>
  )
}

export default Home
