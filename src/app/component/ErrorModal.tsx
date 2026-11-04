"use client";

import React from "react";

import { X, AlertTriangle, ArrowRight, CornerUpLeft } from "lucide-react";

interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onManualConnect: () => void;
    serviceTitle: string;
}



export default function ErrorModal({ isOpen, onClose, onManualConnect, serviceTitle }: ErrorModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Main Error Modal Card */}
            <div className="bg-[#0F1318]/95 border border-rose-500/20 w-full max-w-md rounded-2xl p-6 shadow-2xl relative overflow-hidden z-10 text-center space-y-6 backdrop-blur-xl">
                {/* Subtle Ambient Red Alert Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Technical Header Node */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                        <AlertTriangle size={14} className="text-rose-400" />
                        <span className="text-[11px] font-mono text-gray-400 tracking-wider uppercase">Connection Terminated</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/5"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Big Alert Icon Anchor */}
                <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mx-auto">
                    <AlertTriangle size={28} className="animate-pulse" />
                </div>

                {/* Core Deck Message */}
                <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        Unable to connect
                    </h3>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                        Unable to connect to the <span className="text-gray-200 font-semibold">{serviceTitle || "Buy Token / Coin"}</span> service right now.
                    </p>
                </div>

                {/* Primary Operational Action Anchors */}
                <div className="space-y-2 pt-2">
                    <button
                        onClick={onManualConnect}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-gray-950 font-bold py-3.5 rounded-xl hover:opacity-95 transition-opacity cursor-pointer text-sm shadow-md"
                    >
                        Please connect manually <ArrowRight size={16} />
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 font-medium py-3 rounded-xl transition-all cursor-pointer text-xs"
                    >
                        <CornerUpLeft size={14} /> Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
