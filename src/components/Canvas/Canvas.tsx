import { useCallback, useEffect, useLayoutEffect, useRef } from "react"
import styles from "./Canvas.module.scss"

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
    currentPos = useRef<{ x: number; y: number }>({
      x: 0,
      y: 0,
    })

  let radius = 0
  let growing = false

  useLayoutEffect(() => {
    currentPos.current.x = window.innerWidth / 2
    currentPos.current.y = window.innerHeight / 2
  }, [])

  const resize = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const draw = (ctx: CanvasRenderingContext2D | null, x: number, y: number) => {
    if (ctx) {
      ctx.beginPath()
      ctx.fillStyle = "#ffff00"
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
    }
  }

  const animate = useCallback((ctx: CanvasRenderingContext2D | null) => {
    if (ctx) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      console.log(growing)
      if (growing) grow()
      else shrink()
      draw(ctx, currentPos.current.x, currentPos.current.y)
    }
    requestAnimationFrame(() => animate(ctx))
  }, [])

  const mouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    currentPos.current.x = e.pageX
    currentPos.current.y = e.pageY - window.innerHeight
  }

  const grow = () => {
    if (radius < 125) radius += 10
    radius = Math.min(125, radius)
    return
  }

  const shrink = () => {
    if (radius > 0) radius -= 20
    radius = Math.max(0, radius)
    return
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      resize(canvas)
      window.onresize = () => resize(canvas)
      canvas.onmouseenter = () => (growing = true)
      canvas.onmouseleave = () => (growing = false)

      const ctx = canvas.getContext("2d")
      animate(ctx)
    }

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [animate, canvasRef])

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={mouseMoveHandler}
      className={styles.canvas}
    ></canvas>
  )
}

export default Canvas
