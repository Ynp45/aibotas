// app/components/CryptoRain.tsx
"use client";

import React, { useEffect, useState } from "react";

interface RainNode {
    id: number;
    symbol: string;
    left: string;
    delay: string;
    duration: string;
    color: string;
    size: string;
}

export default function CryptoRain() {
    const [nodes, setNodes] = useState<RainNode[]>([]);
    const tokens = ["BTC", "ETH", "SOL", "BNB", "XRP", "ADA", "AVAX", "DOT", "LINK", "UNI"];
    const colors = [
        "text-emerald-500/30",
        "text-blue-500/25",
        "text-purple-500/20",
        "text-amber-500/25",
        "text-cyan-500/25"
    ];
    const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-xl"];

    useEffect(() => {
        // Generate a fixed structural array sequence to balance client/server watermarks
        const seedNodes = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            symbol: tokens[Math.floor(Math.random() * tokens.length)],
            left: `${(i * 4) + Math.random() * 2}%`,
            delay: `${Math.random() * 8}s`,
            duration: `${6 + Math.random() * 7}s`,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: sizes[Math.floor(Math.random() * sizes.length)]
        }));
        setNodes(seedNodes);
    }, []);

    return (
        <div className="absolute inset-x-0 top-0 h-[50vh] overflow-hidden pointer-events-none select-none z-1">
            {nodes.map((node) => (
                <span
                    key={node.id}
                    className={`crypto-rain-particle ${node.color} ${node.size}`}
                    style={{
                        left: node.left,
                        animationDelay: node.delay,
                        animationDuration: node.duration,
                    }}
                >
                    {node.symbol}
                </span>
            ))}
        </div>
    );
}
