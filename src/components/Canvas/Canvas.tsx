import { useEffect, useRef, useCallback } from "react"
import styles from "./Canvas.module.scss"

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const radius = 150
  const x = useRef<number>(0),
    y = useRef<number>(0),
    running = useRef<boolean>(false)

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
      draw(ctx, x.current, y.current)
    }

    requestAnimationFrame(() => animate(ctx))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      resize(canvas)
      window.onresize = () => resize(canvas)
      canvas.onmouseenter = () => (running.current = true)
      canvas.onmouseleave = () => (running.current = false)
      canvas.onmousemove = e => {
        x.current = e.pageX
        y.current = e.pageY - window.innerHeight
      }
      const ctx = canvas.getContext("2d")
      animate(ctx)
    }

    return () => {
      canvas && canvas.removeEventListener("mousemove", () => {})
      window.removeEventListener("resize", () => {})
    }
  }, [animate, canvasRef])

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>
}

export default Canvas
