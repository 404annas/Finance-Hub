'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChartCard } from '@/components/ui/chart-card'
import { marketPerformanceData, transactionVolumeData } from '@/lib/data'

export function Stats({ data }: { data?: any }) {
  return (
    <section className="border-t border-slate-800 bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">{data?.heading}</h2>
          <p className="max-w-2xl text-slate-400">R{data?.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ChartCard title="Market Segment Performance" description="Asset allocation by sector">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                  }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Weekly Transaction Volume" description="Total transactions processed">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '4px',
                  }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  stroke="#10B981"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  )
}
