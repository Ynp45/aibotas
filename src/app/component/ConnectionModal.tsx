"use client";

import React, { useEffect, useState } from "react";
import { X, Loader2, Cpu } from "lucide-react";

interface ConnectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
}

export default function ConnectionModal({ isOpen, onClose, serviceTitle }: ConnectionModalProps) {
    const [seconds, setSeconds] = useState(6);

    useEffect(() => {
        if (!isOpen) {
            setSeconds(6); // Reset if modal is closed
            return;
        }

        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    if (!isOpen) return null;



    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop blur layer wrapper */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Core Container Card */}
            <div className="bg-[#0F1318]/90 border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden z-10 text-center space-y-6 backdrop-blur-xl">
                {/* Abstract Technical Background Vector Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Header Navigation Actions */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                        <Cpu size={14} className="text-blue-400" />
                        <span className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">System Bridge Node</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/5"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Central Pulse Indicator Interface */}
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20 modal-pulse-ring" />
                    <div className="w-14 h-14 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center text-blue-400 relative">
                        <Loader2 size={24} className="animate-spin" />
                    </div>
                </div>

                {/* Content Deck Blocks */}
                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        {serviceTitle || "Buy Token / Coin"}
                    </h3>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                        Connecting to secure verification oracle nodes. Please keep this browser window open.
                    </p>
                </div>

                {/* Dynamic Matrix Countdown Overlay Ticker */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl py-3 px-4 max-w-[240px] mx-auto">
                    <p className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                        CONNECTING &middot; 0{seconds} SEC
                    </p>
                </div>
            </div>
        </div>
    );
}
