'use client'

import React from 'react'
import {
  Briefcase,
  Brain,
  ShieldCheck,
  Bitcoin,
  Calculator,
  Target,
} from 'lucide-react'
import { services as fallbackServices } from '@/lib/data'

const iconMap = {
  briefcase: <Briefcase className="h-8 w-8" />,
  brain: <Brain className="h-8 w-8" />,
  'shield-check': <ShieldCheck className="h-8 w-8" />,
  bitcoin: <Bitcoin className="h-8 w-8" />,
  calculator: <Calculator className="h-8 w-8" />,
  target: <Target className="h-8 w-8" />,
}

const defaultIcons = [
  <Briefcase className="h-8 w-8" />,
  <Brain className="h-8 w-8" />,
  <ShieldCheck className="h-8 w-8" />,
  <Bitcoin className="h-8 w-8" />,
  <Calculator className="h-8 w-8" />,
  <Target className="h-8 w-8" />,
]

interface ServicesProps {
  data?: any
}

export function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="border-t border-slate-800 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">{data?.heading}</h2>
          <p className="max-w-2xl text-slate-400">
            {data?.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(
            data
              ? [data.card1, data.card2, data.card3, data.card4, data.card5, data.card6].filter(Boolean)
              : fallbackServices
          ).map((service, index) => {
            const icon = service.icon
              ? iconMap[service.icon as keyof typeof iconMap]
              : defaultIcons[index] || defaultIcons[0]

            return (
              <div
                key={service.title ?? index}
                className="group rounded border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-slate-700"
              >
                <div className="mb-4 inline-block rounded bg-blue-500/10 p-3 text-blue-400 group-hover:text-amber-400">
                  {icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
