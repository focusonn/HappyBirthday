"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  birthday: string
}

export default function Countdown({ birthday }: CountdownProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const birthdayDate = new Date(birthday).getTime()
      const now = new Date().getTime()
      const difference = birthdayDate - now

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [birthday])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Kutlama Hazırlanıyor</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Gün", value: time.days },
            { label: "Saat", value: time.hours },
            { label: "Dakika", value: time.minutes },
            { label: "Saniye", value: time.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-purple-100 hover:shadow-xl transition"
              style={{
                animation: `floatUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <style>{`
                @keyframes floatUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
              <div className="text-4xl font-black text-transparent bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm font-semibold text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
