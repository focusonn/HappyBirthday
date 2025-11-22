"use client"

import { useState } from "react"

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items = [
    { emoji: "🎂", label: "Pasta" },
    { emoji: "🎈", label: "Balonlar" },
    { emoji: "🎁", label: "Hediyeler" },
    { emoji: "🎊", label: "Konfeti" },
    { emoji: "🌟", label: "Yıldızlar" },
    { emoji: "💝", label: "Sevgi" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Kutlama Unsurları</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
              style={{
                animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <style>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateX(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>

              <div
                className={`
                h-32 rounded-2xl bg-white border-2 flex items-center justify-center cursor-pointer
                transition duration-300 transform
                ${
                  hoveredIndex === idx
                    ? "scale-110 shadow-2xl border-pink-400 bg-gradient-to-br from-pink-50 to-purple-50"
                    : "border-purple-200 shadow-md hover:shadow-lg"
                }
              `}
              >
                <span className={`text-5xl transition duration-300 ${hoveredIndex === idx ? "scale-125" : ""}`}>
                  {item.emoji}
                </span>
              </div>

              <p
                className={`
                text-center mt-3 font-semibold text-gray-700 transition duration-300
                ${hoveredIndex === idx ? "text-purple-600 scale-110" : ""}
              `}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
