// app/components/LiveTicker.tsx
"use client";

import React, { useEffect, useState } from "react";

interface CryptoAsset {
    symbol: string;
    name: string;
    price: string;
    change: string;
    up: boolean;
}

export default function LiveTicker() {
    const [tickerData, setTickerData] = useState<CryptoAsset[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLivePrices() {
            try {
                const res = await fetch("/api/prices");
                if (res.ok) {
                    const data = await res.json();
                    setTickerData(data);
                }
            } catch (err) {
                console.error("Pricing sync error:", err);
            } finally {
                setLoading(false);
            }
        }

        loadLivePrices();
        const interval = setInterval(loadLivePrices, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading || tickerData.length === 0) {
        return (
            <div className="w-full bg-[#07090C] border-b border-white/5 py-2.5 text-center text-xs text-gray-500 font-mono">
                Establishing live data socket layer...
            </div>
        );
    }

    return (
        <div className="w-full sticky bg-[#07090C] border-b border-white/5 py-2.5 overflow-hidden top-0 z-50 flex items-center select-none">
            {/* Dynamic Keyframes Injection to Force Instant Browser Translation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes inlineTickerSlide {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .forced-ticker-track {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: inlineTickerSlide 25s linear infinite;
        }
        .forced-ticker-track:hover {
          animation-play-state: paused;
        }
      `}} />

            {/* Edge Blur Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07090C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07090C] to-transparent z-10 pointer-events-none" />

            {/* Endless Motion Wrapper using Forced Style Class */}
            <div className="forced-ticker-track cursor-pointer">

                {/* LOOP 1: Primary render stream */}
                <div className="flex items-center gap-8 shrink-0">
                    {tickerData.map((token, index) => (
                        <div key={`p-${index}`} className="inline-flex items-center gap-2.5">
                            <span className="text-xs font-bold text-gray-200 tracking-wider font-mono">{token.symbol}</span>
                            <span className="text-xs font-medium text-white/90">{token.price}</span>
                            <span className={`text-[11px] font-semibold font-mono ${token.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {token.change}
                            </span>
                            <span className="text-white/10 ml-2">|</span>
                        </div>
                    ))}
                </div>

                {/* LOOP 2: Identical shadow copy running back-to-back to bridge the scrolling canvas gap */}
                <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
                    {tickerData.map((token, index) => (
                        <div key={`s-${index}`} className="inline-flex items-center gap-2.5">
                            <span className="text-xs font-bold text-gray-200 tracking-wider font-mono">{token.symbol}</span>
                            <span className="text-xs font-medium text-white/90">{token.price}</span>
                            <span className={`text-[11px] font-semibold font-mono ${token.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {token.change}
                            </span>
                            <span className="text-white/10 ml-2">|</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
