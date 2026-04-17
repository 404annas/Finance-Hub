"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button-finance";
import { portfolioChartData } from "@/lib/data";

interface HeroProps {
  data?: any;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-18">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-none text-white md:text-6xl">
              Invest with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>

            <p className="text-lg text-slate-400">
              {data.description ||
                "Unlock your wealth potential with AI-powered analytics, expert portfolio management, and institutional-grade trading tools."}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={data?.primaryButton.url} target="_blank">
                <Button size="lg">
                  {data?.primaryButton?.text || "Start Investing Now"}
                </Button>
              </a>
              <a href={data?.secondaryButton.url} target="_blank">
                <Button variant="ghost" size="lg">
                  {data?.secondaryButton?.text || "Learn More"}
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="mb-4 text-sm font-semibold text-slate-400">
              Portfolio Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={portfolioChartData}>
                <defs>
                  <linearGradient
                    id="colorPortfolio"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  vertical={false}
                />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "4px",
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Area
                  type="monotone"
                  dataKey="portfolio"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorPortfolio)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
