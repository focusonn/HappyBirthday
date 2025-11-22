"use client"

import { useEffect, useRef } from "react"

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
      size: number
    }> = []

    const colors = ["#00D4FF", "#0099FF", "#6366F1", "#EC4899", "#FBBF24"]

    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          vx: (Math.random() - 0.5) * 10,
          vy: Math.random() * 8 + 6,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.008
        p.vy += 0.15

        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1)
        } else {
          ctx.fillStyle = `${p.color}${Math.floor(p.life * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    const triggerConfetti = () => {
      createParticles()
      animate()
    }

    window.addEventListener("click", triggerConfetti)
    triggerConfetti()

    const interval = setInterval(triggerConfetti, 2000)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("click", triggerConfetti)
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-auto cursor-pointer" />
}
