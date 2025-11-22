"use client"

import { useEffect, useRef, useState } from "react"

interface BirthdayCardProps {
  name: string
  age: number
  newAge: number
  wordOne: string
  wordTwo: string
  birthday: string
}

export default function BirthdayCard({ name, age, newAge, wordOne, wordTwo, birthday }: BirthdayCardProps) {
  const titleRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.animation = "fadeInDown 1s ease-out"
    }
  }, [])

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(birthday).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [birthday])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl" ref={titleRef}>
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-light tracking-widest text-blue-400 mb-6">HOŞ GELDİN</h2>
          <h1 className="text-7xl md:text-8xl font-black text-white mb-4">{name}</h1>
        </div>

        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="glass-effect px-8 py-6 rounded-2xl">
            <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {age}
            </div>
            <p className="text-muted-foreground mt-2 text-sm uppercase tracking-wide">Yaş</p>
          </div>

          <div className="text-4xl md:text-5xl text-blue-400/60">→</div>

          <div className="glass-effect px-8 py-6 rounded-2xl">
            <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {newAge}
            </div>
            <p className="text-muted-foreground mt-2 text-sm uppercase tracking-wide">Yeni Yaş</p>
          </div>
        </div>

        <div className="mb-12 glass-effect p-8 rounded-2xl max-w-md mx-auto">
          <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            <span className="font-semibold">{wordOne}</span> ve <span className="font-semibold">{wordTwo}</span> olmaya
            devam et!
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { value: timeLeft.days, label: "Day" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minuntes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{String(item.value).padStart(2, "0")}</div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
            Happy Brithday To You!!
          </button>
        </div>
      </div>
    </section>
  )
}
