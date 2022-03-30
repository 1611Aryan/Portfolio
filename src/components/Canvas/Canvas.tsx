import { useEffect, useRef, useCallback } from "react"
import styles from "./Canvas.module.scss"

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const radius = 150
  const currentPos = useRef<{ x: number; y: number }>({
      x: 0,
      y: 0,
    }),
    running = useRef<boolean>(true)

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
    if (running.current) {
      ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight)
      draw(ctx, currentPos.current.x, currentPos.current.y)
    }
    requestAnimationFrame(() => animate(ctx))
  }, [])

  const mouseMoveHandler = (e: React.MouseEvent<HTMLCanvasElement>) => {
    currentPos.current.x = e.pageX
    currentPos.current.y = e.pageY - window.innerHeight
  }

  useEffect(() => {
    const canvas = canvasRef.current
    currentPos.current.x = window.innerWidth / 2
    currentPos.current.y = window.innerHeight / 2

    if (canvas) {
      resize(canvas)
      window.onresize = () => resize(canvas)
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
      onMouseEnter={() => (running.current = true)}
      onMouseLeave={() => (running.current = false)}
      onMouseMove={mouseMoveHandler}
      className={styles.canvas}
    ></canvas>
  )
}

export default Canvas
