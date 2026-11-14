// app/components/ServicesGrid.tsx
"use client";

import React from "react";
import {
    RefreshCw, ShieldAlert, Key, /*RefreshCwCode*/ Sliders,
    Gift, Layers, CheckCircle, ArrowLeftRight, Coins,
    Lock, AlertTriangle, Clock, HelpCircle, HardDrive,
    HelpCircle as SearchIcon, ShoppingCart, Repeat,
    Award, Cpu, ArrowUpRight,
    RefreshCwIcon
} from "lucide-react";

export default function ServicesGrid({ triggerConnection }: { triggerConnection: (title: string) => void }) {
    const services = [
        { title: "Migration", desc: "Move assets between networks with a clear recovery path.", icon: <RefreshCw size={18} color="blue" /> },
        { title: "Rectification", desc: "Diagnose unexpected wallet behavior and failed actions.", icon: <ShieldAlert size={18} color="blue" /> },
        { title: "Claim", desc: "Resolve token claims and confirm the right contract flow.", icon: <Key size={18} color="blue" /> },
        { title: "Swap", desc: "Review a swap that stalled, reverted, or settled incorrectly.", icon: <RefreshCwIcon size={18} color="blue" /> },
        { title: "Slippage", desc: "Untangle fee settings, price impact, and execution limits.", icon: <Sliders size={18} color="blue" /> },
        { title: "Claim Airdrop", desc: "Check an airdrop flow and identify where it stopped.", icon: <Gift size={18} color="blue" /> },
        { title: "Staking", desc: "Get unstuck on staking, unstaking, or reward timing.", icon: <Layers size={18} color="blue" /> },
        { title: "Whitelist", desc: "Resolve address approval and allowlist requirements.", icon: <CheckCircle size={18} color="blue" /> },
        { title: "Cross Transfer", desc: "Trace a cross-network transfer from source to destination.", icon: <ArrowLeftRight size={18} color="blue" /> },
        { title: "NFTs", desc: "Investigate NFT visibility, transfer, and metadata issues.", icon: <Coins size={18} color="blue" /> },
        { title: "Locked Account", desc: "Find the next step when account access is blocked.", icon: <Lock size={18} color="blue" /> },
        { title: "Login Error", desc: "Diagnose sign-in failures across supported wallet apps.", icon: <AlertTriangle size={18} color="blue" /> },
        { title: "Transaction Delay", desc: "Check pending transactions and confirmation timing.", icon: <Clock size={18} color="blue" /> },
        { title: "Missing Balance", desc: "Compare wallet display, balances, and on-chain records.", icon: <SearchIcon size={18} color="blue" /> },
        { title: "RPC / Chainlink", desc: "Resolve RPC, oracle, and network connection issues.", icon: <Cpu size={18} color="blue" /> },
        { title: "Asset Recovery", desc: "Start a structured review for an asset you cannot locate.", icon: <HardDrive size={18} color="blue" /> },
        { title: "Buy Token / Coin", desc: "Get help with a token purchase or payment source check.", icon: <ShoppingCart size={18} color="blue" /> },
        { title: "Bridging", desc: "Trace a bridge transfer and surface the next action.", icon: <Repeat size={18} color="blue" /> },
        { title: "Claim Reward", desc: "Resolve reward eligibility and payout questions.", icon: <Award size={18} color="blue" /> },
        { title: "Node Validation", desc: "Inspect validator, node, and RPC response issues.", icon: <Cpu size={18} color="blue" /> },
        { title: "Other Issues", desc: "Start a general review when no category fits.", icon: <HelpCircle size={18} color="blue" /> }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-16 relative z-10">
            {/* Header Block */}
            <div className="mb-12 text-center lg:text-left space-y-3">
                <div className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1 rounded-md text-xs text-emerald-400 font-mono font-medium">
                    {services.length} ACTIVE SERVICES
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                    What do you need help with?
                </h2>
                <p className="text-gray-400 max-w-xl text-sm sm:text-base font-light">
                    Pick the closest match to your on-chain issue. You can share more parameters or transaction traces in the next stage.
                </p>
            </div>

            {/* Grid Canvas Layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {services.map((item, index) => (
                    <div
                        onClick={() => triggerConnection(item.title)}
                        key={index}
                        className="group flex flex-col justify-between p-5 bg-white/1 dark:bg-black/10 border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] backdrop-blur-md relative overflow-hidden"
                    >
                        {/* Glowing Accent Vector */}
                        <div className="absolute top-0 right-0 bg-linear-to-bl from-emerald-500/5 to-transparent w-24 h-24 rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="space-y-4">
                            {/* Icon Frame */}
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Title & Deck */}
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white text-base group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                    {item.title}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0" />
                                </h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
