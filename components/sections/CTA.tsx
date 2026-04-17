'use client'

import React from 'react'
import { Button } from '@/components/ui/button-finance'

export function CTA({ data }: { data?: any }) {
  return (
    <section className="border-t border-slate-800 bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">{data?.heading}</h2>
        <p className="mb-8 text-lg text-slate-400">
          {data?.description}
        </p>
        <a href={data?.button.url} target="_blank">
        <Button size="lg">{data?.button?.text}</Button>
        </a>
      </div>
    </section>
  )
}
