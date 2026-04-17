'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ChartCardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ChartCard({
  title,
  description,
  children,
  className,
}: ChartCardProps) {
  return (
    <div
      className={cn(
        'rounded border border-slate-800 bg-slate-900/50 p-6',
        className
      )}
    >
      {title && <h3 className="mb-1 text-sm font-semibold text-white">{title}</h3>}
      {description && (
        <p className="mb-4 text-xs text-slate-400">{description}</p>
      )}
      <div className="w-full">{children}</div>
    </div>
  )
}
