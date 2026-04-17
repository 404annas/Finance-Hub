'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs as fallbackFaqs } from '@/lib/data'

export function FAQ({ data }: { data?: any }) {
  const heading = data?.heading ?? "Frequently Asked Questions"
  const description = data?.description ?? "Find answers to common questions about our platform."
  const faqItems = data
    ? [data.faq1, data.faq2, data.faq3, data.faq4, data.faq5, data.faq6].filter(Boolean)
    : fallbackFaqs

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-slate-800 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">{heading}</h2>
          <p className="text-slate-400">{description}</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => {
            const isSanityData = data !== undefined
            const question = isSanityData ? faq.question : faq.question
            const answer = isSanityData ? faq.answer : faq.answer

            return (
              <div
                key={index}
                className="rounded border border-slate-800 bg-slate-900/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-800/50"
                >
                  <span className="font-semibold text-white">{question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform text-slate-400 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="border-t border-slate-800 px-6 py-4">
                    <p className="text-slate-400">{answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
