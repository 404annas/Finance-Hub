'use client'

import React from 'react'
import { Users, TrendingUp, Globe, Activity } from 'lucide-react'

const cardIcons = [
  <Users className="h-6 w-6" />,
  <TrendingUp className="h-6 w-6" />,
  <Globe className="h-6 w-6" />,
  <Activity className="h-6 w-6" />,
]

interface AboutProps {
  data?: any
}

export function About({ data }: AboutProps) {
  const cards = [data?.card1, data?.card2, data?.card3, data?.card4].filter(Boolean)

  return (
    <section id="about" className="border-t border-slate-800 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">{data?.heading}</h2>
            <p className="text-slate-400">
              {data?.description}
            </p>
            <p className="text-slate-400">
             {data?.paragraph}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="mb-3 text-blue-400">{cardIcons[index]}</div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="mt-2 text-3xl font-bold text-white">{card.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
