import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-slate-100',
        blue: 'bg-blue-900/40 text-blue-400',
        emerald: 'bg-emerald-900/40 text-emerald-400',
        amber: 'bg-amber-900/40 text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />
}

export { Badge, badgeVariants }
