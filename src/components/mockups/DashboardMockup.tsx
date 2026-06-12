"use client";

import { BarChart3, Calendar, Phone, TrendingUp } from "lucide-react";

const METRICS = [
  { label: "Calls Today", value: "34", change: "+12%", icon: Phone },
  { label: "Booked", value: "18", change: "+8%", icon: Calendar },
  { label: "Answer Rate", value: "98%", change: "+2%", icon: TrendingUp },
];

const CHART_BARS = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-medium text-white">Analytics Dashboard</span>
        </div>
        <span className="text-xs text-muted">Last 30 days</span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-5">
        {METRICS.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-surface-elevated p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <metric.icon className="h-3.5 w-3.5 text-muted" />
              <span className="text-[10px] text-muted">{metric.label}</span>
            </div>
            <p className="text-lg font-semibold text-white">{metric.value}</p>
            <p className="text-[10px] text-green-400">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5">
        <p className="mb-3 text-xs text-muted">Call Volume</p>
        <div className="flex h-24 items-end gap-1.5">
          {CHART_BARS.map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/40 to-purple-500/60"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
