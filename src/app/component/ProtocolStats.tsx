// app/components/ProtocolStats.tsx
"use client";

import React from "react";
import { ArrowDownRight, Globe, Layers, Headphones, Zap } from "lucide-react";

export default function ProtocolStats() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-12 relative z-10">
      <div className="grid lg:grid-cols-12 gap-8 items-center bg-white/[0.02] dark:bg-black/20 border border-white/5 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        {/* LEFT COLUMN: Asset Timeline Chart */}
        <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-wider text-white">TC / USD</span>
                <span className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400 font-medium">1 YEAR</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Historical liquidation tracking</p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-1 text-rose-400 font-semibold text-sm bg-rose-500/10 px-2 py-1 rounded-lg">
                <ArrowDownRight size={16} /> -29.61%
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">Net Performance</p>
            </div>
          </div>

          {/* SVG Sparkline Micro-Chart */}
          <div className="h-28 w-full pt-4 relative group">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Chart Filled Area */}
              <path
                d="M 0 20 Q 50 15, 100 45 T 200 35 T 300 75 T 400 85 L 400 100 L 0 100 Z"
                fill="url(#chartGlow)"
              />
              {/* Chart Line */}
              <path
                d="M 0 20 Q 50 15, 100 45 T 200 35 T 300 75 T 400 85"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Highlight Node */}
              <circle cx="400" cy="85" r="4" fill="#f43f5e" className="animate-pulse" />
            </svg>
          </div>

          {/* Chart X-Axis Timestamps */}
          <div className="flex justify-between items-center text-[11px] text-gray-500 px-1 font-mono tracking-tight">
            <span>SEP 24</span>
            <span>MAR 25</span>
            <span>SEP 25</span>
            <span>DEC 25</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Performance & Support Metrics Grid */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 w-full pl-0 lg:pl-4">

          {/* Metric Box: Market Size */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-colors">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Market Size</p>
              <p className="text-xl font-bold text-white mt-0.5">$128.37M</p>
            </div>
          </div>

          {/* Metric Box: Total Borrowed */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-colors">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Layers size={20} />
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Total Borrowed Pools</p>
              <p className="text-xl font-bold text-white mt-0.5">21 <span className="text-xs font-normal text-gray-500">Active</span></p>
            </div>
          </div>

          {/* Metric Box: Support Services */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Headphones size={20} />
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Support Services</p>
              <p className="text-xl font-bold text-white mt-0.5">24 / 7</p>
            </div>
          </div>

          {/* Metric Box: Support Access */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-colors">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">Support Access</p>
              <p className="text-sm font-semibold text-emerald-400 mt-1 cursor-pointer hover:underline inline-flex items-center gap-1">
                Instant Gateway Open &rarr;
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
