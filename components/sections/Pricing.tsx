'use client'

import React from 'react'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button-finance'
import { pricingTiers } from '@/lib/data'

export function Pricing({ data }: { data?: any }) {
  const tiers = data
    ? [data.starter, data.pro, data.enterprise].filter(Boolean)
    : pricingTiers

  return (
    <section id="pricing" className="border-t border-slate-800 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="max-w-2xl text-slate-400">
            Choose the plan that fits your investment needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => {
            const isSanityTier = data !== undefined
            const name = isSanityTier ? tier.heading : tier.name
            const description = isSanityTier ? tier.description : tier.description
            const price = isSanityTier ? tier.amount : tier.price
            const buttonText = isSanityTier ? tier.buttonText ?? 'Get Started' : 'Get Started'
            const features = isSanityTier
              ? (tier.features ?? []).map((feature: string) => ({ text: feature, included: true }))
              : tier.features
            const highlighted = isSanityTier ? index === 1 : tier.highlighted

            return (
              <div
                key={name ?? index}
                className={`rounded border transition-colors ${
                  highlighted
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-slate-900/50'
                    : 'border-slate-800 bg-slate-900/50'
                }`}
              >
                <div className="p-8">
                  {highlighted && (
                    <div className="mb-4 inline-block rounded bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                      Recommended
                    </div>
                  )}

                  <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
                  <p className="mb-6 text-sm text-slate-400">{description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>

                  <Button
                    className="mb-8 w-full"
                    variant={highlighted ? 'primary' : 'secondary'}
                    size="lg"
                  >
                    {buttonText}
                  </Button>

                  <div className="space-y-4">
                    {features.map((feature: { text: string; included: boolean }, idx: number) => {
                      // Determine if feature should be included based on tier
                      const isIncluded = isSanityTier
                        ? (index === 0 && idx < features.length - 3) || // Starter: first features included
                          (index === 1 && idx < features.length - 1) || // Pro: all but last included
                          (index === 2) // Enterprise: all included
                        : feature.included

                      return (
                        <div key={idx} className="flex items-start gap-3">
                          {isIncluded ? (
                            <Check className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                          ) : (
                            <X className="h-5 w-5 flex-shrink-0 text-slate-600" />
                          )}
                          <span
                            className={`text-sm ${
                              isIncluded ? 'text-white' : 'text-slate-500'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
