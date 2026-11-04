import React from "react";
import CryptoRain from "./CryptoRain"; // Ensure this matches your component's path
import { ArrowUpRight, Shield, Zap, TrendingUp } from "lucide-react";

export default function Hero({ openConnectionModal }: { openConnectionModal: (title: string) => void }) {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 overflow-hidden">

            {/* --- TAILWIND V4 ANIMATED BACKDROP --- */}
            <div className="crypto-bg-system">
                {/* Dynamic Canvas Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] animate-fluid-bg" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[160px] animate-fluid-bg [animation-delay:4s]" />
                <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[130px] animate-fluid-bg [animation-delay:8s]" />

                {/* INTEGRATED: Falling Crypto Icon Matrix System */}
                <CryptoRain />

                {/* Floating Digital Nodes */}
                <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-emerald-400 rounded-full blur-[1px] animate-ambient-float" />
                <div className="absolute top-[60%] left-[8%] w-2 h-2 bg-blue-400 rounded-full blur-[2px] animate-ambient-float [animation-delay:2s] [animation-duration:18s]" />
                <div className="absolute top-[75%] right-[20%] w-4 h-4 bg-emerald-500/30 rounded-full blur-[1px] animate-ambient-float [animation-duration:16s]" />

                {/* Vector Grid System */}
                <div className="crypto-grid-mask" />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full z-10 relative">
                {/* Copy Deck Left */}
                <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-gray-300 font-medium">v2.0 Platform Live</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        The Next Generation <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                            Crypto Support Ecosystem
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                        A focused support desk for wallet, transaction, bridge, token, and network problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-gray-950 font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                            onClick={() => openConnectionModal("Get Started")}
                        >
                            Get Started <ArrowUpRight size={20} />
                        </button>
                        <button className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-all backdrop-blur-md"
                            onClick={() => openConnectionModal("Learn More")}
                        >
                            More services
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-md mx-auto lg:mx-0">
                        <div>
                            <p className="text-2xl font-bold text-white">$4.2B+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Total Volume</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">0.01%</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Avg. Slippage</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">200k+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Active Users</p>
                        </div>
                    </div>
                </div>

                {/* Dynamic Card Right */}
                <div className="lg:col-span-5 w-full">
                    <div className="bg-white/[0.03] dark:bg-black/40 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
                                    <TrendingUp size={22} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Market Overview</h3>
                                    <p className="text-xs text-gray-500">Live feed indices</p>
                                </div>
                            </div>
                            <span className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-gray-400 border border-white/5">USD</span>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: "Bitcoin", symbol: "BTC", price: "$77,880.37", change: "+1.42%", up: true },
                                { name: "Ethereum", symbol: "ETH", price: "$2,265.49", change: "+0.85%", up: true },
                                { name: "Solana", symbol: "SOL", price: "$164.20", change: "-0.32%", up: false },
                            ].map((asset, i) => (
                                <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center font-bold text-sm text-gray-300">
                                            {asset.symbol}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm text-white">{asset.name}</h4>
                                            <p className="text-xs text-gray-500">{asset.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-sm text-white">{asset.price}</p>
                                        <p className={`text-xs ${asset.up ? 'text-emerald-400' : 'text-rose-400'} font-medium`}>
                                            {asset.change}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex gap-4 text-xs text-gray-400">
                            <div className="flex items-center gap-1.5"><Shield size={14} className="text-emerald-400" /> SEC Compliant</div>
                            <div className="flex items-center gap-1.5"><Zap size={14} className="text-blue-400" /> Non-Custodial</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
