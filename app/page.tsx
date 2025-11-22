"use client"

import { data } from "../lib/config"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">Happy Birthday, {data.name}!</h1>
            <p className="text-lg text-slate-600">Today is your special day</p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-2">NEW AGE</p>
              <p className="text-4xl font-bold text-blue-600">{data.newAge}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-2">CURRENT AGE</p>
              <p className="text-4xl font-bold text-purple-600">{data.age}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <p className="text-center text-lg text-slate-700">
              You are <span className="font-semibold text-amber-700">{data.wordOne}</span> and{" "}
              <span className="font-semibold text-amber-700">{data.wordTwo}</span>.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500 font-medium">Birthday Date</p>
            <p className="text-xl font-semibold text-slate-700 mt-1">{data.birthday}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
